import React from "react";
import {Link,withRouter} from "react-router-dom";

function Menu(){
    return (
        <div>
          <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signin">SignIn</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
    )
}

export default withRouter(Menu);
