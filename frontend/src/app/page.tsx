import axios from "axios";
import Image from "next/image";
export const dynamic = "force-dynamic";

interface StrapiImage {
  url: string;
  alternativeText: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
}

const Home = async () => {
  const portfolioItems = await getPortFolioItems();

  return (
    <>
      <h1 className="text-4xl font-bold">Items:</h1>
      <ul>
        {portfolioItems.map((item: PortfolioItem) => (
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div className="w-[400px] h-[400px] relative">
              <Image
                className="object-cover"
                src={item.image.url}
                alt={item.image.alternativeText}
                fill={true}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

async function getPortFolioItems() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/portfolio-items?populate=*`
  );

  const portfolioItems: PortfolioItem[] = res.data.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.Title,
    description: item.attributes.Description,
    image: {
      url: `${process.env.NEXT_PUBLIC_API_URL}${item.attributes.Image.data.attributes.url}`,
      alternativeText: item.attributes.Image.data.attributes.alternativeText,
    },
  }));
  return portfolioItems;
}
