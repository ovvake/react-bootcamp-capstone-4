import React from 'react';
//import "../components/css/cart.css";
//import "../components/css/checkout.css";

export const Checkout = () => {
 
  return (
    <>
    <div className='con'>
        <div className="row">
      <div className="col-75">
        <div className="container">
          <form action=" ">
          
            <div className="row">
              <div className="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i className="fa fa-user">x</i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                <label for="email"><i className="fa fa-envelope">x</i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com"/>
                <label for="adr"><i className="fa fa-address-card-o">x</i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                <label for="city"><i className="fa fa-institution">x</i> City</label>
                <input type="text" id="city" name="city" placeholder="New York"/>

                <div className="row">
                  <div className="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY"/>
                  </div>
                  <div className="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001"/>
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
  
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                <div className="row">
                  <div className="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                  </div>
                  <div className="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                  </div>
                </div>
              </div>
              
            </div>
 
            <input type="submit" value="Continue to checkout" className="btn"/>
          </form>
        </div>
      </div>
      <div className="col-25">
        <div className="container">
          <h4>Cart 
            <span className="price"  >
              <i className="fa fa-shopping-cart">x</i> <b>4</b>
            </span>
          </h4>
          <p><a href="#x">Product 1</a> <span className="price">$15</span></p>
          <p><a href="#x">Product 2</a> <span className="price">$5</span></p>
          <p><a href="#x">Product 3</a> <span className="price">$8</span></p>
          <p><a href="#x">Product 4</a> <span className="price">$2</span></p>
          <hr/>
          <p>Total <span className="price" ><b>$30</b></span></p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
};
