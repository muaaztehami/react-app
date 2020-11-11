import React, { Component } from 'react'
import Products from './components/Product';
import Filter from './components/Filter';
//import { Link, Redirect } from 'react-router-dom';
import Basket from './components/Basket';
import {Provider} from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { logoutUser } from './redux/actions/sessionAction';


class App extends Component {
  
  render() {
    if(this.props.loggedInStatus === false)
    {
      return <Redirect to='/' />
    }
    return (
      
      <Provider store={store}>
        <button onClick={() => { this.props.logoutUser(this.props.email, this.props.token) }}>Logout</button>

        <div className="container">
          <h1>Ecommerce Shopping Cart</h1>
          <hr/>
          <div className="row">
            <div className="col-md-8">
              <Filter />
              <hr/>
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />
            </div>
          </div>
        </div>
        
      </Provider>
    )
  }
}

///////////////////////////////////////////
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect, Route, Switch } from 'react-router-dom';
// import { logoutUser } from './redux/auth/sessionAction';

// const Nav = () => (
//   <ul>
//     <Link to="/friends/"><li>Friends</li></Link>
//     <Link to="/books/"><li>Books</li></Link>
//   </ul>
// )


// const Friends = () => <h1>Friends</h1>
// const Books = () => <h1>Books</h1>




// const App = (props) => {
//   console.log('status: ',props.loggedIn)
//   return (
//     <div>
//       <Nav />
//       <button onClick={() => { props.logoutUser() }}>Logout</button>
//       <Switch>
//         <Route exact path="/friends/" component={Friends} />
//         <Route exact path="/books/" component={Books} />
//         <Redirect exact from="/" to="/friends/" />
//       </Switch>
//     </div>
//   )
// }


export default connect(
  state => ({
    loggedIn: state.session.loggedInStatus,
    email: state.session.user.email,
    token: state.session.user.authentication_token
  }),
  {
    logoutUser
  }
)(App);