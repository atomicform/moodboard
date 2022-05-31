import Navbar from './Navbar'
import Home from './Home'
import Vibe from './Vibe'
import Login from './Login'
import Mood from './Mood'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import NFTDetails from './NFTDetails';
import NotFound from './NotFound';


function App() {
  const title = 'welcome to web3';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/vibe" element={<Vibe/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mood" element={<Mood/>}/>
            <Route path="/nfts/:id" element={<NFTDetails/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
