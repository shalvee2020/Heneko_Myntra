import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Quora from './components/Quora';
import RewardsPage from './components/RewardsPage';
//import { Leaderboard } from '@mui/icons-material';
import Leaderboard from './components/LeaderBoardComp';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      {/* <Leaderboard></Leaderboard> */}
      <Routes>
        <Route path="src\components\RewardsPage.js" element={<RewardsPage />} />
        <Route path="/" element={<Quora />} />
      </Routes>
     
    
   
   {/* <Leaderboard></Leaderboard> */}
    </div>
  </Router>
  );
}

export default App;





