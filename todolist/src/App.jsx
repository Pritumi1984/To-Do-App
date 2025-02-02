import './App.css'
import LeftSection from './components/Left/LeftSection';
import Home from './Components/Middle/Home';
import RightSection from './components/Right/RightSection';

function App() {

  return (
      <div className='container'>
          <LeftSection  />
          <Home />
          <RightSection />
      </div>
  )
}

export default App
