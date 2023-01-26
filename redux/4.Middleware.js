const redux = require("redux");
const reduxLogger = require("redux-logger");

/*
redux-logger is a middleware library for Redux that logs actions 
and the state changes that happen in the store to the console. 
It's useful for debugging and understanding how actions are dispatched and 
how the state changes in a Redux application.
*/
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

/*
applyMiddleware is a higher-order function provided by the redux library, 
that allows you to apply middleware to a store. 
Middleware are functions that can intercept and modify 
the actions dispatched to a store before they reach the reducer.


*/

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update store", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

/*
applyMiddleware is a higher-order function provided by the redux library, that allows you to apply middleware to a store. Middleware are functions that can intercept and modify the actions dispatched to a store before they reach the reducer.

It takes one or more middleware functions as arguments and returns a new store enhancer function that can be passed as the second argument to the createStore function.

When the store is created with this enhancer, the middleware functions will be invoked in the order they were passed in, with the store's dispatch method as the first argument.

In the example provided, it's used to apply the logger middleware to the store,
const store = createStore(rootReducer, applyMiddleware(logger));

It's important to note that middleware are run in the order they are passed to the applyMiddleware function, this is why it's not recommended to use multiple middleware that modify the same part of the actions or the state.
*/
