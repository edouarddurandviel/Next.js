import { getAllStatistiques, getStats } from "@app/services/analytics/data/analytics";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const stats = await getStats();
  return {
    title: stats[0].name,
    description: stats[0].name,
  };
}

const AnalyticsPage = async () => {
  const stats = await getStats();
  const statsApiGET = await getAllStatistiques();

  return (
    <>
      <div>My personal list</div>
      <div>Page buy default first rendering on the server side.</div>
      <div>Use of fetch with cache: no-store argument.</div>

      <nav>
        {stats.map((company) => (
          <div key={company.id}>
            <Link href={`/dashboard/analytics/${company.id}`}>
              {company.name} - from {company.country}
            </Link>
          </div>
        ))}
      </nav>

      <nav>
        {statsApiGET.map((stat) => (
          <div key={stat.id}>
            <Link href={`/dashboard/analytics/${stat.id}`}>
              {stat.age} - from {stat.country} - gender: {stat.gender}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default AnalyticsPage;
