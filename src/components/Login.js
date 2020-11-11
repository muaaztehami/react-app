//import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { loginUser } from '../redux/actions/sessionAction';


//const Login = (props) => {
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
      //loggedInStatus: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
    //console.log('onchange: ', this.state)
  }
  handleSubmit(event){
    event.preventDefault();
    //console.log('submit: ', this.state.password)
    this.props.loginUser(this.state.email, this.state.password)
    // .then(
    //   () => {
    //     this.props.history.push("/dashboard");
    //   }
    // )
  }
  render() {
    console.log('login: ',this.props.loggedInStatus)
    if (this.props.loggedInStatus) {
      //const { from } = props.location.state || { from: { pathname: '/' } }
      return <Redirect to='/products' />
    }
    return (
      <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <h1>Login Page</h1>
            
            <form onSubmit={this.handleSubmit}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                required
              />
              <br/>
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
              />
              <br/>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        
    
    )
  }
}
//button onClick={() => { props.loginUser('supervisore@gmail.com', '123456') }}>Login</button>

export default connect(
  state => ({
    loggedInStatus: state.session.loggedInStatus
  }),
  {
    loginUser,
  }
)(Login);