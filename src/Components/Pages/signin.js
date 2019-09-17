import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/modal";

export class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.onChange(false);
  }

  render() {
    return (
      <Modal open={this.props.showModal} handleClose={this.handleClose}>
        <div>
          <h2>Sign in Form</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    );
  }
}

SignInComponent.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
