
import './App.css';
import NavBar from './component/NavBar';
import Login from './component/Login';
import About from './component/About';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Signup from './component/Signup';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/" element={<News key="general" pageSize={8} country="in" cateogry='general' />}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={8} country="in" cateogry='business' />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={8} country="in" cateogry='health' />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country="in" cateogry='entertainment' />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={8} country="in" cateogry='science' />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={8} country="in" cateogry='sports' />}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={8} country="in" cateogry='technology' />}></Route>
        </Routes>
      </Router >

    </>
  );
}

export default App;

