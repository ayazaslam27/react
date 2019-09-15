import React from "react";
import { connect } from "react-redux";
import {incrementCounter, decrementCounter} from '../redux/actions'

class Counter extends React.Component { 

  
  render() {
    return (
      <div>
          <h2>{this.props.match.params.passingProps}</h2>

          <button onClick={(event)=>this.handleDecrement(event)}>-</button>
          <span>{this.props.counter}</span>
          <button onClick={(event)=>this.handleIncrement(event)}>+</button>
      </div>
    );
  }

  handleIncrement(event) {
    event.preventDefault();
    this.props.increment({count: this.props.counter})
  }

  handleDecrement(event) {
    event.preventDefault();
    this.props.decrement({count: this.props.counter})
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: payload => dispatch(incrementCounter(payload)),
    decrement: payload => dispatch(decrementCounter(payload)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
