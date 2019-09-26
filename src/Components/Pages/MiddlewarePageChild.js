import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { incrementCounter, decrementCounter } from "../../redux/actions";
import { withTranslation } from "react-i18next";

class MiddlewarePageChild extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <h4>{t("Middleware.child-route")}</h4>
        <h4>
          Passed property from route:{this.props.match.params.passingProps}
        </h4>
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
)(withTranslation()(MiddlewarePageChild));
