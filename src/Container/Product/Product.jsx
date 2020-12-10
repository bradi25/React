import React, { Component , Fragment} from "react";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://www.flaticon.com/svg/static/icons/svg/1532/1532495.svg" alt=""/>
          </div>
          <div className="troley">
              <img src="https://www.flaticon.com/svg/static/icons/svg/1333/1333059.svg" alt=""/>
              <div className="count">3</div>
          </div>
        </div>
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://www.w3schools.com/images/picture.jpg" alt="product_image"/>
          </div>
          <p className="product-title">Daging Rasa Ayam</p>
          <p className="product-title">Rp 34.000</p>
          <div className="counter">
              <button className="minus">-</button>
              <input type="text" defaultValue={3}/>
              <button className="plus">+</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Product;