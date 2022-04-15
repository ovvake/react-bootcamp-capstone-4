import React from "react";
import { SlideShow } from "../components/home/SlideShow";
import { Categories } from "../components/home/categories";
import { FeaturedProducts } from "../components/home/featured_products";


export const Home = ({route,onchange}) => {
    return (
       <div >
        <SlideShow />
        <Categories />
        <FeaturedProducts />
      </div>
    );
  };