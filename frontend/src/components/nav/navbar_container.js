import React from 'react';
import { logout } from '../../actions/session_actions';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

function Navbar({ logoutUser }) {

    return (
        <div>
            <h1>Imperial Flippers</h1>
            <button onClick={() => logoutUser()}>Sign Out</button>
        </div>
    )
}

// const mapStateToProps = (state, _ownProps) => ({

// });

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logout()),
});

export default withRouter(connect(null, mapDispatchToProps)(Navbar));

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.logoutUser = this.logoutUser.bind(this);
//     this.getLinks = this.getLinks.bind(this);
//   }

//   logoutUser(e) {
//       e.preventDefault();
//       this.props.logout();
//   }

//   // Selectively render links dependent on whether the user is logged in
//   getLinks() {
//       if (this.props.loggedIn) {
//         return (
//             <div>
//                 <Link to={'/tweets'}>All Tweets</Link>
//                 <Link to={'/profile'}>Profile</Link>
//                 <Link to={'/new_tweet'}>Write a Tweet</Link>
//                 <button onClick={this.logoutUser}>Logout</button>
//             </div>
//         );
//       } else {
//         return (
//             <div>
//                 <Link to={'/signup'}>Signup</Link>
//                 <Link to={'/login'}>Login</Link>
//             </div>
//         );
//       }
//   }

//   render() {
//       return (
//         <div>
//             <h1>Chirper</h1>
//             { this.getLinks() }
//         </div>
//       );
//   }
// }

// export default NavBar;