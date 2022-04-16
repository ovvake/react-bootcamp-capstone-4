import React,{useContext} from 'react';
import { CartContext } from '../components/context';

import "../components/css/cart.css";

function sumelem(array){
    console.log(array);
    let sum = 0
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i].data.price;
        }
        
    return sum
}
function eliminar(id){
    alert(id);
}
//const removerDeCarrito = (id)=> {
//    let index;
//    let newCarrito = [...carrito]
//    newCarrito.forEach((articulo, i) => {if (articulo.id == id){ index = i}});
//    newCarrito.splice(index, 1);
//    setCarrito(newCarrito);
//}

export const Cart = () => {
    const {carrito, addToCarrito} = useContext(CartContext);   
    let newCarrito = [...carrito]
    let sumTotal = sumelem(newCarrito);
 
    const items =  carrito.length;
    console.log(addToCarrito);
    //if(addToCarrito){
    //    return (<p>Cargando</p>);
    //}
  
  return (
    <>
    <div className='con'>
        <div className='row'>
            <div className='col derecha'><h3 className="">Shopping Cart</h3></div>
        </div>
        <div className='row-cart'>
        <div className='col-c'>
        {carrito.map((articulo)=>{
        return(
        <div className='row-c'>
            <div className='col_cart'>
            <table border="0">
                <tr>
                    <td rowspan="0">
                        <img className='img' src={articulo.data.mainimage.url} alt=""/>
                    </td>
                    <td>
                        <div>
                            <h5> {articulo.data.name}</h5>
                            <p> Precio: <b>${articulo.data.price}</b></p>
                        </div>
                    </td>
                    <td>
                        <input 
                            type="button" 
                            onClick={()=>eliminar(articulo.data.id)} 
                            value="Eliminar"/>
                    </td>
                </tr>
            </table>
            </div>
        </div>
        );
    })}
        </div>
        <div className='col-c1'>
            <p>Total Articulos: <b>{items}</b></p>
            <p>Total a pagar: $ <b>{sumTotal}</b></p>
        </div>
        </div>

        
        <div className='row'>
            <a className="boton" href="/checkout"><h1><b>Checkout</b></h1></a>
        </div>
    </div>
        
    </>
  )
};


 