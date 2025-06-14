import {createStore} from "redux";

const counterReducer = (state = {count: 0}, action) => {
  if (action.type === "increment") {
    return {...state, count: state.count + 1};
  }

  if (action.type === "decrement") {
    return {...state, count: state.count - 1};
  }

  return state;
};

const store = createStore(counterReducer);
