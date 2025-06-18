import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authenticationSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

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
