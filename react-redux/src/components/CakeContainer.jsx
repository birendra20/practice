import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of Cakes-{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//it  is preferably written in separate  file called selecter
//(our eg is small)

/*
this function gets the redux state as a parameter and return an object
the state from the redux store is mapped to our component props,
so apart from whatever the container was receiving it will now receive an additional
prop called "numOfCakes" which reflects the number of cakes in redux store
*/
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

/*
this function gets redux dispatch method as a parameter and return an object.
similarly map dispatched props will basically map our dispatch of an action creator
to a prop in our component,now our component receives  a second additional
prop called buyCake,
which will basically dispatch  the buyCake action.

*/
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
console.log("test");
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

/*

mapStateToProps is a function that is used in the React-Redux library. 
It is used to map the state of the Redux store to the props of a component. 
In this example, the function takes in the entire state as an argument and returns an object with a single key-value pair, 
where the key is numOfCakes and the value is the numOfCakes property of the cake property of the state. 
This returned object will be passed as props to the component that this function is connected to.
*/

/*
mapDispatchToProps is another function that is used in the React-Redux library.
 It is used to map the dispatch function to the props of a component. 
 In this example, the function takes in the dispatch function as an argument and returns an object with a single key-value pair, 
 where the key is buyCake and the value is a function that dispatches the buyCake() action when called. 
 This returned object will be passed as props to the component that this function is connected to.

*/

/*
The last line is using the connect method from the 'react-redux' library 
to connect the CakeContainer component to the Redux store. 
The connect method takes in two arguments: mapStateToProps and mapDispatchToProps. 
These functions are used to map the state and dispatch functions to the props of the component respectively.
The component that is being exported is the connected component with the state and dispatch functions as props.

*/

/*
SUMMARY
mapStateToProps:
when you want to access redux state in your component, you define mapStateToProps function
it gets redux state as a parameter which can be  used to retrieve the appropriate state properties
in our case , we mapped state.cake.numOfCakes to a prop called a numOfCakes,
which will then render in the jsx.

 Similarly for dispatching actions we  have mapDispatchToProps function,
 this function gets the dispatch method as a parameter and allows us to map 
 action creators to props in  our component.

 in our case, we mapped  dispatching by cake to a prop called byCake
 this allows us to call by cake as prop.buyCake

and all this was possible because of the connect function  from  a react-redux


*/
  