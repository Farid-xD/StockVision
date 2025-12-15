import { useState } from "react";

export default function InvestmentCard() {
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(5);

  // Simple compound growth calculation
  const value = (amount * Math.pow(1.01, years * 12)).toFixed(0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-bold text-xl mb-4">Investment Calculator</h3>

      <input
        type="number"
        className="w-full mb-3 border p-2 rounded"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Investment Amount"
      />

      <input
        type="number"
        className="w-full mb-3 border p-2 rounded"
        value={years}
        onChange={(e) => setYears(Number(e.target.value))}
        placeholder="Years"
      />

      <p className="text-green-600 font-bold text-2xl">${value}</p>
    </div>
  );
}
