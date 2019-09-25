import React from "react";
import { withFirebase } from "../../firebase/index";
import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions";
import Modal from "../Modal/modal";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const INITIAL_STATE = {
  email: "",
  password: ""
};

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  handleClose(e) {
    this.props.onChange(false);
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.props.setAuthorization({ isUserAuthorized: true });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Modal open={this.props.showModal} handleClose={this.handleClose}>
        <h2>Sign in</h2>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={this.onChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={this.onChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            color="primary"
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </Button>
          {error && <p>{error.message}</p>}
        </form>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthorization: payload => dispatch(setAuthorization(payload))
  };
}

SignInComponent.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withFirebase(SignInComponent));
