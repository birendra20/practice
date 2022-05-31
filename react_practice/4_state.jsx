//State of a component is an object that holds some information that may change over the lifetime of the component.
//We should always try to make our state as simple as possible and minimize the number of stateful components

//Let's create a user component with message state,

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Welcome to React world" };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
//https://codesandbox.io/s/state-using-class-641mte

//State is similar to props, but it is private and fully controlled by the component ,
//i.e., it is not accessible to any other component till the owner component decides to pass it.

//To initialize the state, simply set this.state in the constructor() method of the class.
//Our state is an object which in our case only has one key called spinLogo.
//Before we set the state, we have to call super() in the constructor.
//This is because this is uninitialized before super() has been called.

//In our render method, we are checking the value of spinLogo by this.state.spinLogo.
//It is initially true, so the logo will be displayed.

//Now, we have a button which has an event listener onClick.
//When we click the button it runs the function updateLogo() and we change the state.

//Changing the state

//To modify the state, simply call this.setState(), passing in the new state object as the argument.
// We’ll do this inside a method which we’ll call updateLogo.So, here we change the value of updateLogo to the opposite of it.
//Initially, it was true, so we make it false.

//One important concept in React is that whenever we call this.setState(), it re-renders the Component.
// So, this time when the ternary operator checks the value of this.state.spinLogo, it is false.
//So, it displays the link. Click the button again and it will show the logo.

//////////////////////////////////////////////////////////////////////////////////////////

//Why should we not update the state directly?
//==>If you try to update the state directly then it won't re-render the component.
//Wrong ==> this.state.message = 'Hello world

//Instead use setState() method.
//It schedules an update to a component's state object.
//When state changes, the component responds by re-rendering.

//Correct ==> this.setState({ message: 'Hello World' })
