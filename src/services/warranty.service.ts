import { prisma } from '@/lib/prisma';
import { CreateWarrantyInput, UpdateWarrantyInput, WarrantyWithRelations } from '@/types/warranty';
import { Prisma } from '@prisma/client';

export class WarrantyService {
  static async getWarranties(userId: string, userRole: string): Promise<WarrantyWithRelations[]> {
    if (userRole === 'ADMIN') {
      return prisma.warranty.findMany({
        where: {
          AND: [
            { product: { isNot: null } },
            { model: { isNot: null } },
            // { retailer: { isNot: null } },
          ],
        },
        include: {
          retailer: true,
          product: true,
          model: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }) as Promise<WarrantyWithRelations[]>;
    }

    return prisma.warranty.findMany({
      where: {
        retailerId: userId,
        AND: [
          { product: { isNot: null } },
          { model: { isNot: null } },
        ],
      },
      include: {
        product: true,
        model: true,
        retailer: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }) as Promise<WarrantyWithRelations[]>;
  }

  static async createWarranty(input: CreateWarrantyInput, retailerId: string): Promise<WarrantyWithRelations> {
    if (!retailerId) {
      throw new Error('Retailer ID is required');
    }

    return prisma.warranty.create({
      data: {
        code: input.code,
        productName: input.productName,
        productModel: input.productModel,
        purchaseDate: new Date(input.purchaseDate),
        expiryDate: new Date(input.expiryDate),
        product: {
          connect: { id: input.productId }
        },
        model: {
          connect: { id: input.modelId }
        },
        retailer: {
          connect: { id: retailerId }
        }
      },
      include: {
        retailer: true,
        product: true,
        model: true,
      },
    }) as Promise<WarrantyWithRelations>;
  }

  static async updateWarranty(input: UpdateWarrantyInput, retailerId: string): Promise<WarrantyWithRelations> {
    return prisma.warranty.update({
      where: {
        id: input.id,
        retailerId,
      },
      data: {
        isUsed: input.isUsed,
        usedAt: input.isUsed ? new Date() : null,
      },
      include: {
        retailer: true,
        product: true,
        model: true,
      },
    }) as Promise<WarrantyWithRelations>;
  }

  static async deleteWarranty(id: string): Promise<void> {
    await prisma.warranty.delete({
      where: { id },
    });
  }
} 