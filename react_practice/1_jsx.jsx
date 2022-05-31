//JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML).
//Basically it just provides syntactic sugar for the React.createElement() function,
//giving us expressiveness of JavaScript along with HTML like template syntax

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{"Welcome to React world!"}</h1>
      </div>
    );
  }
}
