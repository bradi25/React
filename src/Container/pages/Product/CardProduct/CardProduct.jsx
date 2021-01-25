import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
      render() {
            return (                
                  <div className="card">
                        <div className="img-thumb-prod">
                              <img src="https://www.w3schools.com/images/picture.jpg" alt="product_image"/>
                        </div>
                        <p className="product-title">Daging Rasa Ayam</p>
                        <p className="product-title">Rp 34.000</p>
                        <Counter />
                  </div>              
            )
      }
}

export default CardProduct;