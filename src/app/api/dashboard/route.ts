import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { Warranty } from '@prisma/client';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user's warranties based on their role
    let warranties: Warranty[] = [];
    if (session.user?.role === 'ADMIN') {
      warranties = await prisma.warranty.findMany({
        include: {
          retailer: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } else if (session.user?.role === 'RETAILER') {
      warranties = await prisma.warranty.findMany({
        where: {
          retailerId: session.user?.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    }

    // Calculate stats
    const now = new Date();
    const stats = {
      totalWarranties: warranties.length,
      activeWarranties: warranties.filter(
        (w) => !w.isUsed && w.expiryDate > now
      ).length,
      expiredWarranties: warranties.filter(
        (w) => w.expiryDate <= now
      ).length,
      usedWarranties: warranties.filter((w) => w.isUsed).length,
    };

    // Get recent warranties (last 5)
    const recentWarranties = warranties.slice(0, 5).map((w) => ({
      id: w.id,
      code: w.code,
      productName: w.productName,
      expiryDate: w.expiryDate,
      isUsed: w.isUsed,
    }));

    return NextResponse.json({
      stats,
      recentWarranties,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 