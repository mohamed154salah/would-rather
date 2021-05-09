import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
class Login extends Component{
    state={
        users:{},
        loginUser:null,
        redirect_to:false,
        user_Id:null,
    }

    handleUserLogin=(e,user)=>{
        e.preventDefault();
        this.props.loginUser(user)
        .then(()=>this.setState({user_Id:user.id}))
        .then(()=> this.setState({redirect_to:true}))
    }



    render(){

        const {users}=this.props
        const {redirect_to,user_Id}=this.state

        if(redirect_to===true){
            return(
                <Redirect to={'/home/'+user_Id}/>
            )
        }
        console.log(users.text)
        const userOptions = Object.keys(users).map(user_Id => ({
            key: user_Id,
            value: user_Id,
            text: users[user_Id].name,
            image: { avatar: true, src: users[user_Id].avatarURL }
          }))
        return(

            <div>

            <h1>WOULD RATHER LOGIN</h1>
          
<Dropdown options={userOptions} onChange={this.handleUserLogin} value={this.state.loginUser} placeholder="Select an option" />
                
            </div>

        )
    }

    


}
function mapStateToProps(state) {
    return{
        users:state.users,
    }
    
}

function mapDispatchToProps(dispatch) {
    return{
        loginUser:(user)=>dispatch(setAuthedUser(user))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)