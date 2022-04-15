import React from "react";
import "../css/grid2.css";
import "../css/featured_products.css";
import "../css/test.css";
import { Link } from "react-router-dom";
 
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
 

export const FeaturedProducts = ({route, onchange}) => {
  const {data, isLoading} = useFeaturedProducts();
  
  if(isLoading){
    return (<p>Cargando</p>);
  }

  return (
  <> 
    <div className="cat">
      <div>
        <h1><p className="center">Featured Products</p></h1>
        <hr className="line"/>
      </div>

      <div className="con">
        <div className="row">
        {data.results.map((value) => {
        return (
          <div className="col" key={value.id}>
            <h3 className="center">
                <Link to={`/products/${value.id}`}>
                  <p className="texto">{value.data.name}</p>
                </Link>
            </h3>
            <div className="img_div">
            <a target="" href={value.sprite} rel="noreferrer">
                <img className="img" src={value.data.mainimage.url} alt={value.data.name}  />
              </a>
            </div>        
            <p><b>$ {value.data.price} mx</b></p>
            <div className="center">
                <Link className="button" to={`/products/${value.id}`}>View Product Detail</Link>
            </div>
          </div>
          );
        })}
        </div>
      </div>
    </div>

    <div className="divbut center">
      <a className="big_button"
        href="/products"
        onClick={() => onchange('/products')}><h1><b>View all products</b></h1></a>
    </div>
  </>  
  );
};