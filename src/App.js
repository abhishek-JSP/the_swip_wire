
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Main from './Components/Main/main';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Elearn from './Components/Navbar/Elearn/Elearn';
import Home from './Components/Navbar/Home/Home';
import About from './Components/Navbar/About/About';
import Blog from './Components/Navbar/Blog/Blog';
import Course from './Components/Navbar/Courses/Course';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     

      <Routes>
        <Route path="/" element={<Elearn/>}></Route>
        <Route path="/features" element={<Home/>}></Route>
        <Route path="/collabration" element={<Course/>}/>
        <Route  path="/solutions" element={<Blog/>}></Route>
        <Route path="/testimonials" element={<About />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
   
    </div>
  );
}

export default App;
