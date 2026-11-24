import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    subscription: {
      plan: 'Enterprise',
      status: 'active',
      seats: 50,
      renews_at: '2026-12-31T00:00:00Z',
      billing_currency: 'USD',
      amount_monthly: 499.00
    }
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: 'Subscription updated',
      plan: body.plan || 'Enterprise'
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
