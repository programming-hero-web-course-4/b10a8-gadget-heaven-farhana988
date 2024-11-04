import { Outlet, useLoaderData,} from "react-router-dom"
import Banner from "../components/Banner"
import Categories from "../components/Categories"
// import AllCards from "../components/AllCards"





function Home() {
const categories = useLoaderData()
// console.log(typeof(categories))
  return (
    <div>
        
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