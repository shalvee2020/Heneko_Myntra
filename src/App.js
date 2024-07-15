import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SavePos from './components/SavePos';
import Quora from './components/Quora';
//import { Leaderboard } from '@mui/icons-material';
import Leaderboard from './components/LeaderBoardComp';
function App() {
  return (
    <div className="App">
      
    <Header></Header>
   <Quora></Quora>  
    {/* <Leaderboard></Leaderboard> 
   <SavePos></SavePos> */}
    </div>
  );
}

export default App;





