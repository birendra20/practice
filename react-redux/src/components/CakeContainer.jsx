import React from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeAction";

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
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
