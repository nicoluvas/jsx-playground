import logoIMG from './assets/title.svg'

function App() {
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">   

                    <span className="login-form-title">Welcome</span>
                    
                    <span className="form-img">
                        <img src={logoIMG} alt="nicoluvas"/>
                    </span>

                    <div className="wrap-input">
                        <input type="email"/>
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input type="password"/>
                        <span className="focus-input" data-placeholder="Password"></span>
                    </div>

                    <div className="container-container-logi-form-btn">
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