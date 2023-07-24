import React from 'react';
import './topBrands.css';
import Slider from 'react-slick';
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';

const brandList = [
    {
        id:1,
        time: "20min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
    },
    {
        id:2,
        time: "25min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
    },
    {
        id:3,
        time: "24min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
    },
    {
        id:4,
        time: "19min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"
    },
    {
        id:5,
        time: "18min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
    },
    {
        id:6,
        time: "37min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
    },
    {
        id:7,
        time: "26min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"
    },
    {
        id:8,
        time: "23min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp"
    },
]

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
} 

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
        <div className="collection-title">Top Brands for you</div>
        <Slider {...settings}>
            {brandList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className='top-brands-image' alt={brand.time}/>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands