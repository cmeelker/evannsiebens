import axios, { AxiosError } from "axios";

interface PortfolioItem {
  title: string;
  description: string;
}

const Home = async () => {
  const res = await axios.get("http://127.0.0.1:1337/api/portfolio-items");
  console.log(res.data.data);
  // if (error) {
  //   return <div>An error occured: {error.message}</div>;
  // }
  return (
    <ul>
      {res.data.data.map((item: any) => (
        <li key={item.id}>
          <div>{item.attributes.Title}</div>
          <div>{item.attributes.Description}</div>
        </li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async (ctx: any) => {
  console.log();
  try {
    const res = await axios.get("http://localhost:1337/api/portfolio-items");
    console.log(res);
    const items = res.data as PortfolioItem[];
    console.log("🍕", items);
    return { items };
  } catch (error) {
    return { error };
  }
};

export default Home;
