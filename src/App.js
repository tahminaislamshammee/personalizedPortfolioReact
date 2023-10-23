import './App.css';
import './responsive.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import NavBar from './Components/NavBar';
import Themes from './Components/Theme';
function App() {
  return (

    <Router basename='/personalizedPortfolioReact'>
    <NavBar/>
    <Themes/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
