'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { QRCodeSVG } from 'qrcode.react';
import { nanoid } from 'nanoid';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Label,
} from "@/components/ui/label";

interface Warranty {
  id: string;
  code: string;
  productName: string;
  productModel: string;
  purchaseDate: string;
  expiryDate: string;
  isUsed: boolean;
  usedAt: string | null;
  retailer: {
    name: string;
  };
}

interface WarrantyFormData {
  productName: string;
  productModel: string;
  purchaseDate: string;
  expiryDate: string;
  retailerId: string;
}

interface RetailStore {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  models: ProductModel[];
}

interface ProductModel {
  id: string;
  name: string;
}

export default function WarrantiesPage() {
  const { data: session } = useSession();
  const [warranties, setWarranties] = useState<Warranty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'expired' | 'used'>('all');
  const [verifyCode, setVerifyCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<Warranty | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedWarrantyId, setSelectedWarrantyId] = useState<string | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [newWarranty, setNewWarranty] = useState<Warranty | null>(null);

  const formSchema = z.object({
    purchaseDate: z.string().min(1, 'Purchase date is required'),
    expiryDate: z.string().min(1, 'Expiry date is required'),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchaseDate: '',
      expiryDate: '',
    },
  });

  const filteredWarranties = warranties && Array.isArray(warranties) ? warranties.filter((warranty) => {
    const matchesSearch = warranty.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      warranty.productName.toLowerCase().includes(searchTerm.toLowerCase());

    const now = new Date();
    const expiryDate = new Date(warranty.expiryDate);

    switch (filter) {
      case 'active':
        return !warranty.isUsed && expiryDate > now && matchesSearch;
      case 'expired':
        return expiryDate <= now && matchesSearch;
      case 'used':
        return warranty.isUsed && matchesSearch;
      default:
        return matchesSearch;
    }
  }) : [];

  const fetchWarranties = async () => {
    try {
      const response = await fetch('/api/warranties');
      const data = await response.json();
      setWarranties(data);
    } catch (error) {
      console.error('Error fetching warranties:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    if (session?.user?.role !== 'ADMIN' && session?.user?.role !== 'RETAILER') return;
    
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        toast.error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchWarranties();
    if (session?.user?.role === 'ADMIN' || session?.user?.role === 'RETAILER') {
      fetchProducts();
    }
  }, [session?.user?.role]);

  const handleVerifyWarranty = async () => {
    if (!verifyCode) return;
    
    setVerifying(true);
    try {
      const response = await fetch(`/api/warranties/verify?code=${verifyCode}`);
      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.error || 'Failed to verify warranty');
        return;
      }
      
      setVerifyResult(data);
      toast.success('Warranty found');
    } catch (error) {
      console.error('Error verifying warranty:', error);
      toast.error('Failed to verify warranty');
    } finally {
      setVerifying(false);
    }
  };

  const handleMarkAsUsed = async (warrantyId: string) => {
    try {
      const response = await fetch('/api/warranties', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: warrantyId,
          isUsed: true,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.error || 'Failed to update warranty');
      }

      // Refresh warranties list
      const warrantyResponse = await fetch('/api/warranties');
      const refreshedData = await warrantyResponse.json();
      setWarranties(refreshedData);
      setVerifyResult(null);
      setVerifyCode('');
      setIsConfirmOpen(false);
      toast.success('Warranty marked as used');
    } catch (error) {
      console.error('Error updating warranty:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update warranty');
    }
  };

  const generateWarrantyCode = () => {
    return nanoid(10).toUpperCase();
  };
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const warrantyCode = generateWarrantyCode();
      const selectedProductData = products.find(p => p.id === selectedProduct);
      const selectedModelData = selectedProductData?.models.find(m => m.id === selectedModel);

      if (!selectedProductData || !selectedModelData) {
        toast.error('Selected product or model not found');
        return;
      }

      const response = await fetch('/api/warranties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: warrantyCode,
          productId: selectedProduct,
          modelId: selectedModel,
          productName: selectedProductData.name,
          productModel: selectedModelData.name,
          purchaseDate: values.purchaseDate,
          expiryDate: values.expiryDate,
          retailerId: session?.user?.id,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.error || 'Failed to create warranty');
      }

      const data = await response.json();
      setNewWarranty(data);
      setWarranties([data, ...warranties]);
      toast.success('Warranty created successfully');
      setShowAddDialog(false);
      form.reset();
      setSelectedProduct('');
      setSelectedModel('');
    } catch (error) {
      console.error('Error creating warranty:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create warranty');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {session?.user?.role === 'RETAILER' && (
        <Button 
          onClick={() => setShowAddDialog(true)}
          className="mb-4"
        >
          Create Warranty
        </Button>
      )}

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 items-center">
              <Input
                type="text"
                placeholder="Search warranties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />

              <Select
                value={filter}
                onValueChange={(value: 'all' | 'active' | 'expired' | 'used') => setFilter(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 items-center">
              <Input
                type="text"
                placeholder="Enter warranty code"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                className="max-w-sm"
              />
              <Button 
                onClick={handleVerifyWarranty}
                disabled={verifying}
              >
                Verify Warranty
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Status</TableHead>
                  {session?.user?.role === 'ADMIN' && (
                    <TableHead>Store</TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWarranties.map((warranty) => {
                  const isExpired = new Date(warranty.expiryDate) <= new Date();
                  return (
                    <TableRow key={warranty.id}>
                      <TableCell>{warranty.code}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{warranty.productName}</div>
                          <div className="text-sm text-gray-500">{warranty.productModel}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {format(new Date(warranty.purchaseDate), 'MMM d, yyyy')}
                      </TableCell>
                      <TableCell>
                        {format(new Date(warranty.expiryDate), 'MMM d, yyyy')}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            warranty.isUsed
                              ? "secondary"
                              : isExpired
                              ? "destructive"
                              : "default"
                          }
                        >
                          {warranty.isUsed
                            ? 'Used'
                            : isExpired
                            ? 'Expired'
                            : 'Active'}
                        </Badge>
                      </TableCell>
                      {session?.user?.role === 'ADMIN' && (
                        <TableCell>{warranty.retailer.name}</TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {session?.user?.role === 'RETAILER' && (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Warranty</DialogTitle>
              <DialogDescription>
                Create a new warranty for a product.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Select
                  value={selectedProduct}
                  onValueChange={(value) => {
                    setSelectedProduct(value);
                    setSelectedModel('');
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.isArray(products) && products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedProduct && (
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Select
                    value={selectedModel}
                    onValueChange={setSelectedModel}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.isArray(products) && products
                        .find((p) => p.id === selectedProduct)
                        ?.models?.map((model) => (
                          <SelectItem key={model.id} value={model.id}>
                            {model.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="purchaseDate">Purchase Date</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  {...form.register('purchaseDate')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  {...form.register('expiryDate')}
                />
              </div>

              <DialogFooter>
                <Button 
                  type="submit" 
                  disabled={!selectedProduct || !selectedModel || !form.formState.isValid}
                >
                  Create Warranty
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {session?.user?.role === 'ADMIN' && (
        <Dialog open={!!newWarranty} onOpenChange={() => setNewWarranty(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Warranty Created Successfully</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-center">
                <QRCodeSVG
                  value={`${window.location.origin}/verify/${newWarranty?.code}`}
                  size={200}
                />
              </div>
              
              <div className="text-center">
                <p className="font-medium">Warranty Code:</p>
                <p className="text-2xl font-bold">{newWarranty?.code}</p>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setNewWarranty(null)}>Close</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
} 