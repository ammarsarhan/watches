import gsap, { Power4 } from "gsap";
import { useNavigationContext } from "../context/useNavigationContext";
import { Link } from "react-router-dom";
import "../styles/components/navigation.css";

export function NavigationOverlay () {
    return (
        <div className="navigation-overlay">
            <div className="navigation-overlay-content">
                <ul>
                    <li><Link to="/">TIMEPIECES</Link></li>
                    <li><Link to="/">HIGH JEWELRY</Link></li>
                    <li><Link to="/">FINE JEWELRY</Link></li>
                    <li><Link to="/">LOCATIONS</Link></li>
                </ul>
                <div>
                    <Link to="/">PARTNERSHIPS</Link>
                    <Link to="/">NEWS</Link>
                    <Link to="/">WHISKY</Link>
                    <Link to="/">ABOUT</Link>
                    <Link to="/">CONTACT US</Link>
                </div>
            </div>
            <div className="navigation-overlay-background"></div>
        </div>
    )
}

export default function Navigation () {
    const context = useNavigationContext();

    const handleAnimateOverlay = () => {
        const timeline = gsap.timeline();
        
        timeline
        .to("div.navigation-overlay", {
            display: "block",
            duration: 0
        })
        .to("div.navigation-overlay-background", {
            transform: "translateY(0)",
            duration: 0.7,
            ease: Power4.easeInOut
        })
        .to("div.navigation-overlay-content", {
            display: "flex",
            duration: 0
        })
        .to("div.navigation-overlay-content a", {
            opacity: "100%",
            duration: 0.5,
            stagger: 0.1,
            ease: Power4.easeInOut
        })
    };

    const handleDeanimateOverlay = () => {        
        const timeline = gsap.timeline();
        
        timeline
        .to("div.navigation-overlay-content a", {
            opacity: "0%",
            duration: 0.5,
            stagger: -0.1,
            ease: Power4.easeInOut
        })
        .to("div.navigation-overlay-content", {
            display: "none",
            duration: 0
        })
        .to("div.navigation-overlay-background", {
            transform: "translateY(-100%)",
            duration: 0.7,
            ease: Power4.easeInOut
        })
        .to("div.navigation-overlay", {
            display: "none",
            duration: 0
        })
    };

    const handleNavigationClicked = () => {
        if (context.data.isOpen) {
            handleDeanimateOverlay();
            context.actions.close();
        } else {
            context.actions.open();
            handleAnimateOverlay();
        }
    }

    return (
        <nav>
            <h2>JACOB&CO</h2>
            <div className="navigation-utilites">
                <button className="outline">SIGN IN</button>
                <button className="reset navigation-action" onClick={handleNavigationClicked}>
                    <div className="navigation-action-line"></div>
                    <div className="navigation-action-line"></div>
                </button>
            </div>
        </nav>
    )
}