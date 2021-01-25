// import { connect } from 'react-redux';
const redux = require('redux');
const buatStore = redux.createStore;
const initialState = {
      value: 0,
      age: 17
}
// Reducer
const rootReducer = (state = initialState, action) => {
      if(action.type === 'ADD_AGE') {
            return {
                  ...state,
                  age: state.age + 1
            }
      }
      if(action.type === 'NEW_VALUE') {
            return {
                  ...state,
                  value: state.value + action.newValue
            }
      }
      return state;
}

// Store
const store = buatStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'NEW_VALUE', newValue: 10})
console.log(store.getState());

// Subsciption



