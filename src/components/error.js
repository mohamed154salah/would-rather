import React from "react"
const Error = ({ history }) => (
    <div>
        
      <h2>404</h2>
        <p>Page Not Found</p>
        <button onClick={() => history.push("/")}>
          Go Home
        </button>
        </div>

    
  );
 
export default Error;