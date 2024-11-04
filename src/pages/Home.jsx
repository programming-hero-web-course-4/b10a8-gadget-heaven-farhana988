import { Outlet, useLoaderData,} from "react-router-dom"
import Banner from "../components/Banner"
import Categories from "../components/Categories"
import { Helmet } from "react-helmet"
// import AllCards from "../components/AllCards"





function Home() {
const categories = useLoaderData()
// console.log(typeof(categories))
  return (
    <div>
        <Helmet>
        <title>Home - Gadget Heaven</title>
        <meta name="description" content="Discover the latest gadgets and accessories." />
      </Helmet>
        <Banner></Banner>
        <div className="h-96"></div>
        <div className="flex container mx-auto justify-between flex-col lg:flex-row">
        <Categories categories={categories}></Categories> 
       
        <Outlet></Outlet>
        </div>
     
      </div>
  )
}

export default Home