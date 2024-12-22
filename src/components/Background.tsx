import "../styles/background.css"
import Hero from '../assets/hero.mp4'

export default function Background () {
    return (
        <div className="background-container">
            <video 
                muted
                autoPlay
                loop 
                controls={false}>
                <source src={Hero}/>
            </video>
        </div>
    )
}