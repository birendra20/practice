import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h1>Number of Cakes-{props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
};

//it  is preferably written in separate  file called selecter
//(our eg is small)
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
