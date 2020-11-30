import './App.css';
import Dashboard from './pages/dashboard'
import InputTestPage from './pages/input-test-page'
import BackArrow from '../src/images/left-arrow.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="button" id="home-button">
          <img src={BackArrow} alt="go-to-homepage-button" className="header-arrow-icon"></img><a className="header-button" href="#"><span>Home</span></a>
        </div>
        <span>Track & Trace App</span>
        <div id="header-straightener">
        </div>
      </header>
      <div>
        <InputTestPage />
      </div>
    </div>
  );
}

export default App;
