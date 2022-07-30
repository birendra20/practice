const redux = require("redux");
const createStore = redux.createStore;

//1st define constant ,that indicate type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//2nd we define our action and create action creater {function}
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
//3rd reducer function

//initial state

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //makes copies of the state
        numOfCakes: state.numOfCakes - 1, //only update numOfCakes
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//4th redux store(one store for entire application)
const store = createStore(reducer);
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
