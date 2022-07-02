import "../style/Header.css";

function Header() {
    return (
        <div className={"header"}>
            <div>
                <img src={require("../assets/images/chicken.png")} className={"logo"}/>
            </div>
            <div className={"header-menu"}>
                <ul>
                    <li>Login</li>
                    <li>Join</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;