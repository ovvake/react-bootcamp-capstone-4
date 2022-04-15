import React, {useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams  } from "react-router-dom";
import { useProductId } from "../utils/hooks/useProduct_id";
import {CartContext} from '../components/context';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "../components/css/detail.css";
import "../components/css/img_style_sw.css";


// import Swiper core and required modules
import SwiperCore, { FreeMode,Navigation,Thumbs} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Navigation,Thumbs]);

export const ProductDetail = () => {
    
    let { id } = useParams();
    const {data, isLoading} = useProductId(id);
    //const [count, setCount] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {carrito, addToCarrito} = useContext(CartContext); 

    
    console.log(carrito);
    if(isLoading){
        return (<p>Cargando</p>);
    }
 
    return (
      <>
        <div className="con">
            <div className="row">
                {data.results.map((articulo) => {
                return(
                    <>
                    <h1 key={articulo.id}>{articulo.data.name}</h1>
                    </>
                   );
                })}
            </div>
            <div className="row">
                <div className="col">
                <>
                <Swiper 
                    style={
                        {'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}
                    } 
                    loop={true} 
                    spaceBetween={10} 
                    navigation={true} 
                    thumbs={{ swiper: thumbsSwiper }} 
                    className="mySwiper2">
            
            {data.results.map((value) => {
                return(
                <>
                    {value.data.images.map((i) =>{
                      return( 
                        <SwiperSlide> 
                            <img src={i.image.url} alt=""/> 
                        </SwiperSlide>
                        );
                    })
                    }
                </>
                   );
                })}    
 
    </Swiper>
    <Swiper 
        onSwiper={setThumbsSwiper} 
        loop={true} 
        spaceBetween={10} 
        slidesPerView={3} 
        freeMode={true} 
        watchSlidesProgress={true} 
        className="mySwiper">
        {data.results.map((value) => {
            return(
                <>
                {value.data.images.map((i) =>{
                  return( 
                    <SwiperSlide> 
                        <img src={i.image.url} alt=""/> 
                    </SwiperSlide>
                    );
                })
                }
            </>
            );
        })
        }
    </Swiper>
      </>
                </div>
                <div className="col">
                    {data.results.map((articulo) => {
                        return(
                            <>
                            <div className="w">SKU: {articulo.data.sku}</div>
                            <hr/>
                            {data.results.map((categoria) => {
                        return(
                            <div className="w">Categoria: {categoria.data.category.slug}</div>
                            );
                        })}
                            <div className="w">{articulo.data.short_description}</div>
                            <hr/>
                            <div className="w">Precio: $ {articulo.data.price} mx</div>
     
                            <div className="w">
                                <input type="button" className="bton"
                                onClick={()=>addToCarrito(articulo)} value="Agregar al carrito"/>
                            </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
      </>
    )
  };