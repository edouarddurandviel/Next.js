import { getAllAnalytics, getStats } from "@app/services/analytics/data/analytics";
import { Metadata } from "next";
import { Notes } from "./styles";
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
        <div>My personal list</div>
        <div>Page buy default first rendering on the server side.</div>
        <div>View detail is fetched through restAPI</div>
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
