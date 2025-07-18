import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authenticationReducer from "./auth";

const store = configureStore({
  reducer: {counter: counterReducer, auth: authenticationReducer},
});


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {...state, counter: state.counter + 1, showCounter: state.showCounter};
//   }

//   if (action.type === "increase") {
//     return {...state, counter: state.counter + action.amount, showCounter: state.showCounter};
//   }

//   if (action.type === "decrement") {
//     return {...state, counter: state.counter - 1, showCounter: state.showCounter};
//   }

//   if (action.type === "toggle") {
//     return {...state, counter: state.counter, showCounter: !state.showCounter};
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
