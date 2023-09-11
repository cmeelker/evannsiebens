import axios from "axios";

export const dynamic = "force-dynamic";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
}

const Home = async () => {
  const portfolioItems = await getPortFolioItems();

  return (
    <>
      <h1>Items:</h1>
      <ul>
        {portfolioItems.map((item: PortfolioItem) => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

async function getPortFolioItems() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio-items`
  );
  const portfolioItems: PortfolioItem[] = res.data.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.Title,
    description: item.attributes.Description,
  }));
  return portfolioItems;
}
