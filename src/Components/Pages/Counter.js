import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { incrementCounter, decrementCounter } from "../../redux/actions";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.passingProps}</h2>
        <Button
          variant="outlined"
          color="secondary"
          onClick={event => this.handleDecrement(event)}
        >
          decrement
        </Button>
        <Typography>
          <span>{this.props.counter}</span>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={event => this.handleIncrement(event)}
        >
          increment
        </Button>
      </div>
    );
  }

  handleIncrement(event) {
    event.preventDefault();
    this.props.increment({ count: this.props.counter });
  }

  handleDecrement(event) {
    event.preventDefault();
    this.props.decrement({ count: this.props.counter });
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: payload => dispatch(incrementCounter(payload)),
    decrement: payload => dispatch(decrementCounter(payload))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
