import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cv from "./pages/Cv"
function App() {
  const location = useLocation()
  const backgroundStyle = location.pathname == "/" ? "bg-[url('./assets/images/background-homePage.jpeg')]" : "bg-pink-100"
  return (
    <div className={`${backgroundStyle} background`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
