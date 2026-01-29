import { getAllAnalytics, getStats } from "@app/services/analytics/data/analytics";
import { Metadata } from "next";
import { Notes } from "@app/styles/template";
import ItemList from "@app/components/ItemList";

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  // SEO purpose
  const stats = await getStats();
  return {
    title: stats[0].name,
    description: stats[0].name,
  };
}

const AnalyticsPage = async () => {
  // Server query
  const statsApiGET = await getAllAnalytics();

  return (
    <>
      <Notes>
        <div>Server side rendering</div>
        <div>The detail page is fetched with SWR through restAPI app/api/analytics</div>
      </Notes>
      <nav>
        {statsApiGET &&
          statsApiGET.length &&
          statsApiGET.map((stat) => <ItemList key={stat.id} stat={stat} />)}
      </nav>
    </>
  );
};

export default AnalyticsPage;
