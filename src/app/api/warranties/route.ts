import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { WarrantyService } from '@/services/warranty.service';
import { CreateWarrantyInput, UpdateWarrantyInput } from '@/types/warranty';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const warranties = await WarrantyService.getWarranties(
      session.user.id,
      session.user.role
    );

    return NextResponse.json(warranties);
  } catch (error) {
    console.error('Error fetching warranties:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch warranties' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized - User ID not found' }, { status: 401 });
    }

    if (session.user.role !== 'ADMIN' && session.user.role !== 'RETAILER') {
      return NextResponse.json(
        { error: 'Only retailers and admins can create warranties' },
        { status: 403 }
      );
    }

    const body = await request.json() as CreateWarrantyInput;
    
    if (!body.productId || !body.modelId) {
      return NextResponse.json(
        { error: 'Product and model IDs are required' },
        { status: 400 }
      );
    }

    const warranty = await WarrantyService.createWarranty(body, session.user.id);

    return NextResponse.json(warranty);
  } catch (error) {
    console.error('Error creating warranty:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create warranty' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || session.user.role !== 'RETAILER') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json() as UpdateWarrantyInput;
    const warranty = await WarrantyService.updateWarranty(body, session.user.id);

    return NextResponse.json(warranty);
  } catch (error) {
    console.error('Error updating warranty:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update warranty' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Warranty ID is required' },
        { status: 400 }
      );
    }

    await WarrantyService.deleteWarranty(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting warranty:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete warranty' },
      { status: 500 }
    );
  }
} 