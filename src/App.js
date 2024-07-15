import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Quora from './components/Quora';
//import { Leaderboard } from '@mui/icons-material';
import Leaderboard from './components/LeaderBoardComp';
function App() {
  return (
    <div className="App">
     
    <Header></Header>
   <Quora></Quora> 
   {/* <Leaderboard></Leaderboard> */}
    </div>
  );
}

export default App;





