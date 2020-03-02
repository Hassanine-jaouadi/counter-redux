import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/Actions";

class Counter extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }; */

  render() {
    return (
      <div>
        <button onClick={this.props.increment}> +</button>
        <span> {this.props.count} </span>
        <button onClick={this.props.decrement}> - </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

/* const mapDispatchtoProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
}; */

//export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
export default connect(mapStateToProps, { increment, decrement })(Counter);
