import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Project_mainPage from './components/Project_mainPage';
import Experience from './components/Experience';
import Education from './components/Education';

function App (){
  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path="/" element={[<Home />, <About />, <Profile />, <Footer/>]}/>
          <Route path="/projects" element={[<Project_mainPage />]}/>
          <Route path="/amazon" element={[<Project_mainPage />]}/>
          <Route path="/news" element={[<Project_mainPage />]}/>
          <Route path="/spotify" element={[<Project_mainPage />]}/>
          <Route path="/text-utils" element={[<Project_mainPage />]}/>
          <Route path="/portfolio" element={[<Project_mainPage />]}/>
          <Route path="/tourism" element={[<Project_mainPage />]}/>
          <Route path="/experience" element={[<Experience/>]}/>
          <Route path="/education" element={[<Education/>]}/>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
