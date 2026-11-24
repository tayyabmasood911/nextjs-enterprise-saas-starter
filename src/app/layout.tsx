import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise SaaS Starter | Next.js 14 App Router',
  description: 'Production-ready enterprise SaaS boilerplate with multi-tenancy, Stripe billing, Edge middleware, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                SaaS
              </div>
              <span className="font-bold text-lg text-slate-900">Enterprise Starter</span>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium text-slate-600">
              <a href="/#features" className="hover:text-blue-600 transition">Features</a>
              <a href="/#pricing" className="hover:text-blue-600 transition">Pricing</a>
              <a href="/dashboard" className="text-blue-600 hover:text-blue-700 font-semibold">Dashboard</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 py-8 mt-24 bg-slate-50 text-center text-sm text-slate-500">
          <p>&copy; 2026 Tayyab Masood. Enterprise Production SaaS Blueprint.</p>
        </footer>
      </body>
    </html>
  );
}
