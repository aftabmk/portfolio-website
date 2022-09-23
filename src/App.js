import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Layout, Notfound, Portfolio, Resume } from "./components";
import './App.scss'

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
