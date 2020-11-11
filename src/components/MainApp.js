import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from './Loading';
import Login from './Login';
import App from '../App';
import { loginUser } from '../redux/auth/sessionAction';
import LoginRequiredRoute from './LoginRequiredRoute';


class MainApp extends Component {
  componentDidMount() {
    // const that = this;
    // setTimeout(() => { that.props.loggedIn }, 300);
    console.log('mount',this.props.user)
  }

  render() {
    if (this.props.user) {
      <Redirect to='/products' />
    }

    return (
      <Switch>
        <Route path="/login/" component={Login} />
        <LoginRequiredRoute component={App} />
      </Switch>
    )
  }
}


export default withRouter(connect(
  state => ({
    loggedIn: state.session.loggedInStatus,
    user: state.session.user
  }), {
    loginUser,
  }
)(MainApp))