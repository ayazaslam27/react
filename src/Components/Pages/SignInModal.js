import React from "react";
import { withFirebase } from "../../firebase/index";
import { connect } from "react-redux";
import { setAuthorization } from "../../redux/actions";
import Modal from "../Modal/modal";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withTranslation } from "react-i18next";

const INITIAL_STATE = {
  email: "",
  password: ""
};

class SignInModal extends React.Component {
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
        this.props.onSetAuthorization(authUser);
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

    const { t } = this.props;
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
            label={t("sign-in.email")}
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
            label={t("sign-in.password")}
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
    onSetAuthorization: authUser => dispatch(setAuthorization(authUser))
  };
}

SignInModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withFirebase(withTranslation()(SignInModal)));
