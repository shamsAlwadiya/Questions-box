import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,Route, Routes }from  'react-router-dom';
import Footer from './Components/Footer/Footer';
import LevelSelection from './Pages/LevelSelection/LevelSelection.jsx';
import { CourseProvider } from './Context/ThemeContext.jsx';
import Questions from './Pages/Questions/Questions.jsx';
import About from './Components/About/About.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Results from './Pages/Results/Results.jsx';
import ReviewQuestion from './Pages/ReviewQuestion/ReviewQuestion.jsx';
function App() {
  return (
    <CourseProvider>

      <BrowserRouter>
      <Navbar />
      <Routes >

      <Route path='/' element={<Home />} />
      <Route path='/levelSelection' element={<LevelSelection />} />
      <Route path='/quiz' element={<LevelSelection />} />
      <Route path='/quiz/:level' element={<LevelSelection />} />
      <Route path='/questions' element={<Questions />} />
      <Route path='/about' element={<About />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/results' element={<Results />} />
      <Route path='/review' element={<ReviewQuestion />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
