import React, { Component } from "react";
import { connect } from "react-redux";
import { Link,Route} from 'react-router-dom'
// import { setUnauthedUser } from "../actions/authedUser";
import Login from './Login'
import "../index.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.handelLogout = this.handelLogout.bind(this);
  }
  state = {
    to_Login: false
  };
  handelLogout=(e)=>{
    this.props.setUnAuthedUser()
    this.setState({to_Login:true})
    
  }
  render() {
    const {user,authedUser}=this.props
    const { to_Login } = this.state;

    if (to_Login === true) {
      console.log('tologin')
      return  <Route path="/lo" component={Login} />;
    }
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/"  >
              Home
            </Link>
          </li>
          <li>
            <Link to="/NewQuestion" >
              New Question
            </Link>
          </li>
          <li>
            <Link to="/Leaderboard" >
              Leaderboard
            </Link>
          </li>
           {/* <li> Welcome Back ({user.name})</li>
           <li>
           <img src={user.avatarURL} alt="logo"/>
           </li>       */}
           <li><button onClick={this.handelLogout} className='btn'>LOG OUT</button></li>
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  const {users,authedUser}=state
const user=users[authedUser] 
  return {
    user,
    authedUser
  };
}

/* function mapDispatchToProps(dispatch) {
  return {
    setUnAuthedUser: () => dispatch(setUnauthedUser()),
  };
} */
export default connect(mapStateToProps)(Nav);



{/* <div className='nav-desktop'>
                <Menu stackable pointing secondary>
                    <Menu.Item as={NavLink} name='home' exact to='/' color='teal' >
                        Home
                    </Menu.Item>
                    <Menu.Item as={NavLink} name='newQuestion' exact to='/add' color='teal'>
                        New Question
                    </Menu.Item>
                    <Menu.Item as={NavLink} name='leaderBoard' exact to='/leaderboard' color='teal'>
                        Leader Board
                    </Menu.Item>
                    {authedUser ?
                    <Menu.Menu position='right'>
                        <Menu.Item name='username' >
                            Hello, {user.name}
                        </Menu.Item>
                        <Image style={{marginTop:'0.35em'}} avatar src={user!== 'undefined' ? user.avatarURL : logo}/>
                        <Menu.Item as={NavLink} name='logOut' exact to='/login' color='teal' onClick={this.handleLogout}>
                            Log Out
                        </Menu.Item>
                   </Menu.Menu>: <div></div>}
                </Menu>
            </div> */}