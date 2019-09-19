import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text, View, StyleSheet } from 'react-native';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  signupUser
} from './actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  onSignup() {
    const { email, password } = this.props;
    this.props.signupUser({ email, password });
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }
  renderSpinner() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return (
        <CardSection>
          <Button onPress={this.onLogin.bind(this)}>Login</Button>
          <Button onPress={this.onSignup.bind(this)}>Signup</Button>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>
        </Card>
        <View>{this.renderSpinner()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser, signupUser }
)(LoginForm);
