import React from 'react'
import "./diningOut.css";
import Collection from '../collection';
import ExploreSection from '../exploreSection';
import {diningOut} from "../../../data/diningOut"
import Filters from '../filters';

const collectionList = [
  {
    id:"1",
    title:"Trending this week",
    cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places:"10 places"
  },
  {
    id:"2",
    title:"21 Best Insta Places",
    cover:"https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places:"21 places"
  },
  {
    id:"3",
    title:"21 Romantic Dining",
    cover:"https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    places:"20 places"
  },
  {
    id:"4",
    title:"24 Great Cafes",
    cover:"https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
    places:"25 places"
  },
  {
    id:"5",
    title:"10 Celeb Loved Places",
    cover:"https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
    places:"10 places"
  },
  {
    id:"6",
    title:"26 Scenery Rooftop",
    cover:"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places:"27 places"
  },
  {
    id:"7",
    title:"18 Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places:"20 places"
  },
]

const diningFilters=[
  {
      id:1,
      title: "Pizza",
      cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
      id:2,
      title: "Burger",
      cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
      id:3,
      title: "Biryani",
      cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
      id:4,
      title: "Paratha",
      cover: "	https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
      id:5,
      title: "Paneer",
      cover: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
      id:6,
      title: "Chicken",
      cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
      id:7,
      title: "Thali",
      cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
      id:8,
      title: "Wraps",
      cover: "https://b.zmtcdn.com/data/dish_photos/e24/1b0a01fed2d16f99d98037160591ce24.jpg",
  },
  {
      id:9,
      title: "Cake",
      cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
      id:10,
      title: "Noodles",
      cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
  },
  {
      id:11,
      title: "Momos",
      cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
]

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterList={diningFilters}></Filters>
      </div>
      <ExploreSection list={diningList} collectionName={"Dine-Out Restaurants in Bangalore"}/>
    </div>
  )
}

export default DiningOut