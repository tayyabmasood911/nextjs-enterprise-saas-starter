import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'HEALTHY',
    timestamp: new Date().toISOString(),
    service: 'nextjs-enterprise-saas-starter',
    version: '1.0.0',
    uptime_seconds: process.uptime(),
    framework: 'Next.js 14 App Router'
  }, { status: 200 });
}
