import React, { Component, Fragment } from "react";
import { GlobalConsumer } from "../../../context/context";
import "./LifeCycleComp.css";
// import { connect } from 'react-redux';


class LifeCycleComp extends Component {
      constructor(props) {
            super(props)
            this.state  = {
                  count : 1
            }
      }

      static getDerivedStateFromProps(props, state) {
            console.log('getderivedstatefromprops');
            return null;
      }

      componentDidMount() {
            console.log('componentdidmount');
            setTimeout(() => {
                  this.setState({
                        count: 2
                  })                  
            }, 5000);
      }

      shouldComponentUpdate() {
            console.log('shouldcomponentupdate');
            return true;
      }

      getSnapshotBeforeUpdate() {
            console.log('componentbeforeupdate');
            return null;
      }

      componentDidUpdate() {
            console.log('componentdidupdate');
      }

      lifeCycleUpdate = () => {
            this.setState({
                  count: this.state.count + 1
            })
      }

      render() {          
            return(
                  <Fragment>
                        <p>LifeCycleComp</p>
                        <hr/>
                        <button className="btn" onClick={this.lifeCycleUpdate}>Component Button {this.state.count}</button>
                        <hr />
                        <p>Total Order : {this.props.state.totalOrder}</p>
                  </Fragment>            
            )
      }
}

// const mapStateToProps = state => {
//       return {
//             order : state.totalOrder
//       }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);