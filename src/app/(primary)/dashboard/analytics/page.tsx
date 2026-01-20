import { getAllAnalytics, getStats } from "@app/services/analytics/data/analytics";
import { Metadata } from "next";
import { ItemLink, ItemList, ItemListDescription, ItemListTitle, Notes } from "./styles";

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
          statsApiGET.map((stat) => (
            <div key={stat.id}>
              <ItemList>
                <ItemListTitle>{stat.task}</ItemListTitle>
                <ItemListDescription>{stat.description}</ItemListDescription>
                <ItemLink href={`/dashboard/analytics/${stat.id}`}>View</ItemLink>
              </ItemList>
            </div>
          ))}
      </nav>
    </>
  );
};

export default AnalyticsPage;
