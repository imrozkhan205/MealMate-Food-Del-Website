import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import FoodListWithPriceFilter from '../../components/filter/FilterItems'
import Video from '../../components/Video/Video'

const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <h2>Filter according to your💵</h2>
      <FoodListWithPriceFilter/>
      <AppDownload/>
      
      <Video/>
    </div>
  )
}

export default Home