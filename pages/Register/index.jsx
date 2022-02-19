import { useState } from "react";
import { Link } from "react-router-dom";
import {LayoutComponents} from '../../components/LayoutComponents'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confpw, setConfpw] = useState("");

    return(
        <LayoutComponents>
        <form className="login-form">
          <span className="login-form-title"> Create an account </span>
  
          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
  
          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />           
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
          <div className="wrap-input">
            <input
              className={confpw !== "" ? "has-val input" : "input"}
              type="password"
              value={confpw}
              onChange={(e) => setConfpw(e.target.value)}
            />           
            <span className="focus-input" data-placeholder="Confirm your password"></span>
          </div>
  
          <div className="container-login-form-btn">
            <button className="login-form-btn">Confirm</button>
          </div>
  
          <div className="text-align">
            <span className="text1">Don't you have an account?</span>
            <Link className="text2" to="/register">
              Create one!
            </Link>
          </div>
        </form>
      </LayoutComponents>
    )
}