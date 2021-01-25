import React, { Component , Fragment} from "react";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import { GlobalConsumer } from "../../../context/context";
// import { connect } from 'react-redux';


class Product extends Component {      
      render() {
            return (
                  <Fragment>
                        <p>Product</p>
                        <hr/>
                        <div className="header">                  
                              <div className="logo">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/1532/1532495.svg" alt=""/>
                              </div>
                              <div className="troley">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/1333/1333059.svg" alt=""/>
                                    <div className="count">{this.props.state.totalOrder}</div>
                              </div>
                        </div>
                        <CardProduct />
                  </Fragment>            
            )
      }
}

// const mapStateToProps = state => {
//       return {
//             order : state.totalOrder
//       }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);