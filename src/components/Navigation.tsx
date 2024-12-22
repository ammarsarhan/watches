import "../styles/navigation.css";

export default function Navigation () {
    return (
        <nav>
            <h2>JACOB&CO</h2>
            <div className="navigation-utilites">
                <button className="outline">SIGN IN</button>
                <button className="reset navigation-action">
                    <div className="navigation-action-line"></div>
                    <div className="navigation-action-line"></div>
                </button>
            </div>
        </nav>
    )
}