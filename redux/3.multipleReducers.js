const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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
//combining multiple reducers as store accepts only one reducers as parameter
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
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

//........................................

// This code is an example of how to use the Redux library to manage the state of a React application.

// The code starts by importing the createStore and combineReducers functions from the redux library. createStore function is used to create a new Redux store, which holds the state of the application. The combineReducers function is used to combine multiple reducer functions into a single root reducer, which will be passed to the createStore function.

// The code then defines two constants, BUY_CAKE and BUY_ICECREAM, which will be used as action types.

// It also defines two action creators, buyCake and buyIceCream, which return an action object with the appropriate type.

// Two reducer functions are defined, cakeReducer and iceCreamReducer, each of which takes in the current state and an action as arguments.
// Each reducer function handles the action based on its type, and returns a new state that reflects the change.

// Then, the combineReducers function is used to combine the cakeReducer and iceCreamReducer functions into a single root reducer. The createStore function is then used to create a new store, passing in the root reducer as an argument.

// Finally, the code uses the store.subscribe method to add a listener that will be called whenever the state in the store is updated, this way the state is logged to the console.

// It also dispatches some actions, which will cause the store to update its state, and the state will be logged to the console. The unsubscribe function is also called to stop listening to the state updates.

//...........
/*
In Redux, the dispatch function is used to trigger a state change in the store by sending an action to the store's reducer.

An action is an object that describes the change that should be made to the state. It must have a type property that describes the type of change that is being made, and it can also have additional properties that provide more information about the change.

In the above example, the store.dispatch(buyCake()) method is called, it dispatches an action object with type BUY_CAKE to the store's root reducer. The root reducer then passes this action object to the appropriate sub-reducer based on the action's type. The sub-reducer, cakeReducer in this case, will then handle this action by updating the state.

When an action is dispatched, the store's state is updated, and any component that is connected to the store will re-render with the new state.

dispatch is the way to inform the store about the desired state changes, it sends an action to the store and the store uses the action's type property to determine which reducer function should handle the action.

*/

/*
combineReducers is a utility function from the redux library that is used to combine multiple reducer functions into a single root reducer.

In a large application, you may have multiple reducer functions that manage different parts of the state. The combineReducers function allows you to organize your reducers by domain, and it will take care of combining them into a single root reducer, which is the only reducer that needs to be passed to the createStore function.

The combineReducers function takes in an object that maps the keys to the corresponding reducer functions. The keys will be the names of the state slices, and the corresponding reducers will handle the actions related to the corresponding state slices.

In the example provided,
const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer, });

cakeReducer and iceCreamReducer are combined into a single root reducer, rootReducer. This root reducer will handle actions related to both state slices, cake and iceCream.

When an action is dispatched to the store, the store will pass the action and the current state to the root reducer. The root reducer will then pass the action and the corresponding state slice to the appropriate sub-reducer, which will handle the action and update the state accordingly.

*/
