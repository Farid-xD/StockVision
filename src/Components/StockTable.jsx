import { stockData } from "../data/stocks";

export default function StockTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Market Overview</h3>

      <table className="w-full text-sm">
        <thead className="border-b text-slate-500">
          <tr>
            <th className="py-2 text-left">Company</th>
            <th className="py-2">Low</th>
            <th className="py-2">High</th>
            <th className="py-2">Avg</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((s, i) => (
            <tr key={i} className="hover:bg-slate-50 transition">
              <td className="font-medium">{s.name}</td>
              <td>${s.low}</td>
              <td className="text-green-600">${s.high}</td>
              <td>${s.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
