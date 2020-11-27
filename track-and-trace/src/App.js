import './App.css';
import Dashboard from './pages/dashboard'
import InputTestPage from './pages/input-test-page'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Track & Trace App</span>
      </header>
      <div>
        <InputTestPage />
      </div>
    </div>
  );
}

export default App;
