import { Route, Routes } from 'react-router-dom';
import { NavigationOverlay } from './components/Navigation';

import Home from './views/Home';
import Timepieces from './views/Timepieces';

function App() {
  return (
    <>
      <NavigationOverlay/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/timepieces" Component={Timepieces}/>
      </Routes>
    </>
  )
}

export default App;
