// app/page.tsx (Server Component)
import AnalyticsChart from "@/app/components/AnalyticsChart";

export default function Page() {
  return (
    <main>
      <div className="">
        <AnalyticsChart />
      </div>

      {/* Add more charts or cards here */}
    </main>
  );
}
