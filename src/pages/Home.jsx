import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet";

function Home() {
  const categories = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
        <meta
          name="description"
          content="Discover the latest gadgets and accessories."
        />
      </Helmet>
      <Banner></Banner>

      <h2 className="text-center font-bold text-5xl mb-16 mt-80 text-[#0B0B0B]">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex container mx-auto justify-between flex-col lg:flex-row">
        <Categories categories={categories}></Categories>

        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
