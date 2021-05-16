import React,{Component} from "react"
import { connect } from "react-redux";

class Error extends Component {
  
  render(){
    return(
      <div>

      <h2>404</h2>
        <p>Page Not Found</p>
        <button onClick={() => this.props.history.push("/")}>
          Go Home
        </button>
        </div>
    )
  }
  
}
    
  
  
export default connect() (Error);