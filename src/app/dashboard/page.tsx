export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Enterprise Organization Dashboard</h1>
        <p className="text-sm text-slate-500">Manage your subscription, API keys, and cloud infrastructure.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <dt className="text-xs font-semibold text-slate-500 uppercase">Monthly API Requests</dt>
          <dd className="mt-2 text-3xl font-extrabold text-slate-900">12,482,900</dd>
          <p className="mt-1 text-xs text-emerald-600 font-medium">&uarr; 14% from last month</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <dt className="text-xs font-semibold text-slate-500 uppercase">Active Subscriptions</dt>
          <dd className="mt-2 text-3xl font-extrabold text-blue-600">Enterprise Tier</dd>
          <p className="mt-1 text-xs text-slate-500">Auto-renews Dec 2026</p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <dt className="text-xs font-semibold text-slate-500 uppercase">System Health</dt>
          <dd className="mt-2 text-3xl font-extrabold text-emerald-600">99.99%</dd>
          <p className="mt-1 text-xs text-slate-500">Zero incidents in 90 days</p>
        </div>
      </div>

      {/* API Keys Table */}
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-base font-semibold text-slate-900">Production API Keys</h2>
          <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition">
            Generate New Key
          </button>
        </div>
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Key Identifier</th>
              <th className="px-6 py-3 text-left">Scope</th>
              <th className="px-6 py-3 text-left">Created</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-6 py-4 font-mono text-xs text-slate-700">pk_live_79a941bf2c8e</td>
              <td className="px-6 py-4 text-slate-600">Read / Write / Ingest</td>
              <td className="px-6 py-4 text-slate-500">2026-11-20</td>
              <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-emerald-100 text-emerald-700 font-medium">Active</span></td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-mono text-xs text-slate-700">pk_test_32d8471cc9aa</td>
              <td className="px-6 py-4 text-slate-600">Sandbox Test Scope</td>
              <td className="px-6 py-4 text-slate-500">2026-11-22</td>
              <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-700 font-medium">Test</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
