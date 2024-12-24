import { Route, Routes } from 'react-router-dom';
import { NavigationOverlay } from './components/Navigation';
import Home from './views/Home';

function App() {
  return (
    <>
      <NavigationOverlay/>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </>
  )
}

export default App;
