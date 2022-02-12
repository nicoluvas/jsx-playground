import logoIMG from './assets/Banner.png'
import './App.css'
import { useState } from 'react'

function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">   

                    <span className="login-form-title">Welcome</span>
                    
                    <span className="login-form-title">
                        <img src={logoIMG} alt="nicoluvas"/>
                    </span>

                    <div className="wrap-input">
                        <input className={email !== "" ? 'has-val input' : 'input'} 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input className={password !== "" ? 'has-val input' : 'input'} 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                        <span className="focus-input" data-placeholder="Password"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Confirm</button>
                    </div>

                    <div className="text-align">
                        <span className="text1">Don't you have an account?</span>
                        <a className="text2" href="#">Create one!</a>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;