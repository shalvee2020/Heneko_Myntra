import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Quora from './components/Quora';
import RewardsPage from './components/RewardsPage';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="src\components\RewardsPage.js" element={<RewardsPage />} />
        <Route path="/" element={<Quora />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
