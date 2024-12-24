import gsap, { Power4 } from "gsap";
import { MouseEvent } from "react";
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

    const handleAnimateOverlay = (triggerElement: HTMLButtonElement) => {
        const timeline = gsap.timeline();
        
        timeline
        .to("nav", {
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut
        })
        .to("div.navigation-overlay", {
            display: "block",
            duration: 0
        })
        .to("div.navigation-overlay-background", {
            transform: "translateY(0)",
            duration: 0.7,
            ease: Power4.easeInOut
        })
        .to("nav", {
            opacity: 1,
            duration: 0.5,
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
        .to("nav", {
            position: "absolute",
            duration: 0,
            onComplete: () => triggerElement.removeAttribute("disabled")
        })
    };

    const handleDeanimateOverlay = (triggerElement: HTMLButtonElement) => {        
        const timeline = gsap.timeline();
        
        timeline
        .to("nav", {
            opacity: 0,
            duration: 1,
            ease: Power4.easeInOut
        })
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
        .to("nav", {
            position: "static",
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
        .to("nav", {
            opacity: 1,
            duration: 1,
            ease: Power4.easeInOut,
            onComplete: () => triggerElement.removeAttribute("disabled")
        })
    };

    const handleNavigationClicked = (e: MouseEvent<HTMLButtonElement>) => {   
        const trigger = e.currentTarget;
        trigger.setAttribute("disabled", "true");
        
        if (context.data.isOpen) {
            handleDeanimateOverlay(trigger);
            context.actions.close();
        } else {
            context.actions.open();
            handleAnimateOverlay(trigger);
        }
    }

    return (
        <nav>
            <h2><Link to="/">JACOB&CO</Link></h2>
            <div className="navigation-utilites">
                <Link to="/auth/sign-in" className="outline">SIGN IN</Link>
                <button className="reset navigation-action" onClick={e => handleNavigationClicked(e)}>
                    <div className="navigation-action-line"></div>
                    <div className="navigation-action-line"></div>
                </button>
            </div>
        </nav>
    )
}