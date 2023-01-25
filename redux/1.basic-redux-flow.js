const redux = require("redux");

//This method is used to create a store for the application.
const createStore = redux.createStore;
//..........................................................................

//1st define constant ,that indicate type of action
const BUY_CAKE = "BUY_CAKE";

//2nd we define our action and create action creator {function}
//action creator. This function is responsible for creating
//an action object that contains information about the action that needs to be taken,
// in this case, buying a cake.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//The type property is set to the constant BUY_CAKE that indicates the type of the action,
//................................................................................
//3rd reducer function

// a reducer is a function that is given the current state and an action as parameters.
// It returns a new state.
//initial state

//......
// This object represents the starting state of the application
//  before any actions are dispatched to the store.
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //makes copies of the state
        numOfCakes: state.numOfCakes - 1, //only update numOfCakes
      };
    default:
      return state;
  }
};
//The reducer function is defined as a pure function that takes in two arguments,
//the current state and an action. The current state is set to the initialState by default.
// The function uses a switch statement to determine which branch of the code to execute based on the type property of the action.
//When the action is of type BUY_CAKE, the function returns a new object
//that is created by spreading the properties of the current state into a new object
// and then updating the numOfCakes property by subtracting 1 from it.

//If the action type does not match any of the cases,
//the function simply returns the current state.
//In this way, the reducer serves as a way to handle different types of actions and update the state accordingly.

//The returned state then becomes the next state of the application and is available for the components to access via the store.

//The first parameter is the state in the store.
//The reducer returns a new state based on the action type.

//.........................................
//4th redux store(one store for entire application)
const store = createStore(reducer);
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update store", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

//The createStore(reducer) function creates the store for the entire application.

//The store is responsible for holding the state of the application and providing methods
//for dispatching actions and subscribing to state changes.

//The store.getState() method is used to retrieve the current state of the store,

// The store.subscribe(() => console.log("update store", store.getState())) :
//method creates a callback function that is called whenever an action is dispatched to the store.
//In this case, it logs the updated state to the console.
//The returned value of the subscribe method is stored in the variable unsubscribe
//which is a function that can be called to unsubscribe the function and stop calling it when an action is dispatched.

// The store.dispatch(buyCake()) method is used to dispatch the action object returned by the buyCake() function to the store,
//triggering the execution of the reducer function and updating the state of the application. Each time this method is called, the state is updated and the subscribed callback function is called.

// Finally, unsubscribe() method is called to stop the callback function from being called when an action is dispatched.
