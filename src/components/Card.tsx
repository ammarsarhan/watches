import { Link } from "react-router";
import gsap, { Power4 } from "gsap";
import "../styles/components/card.css";
import { useRef } from "react";

interface CardProps {
    image: string
    label: string
    link: string
}

export default function Card ({image, label, link}: CardProps) {
    const borderElement = useRef<HTMLDivElement | null>(null);

    const handleAnimateHover = () => {
        console.log("Reached")
        
        const timeline = gsap.timeline();

        timeline
        .to(borderElement.current, {
            width: 0,
            duration: 0.4,
            ease: Power4.easeInOut
        })
        .to(borderElement.current, {
            width: "100%",
            duration: 0.4,
            ease: Power4.easeInOut
        })
    }

    return (
        <Link to={link} onMouseEnter={handleAnimateHover}>
            <div className="timepieces-card">
                <div className="timepieces-card-image-container">
                    <img src={image} alt={`${label} Image`}/>
                </div>
                <div className="timepieces-card-label-container">
                    <span>{label}</span>
                    <div className="timepieces-card-label-border" ref={borderElement}></div>
                </div>
            </div>
        </Link>
    )
}