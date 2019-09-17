import React from "react";
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
          <h2>Text in a modal</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    );
  }
}
