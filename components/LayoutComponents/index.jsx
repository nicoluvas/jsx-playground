import './styles.css'

export const LayoutComponents = (props) => {
    <div className="container">
        <div className="container-login">
            <div className="wrap-login">
                {props.children}
            </div>
        </div>
    </div>
}