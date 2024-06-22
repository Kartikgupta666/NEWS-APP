
import Login from './component/Login';
import About from './component/About';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Signup from './component/Signup';
import NavBar from './component/NavBar';
import { useState } from 'react';
import MainState from "./context/MainState";

function App() {
  const apikey = "ba4612a07e41422f87584493c9260c2e"
  // const apikey = process.env.REACT_NEWS setProgress={setProgress}_API
  const pagesize = 8;
  const [progress, setProgress] = useState(0)

  return (
    <>
      <MainState>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}

          />
          <NavBar />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/aboutus" element={<About />} />

            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pagesize} apikey={apikey} country="in" cateogry='general' />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pagesize} apikey={apikey} country="in" cateogry='business' />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pagesize} apikey={apikey} country="in" cateogry='health' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pagesize} apikey={apikey} country="in" cateogry='entertainment' />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pagesize} apikey={apikey} country="in" cateogry='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pagesize} apikey={apikey} country="in" cateogry='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pagesize} apikey={apikey} country="in" cateogry='technology' />}></Route>
          </Routes>
        </Router >
      </MainState>
    </>
  );
}

export default App;

