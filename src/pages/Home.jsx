import Hero from "../Components/Hero";
import StockTable from "../Components/StockTable";
import InvestmentCard from "../Components/InvestmentCard";
import EarningsGraph from "../Components/EarningGraph";


export default function Home() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100">
<Hero />
<StockTable />
<div className="space-y-6">
<InvestmentCard />
<EarningsGraph />
</div>
</div>
);
}