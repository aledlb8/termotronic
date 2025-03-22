import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.json(
        { error: 'Warranty code is required' },
        { status: 400 }
      );
    }

    const warranty = await prisma.warranty.findUnique({
      where: {
        code: code,
      },
      include: {
        retailer: true,
      },
    });

    if (!warranty) {
      return NextResponse.json(
        { error: 'Warranty not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(warranty);
  } catch (error) {
    console.error('Error verifying warranty:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 