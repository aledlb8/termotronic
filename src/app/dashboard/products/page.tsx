'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  description: string | null;
  models: ProductModel[];
}

interface ProductModel {
  id: string;
  name: string;
  productId: string;
}

const productSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().optional(),
});

const modelSchema = z.object({
  name: z.string().min(2, 'Model name must be at least 2 characters'),
});

type ProductForm = z.infer<typeof productSchema>;
type ModelForm = z.infer<typeof modelSchema>;

export default function ProductsPage() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showModelForm, setShowModelForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const router = useRouter();

  const {
    register: registerProduct,
    handleSubmit: handleProductSubmit,
    reset: resetProduct,
    formState: { errors: productErrors, isSubmitting: isProductSubmitting },
  } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
  });

  const {
    register: registerModel,
    handleSubmit: handleModelSubmit,
    reset: resetModel,
    formState: { errors: modelErrors, isSubmitting: isModelSubmitting },
  } = useForm<ModelForm>({
    resolver: zodResolver(modelSchema),
  });

  useEffect(() => {
    if (session?.user?.role !== 'ADMIN') {
      return router.push('/dashboard');
    }

    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        toast.error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`/api/products?id=${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to delete product');
      }

      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError(error instanceof Error ? error.message : 'Failed to delete product');
    }
  };

  const onProductSubmit = async (data: ProductForm) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to create product');
      }

      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      setShowProductForm(false);
      resetProduct();
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to create product. Please try again.');
    }
  };

  const onModelSubmit = async (data: ModelForm) => {
    if (!selectedProduct) return;

    try {
      const response = await fetch('/api/products/models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          productId: selectedProduct,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to create model');
      }

      const newModel = await response.json();
      setProducts(products.map(product =>
        product.id === selectedProduct
          ? { ...product, models: [...product.models, newModel] }
          : product
      ));
      setShowModelForm(false);
      resetModel();
      setError(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to create model. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        {session?.user?.role === 'ADMIN' && (
          <Button onClick={() => setShowProductForm(true)}>Add Product</Button>
        )}
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
                <TableHead className="font-semibold">Models</TableHead>
                {session?.user?.role === 'ADMIN' && (
                  <TableHead className="text-right font-semibold">Actions</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.description || '-'}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {product.models.map((model) => (
                        <Badge key={model.id} variant="secondary">
                          {model.name}
                        </Badge>
                      ))}
                      {session?.user?.role === 'ADMIN' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedProduct(product.id);
                            setShowModelForm(true);
                          }}
                        >
                          Add Model
                        </Button>
                      )}
                    </div>
                  </TableCell>
                  {session?.user?.role === 'ADMIN' && (
                    <TableCell className="text-right">
                      <Button
                        onClick={() => handleDelete(product.id)}
                        variant="destructive"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showProductForm} onOpenChange={setShowProductForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleProductSubmit(onProductSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Name</label>
              <Input
                {...registerProduct('name')}
                className="w-full"
                placeholder="Enter product name"
              />
              {productErrors.name && (
                <p className="text-sm text-red-500">{productErrors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                {...registerProduct('description')}
                className="w-full"
                placeholder="Enter product description (optional)"
              />
              {productErrors.description && (
                <p className="text-sm text-red-500">{productErrors.description.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowProductForm(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isProductSubmitting}>
                Create Product
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showModelForm} onOpenChange={setShowModelForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Model</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleModelSubmit(onModelSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Model Name</label>
              <Input
                {...registerModel('name')}
                className="w-full"
                placeholder="Enter model name"
              />
              {modelErrors.name && (
                <p className="text-sm text-red-500">{modelErrors.name.message}</p>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowModelForm(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isModelSubmitting}>
                Create Model
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div >
  );
} 