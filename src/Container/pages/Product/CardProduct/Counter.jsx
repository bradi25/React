import React from 'react';
import { GlobalConsumer } from '../../../../context/context';
// import { connect } from 'react-redux';
// import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends React.Component {
      render() {
            console.log(this);
            return(  
                  <div className="counter">
                              <button className="minus" onClick={() => this.props.dispatch({type : 'MINUS_ORDER'})}>-</button>
                              <input type="text" value={this.props.state.totalOrder} readOnly/>
                              <button className="plus" onClick={() => this.props.dispatch({type : 'PLUS_ORDER'})}>+</button>
                  </div>                 
            )
      }
}

// const mapStateToProps = (state) => {
//       return {      
//             order: state.totalOrder
//       }
// }

// const mapDispatchToProps = dispatch => {
//       return {
//             handleMinus : () => dispatch({type: ActionType.MINUS_ORDER}),
//             handlePlus : () => dispatch({type: ActionType.PLUS_ORDER})
//       }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);