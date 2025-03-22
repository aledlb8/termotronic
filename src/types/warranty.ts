import { User, Product, ProductModel, Warranty } from '@prisma/client';

export interface WarrantyWithRelations extends Warranty {
  retailer: User;
  product: Product;
  model: ProductModel;
}

export interface CreateWarrantyInput {
  code: string;
  productId: string;
  modelId: string;
  productName: string;
  productModel: string;
  purchaseDate: string;
  expiryDate: string;
}

export interface UpdateWarrantyInput {
  id: string;
  isUsed: boolean;
} 