import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { signupUser } from '../redux/actions/sessionAction';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.signupUser(this.state.email, this.state.password)
  }
  
  render() {
    if (this.props.loggedInStatus) {
      //const { from } = props.location.state || { from: { pathname: '/' } }
      return <Redirect to='/products' />
    }
    return (
      <div>
        <Link to='/login' >Login</Link>
      
        <div className='row'>
          <div className='col-md-4 col-md-offset-4'>
            <form onSubmit={this.handleSubmit}>
              <h1>Sign Up</h1>
              <div className='form-group'>
                <label clssName='control-label'>Email</label>
                <input 
                type='email'
                name='email'
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleChange} 
                required
                className='form-control'
                />
              </div>
              <div className='form-group'>
                <label clssName='control-label'>Password</label>
                <input 
                type='password'
                name='password'
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
                className='form-control'
                />
              </div>
              <div className='form-group'>
                <label clssName='control-label'>Password Confirmation</label>
                <input 
                type='password'
                name='password_confirmation'
                placeholder="Password" 
                value={this.state.password_confirmation} 
                onChange={this.handleChange} 
                required
                className='form-control'
                />
              </div>
              <div className='form-group'>
                <button className='btn btn-primary btn-lg' type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

export default connect(
  state => ({
    loggedInStatus: state.session.loggedInStatus
  }),
  {
    signupUser,
  }
)(Signup);