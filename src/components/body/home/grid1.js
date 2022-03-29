import React from "react";
import "../../css/grid1.css";
import { Link } from "react-router-dom";

import { useFeaturedCategories } from "../../../utils/hooks/useFeaturedCategory";

export const Grid1 = () => {
  const {data, isLoading} = useFeaturedCategories();

  if(isLoading){
    return (<p>Cargando</p>);
  }

  return (
<>
    <div className="grid1_content">
        {data.results.map((value) => {
        return (
          <div className="responsive">
            <div className="gallery">
              <a target="" href={value.data.name} rel="noreferrer">
                <img src={value.data.main_image.url} 
                 alt={value.data.name} width="600" height="400"/>
              </a>
              <div className="desc" key={value.id}>    
                <Link to={`/products?category=${value.slugs[0]}`}>{value.data.name}</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </>    
  );
};