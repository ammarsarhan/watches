import { useEffect, useRef } from "react"
import "../styles/components/background.css"

import Hero from '../assets/hero.mp4'

export default function Background ({play}: {play: boolean}) {
    const videoElement = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoElement.current) {
            if (play) {
                videoElement.current.play();
            } else {
                videoElement.current.pause();
            }
        }
    }, [play])

    return (
        <div className="background-container">
            <video 
                muted
                autoPlay
                loop 
                controls={false}
                ref={videoElement}>
                <source src={Hero}/>
            </video>
        </div>
    )
}