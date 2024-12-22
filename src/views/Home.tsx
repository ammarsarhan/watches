import { useState } from 'react';

import Navigation from '../components/Navigation';
import Background from '../components/Background';

import { Play, Pause } from 'lucide-react';

import '../styles/views/Home.css';

function Home() {
  const [playBackground, setPlayBackground] = useState(true);

  return (
    <div className='hero-container'>
      <Navigation/>
      <main>
        <div className='hero-content'>
          <button className='hero-play-action reset' onClick={() => setPlayBackground(!playBackground)}>
            {playBackground ? <Pause fill="white" strokeWidth={0} className='lucide-logo'/> : <Play fill="white" strokeWidth={0} className='lucide-logo'/>}
          </button>
          <section className="hero" style={{color: 'white'}}>
            <div>
              <button className='hero-action outline'>DISCOVER TIMEPIECES</button>
              <div>
                <span>TIMEPIECES</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Background play={playBackground}/>
    </div>
  )
}

export default Home;