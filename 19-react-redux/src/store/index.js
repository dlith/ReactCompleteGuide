import {createStore} from "redux";

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === "increment") {
    return {...state, counter: state.counter + 1};
  }

  if (action.type === "increase") {
    return {...state, counter: state.counter + action.amount};
  }

  if (action.type === "decrement") {
    return {...state, counter: state.counter - 1};
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
