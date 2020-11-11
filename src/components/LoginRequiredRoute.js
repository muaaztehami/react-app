import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Redirect, Route } from 'react-router-dom';

// export default function LoginRequiredRoute(Component) {
//   class AuthenticatedComponent extends React.Component {
//     componentWillMount() {
//       this.checkAuth(this.props.loggedInStatus)
//     }

//     componentWillReceiveProps(nextProps) {
//       this.checkAuth(nextProps.loggedInStatus)
//     }
//     checkAuth(isAuthenticated) {
//       if (!isAuthenticated) {
//         this.props.history.push(`/login`)
//       }
//     }
//     render() {
//       return (
//         <div>
//           {this.props.loggedInStatus === true ? (
//             <Component {...this.props} />
//           ) : null}
//         </div>
//       )
//     }
//   }
  

//   const mapStateToProps = (state) => ({
//     loggedIn: state.session.loggedInStatus
//   })

//   return withRouter(connect(mapStateToProps)(AuthenticatedComponent))
// }
const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  
  <Route {...rest} render={props => (
    
    rest.loggedIn ? (
      
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login/',
        state: { from: props.location }
      }} />
    )
  )} />
)

// export default connect(
//   state => ({
//     loggedIn: state.session.loggedInStatus,
//   })
// )(LoginRequiredRoute);
const mapStateToProps = state => {
  console.log('state: ', state.session.loggedInStatus)
  return {
    loggedIn: state.session.loggedInStatus
    }
}

export default  withRouter(connect(mapStateToProps)(LoginRequiredRoute))
