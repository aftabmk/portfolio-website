import { Route, Routes } from "react-router-dom";
import './App.scss'
import About from './components/About'
import Layout from './components/Layout'
import Home from './components/Home'
import Notfound from "./components/404";
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from "./components/Resume";


function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>} /> 
                <Route path="about" element={<About/>} /> 
                <Route path="contact" element={<Contact/>} />  
                <Route path="portfolio" element={<Portfolio/>} />  
            </Route> 
            <Route path="/resume" element={<Resume/>} />  
            <Route path="*" element={<Notfound/>} />  
        </Routes>
    </div>
  );
}

export default App;
