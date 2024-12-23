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
  const backgroundStyle = location.pathname == "/my-portfolio/" ? "bg-[url('./assets/images/background-homePage.jpeg')]" : "bg-pink-100"
  console.log('back', location)
  return (
    <div className={`${backgroundStyle} background flex flex-col min-h-screen overflow-y-scroll`}>
      <Header />
      <main className='flex-grow container mx-auto'>
        <Routes>
          <Route path="/my-portfolio/" element={<Home />} />
          <Route path="/my-portfolio/about" element={<About />} />
          <Route path="/my-portfolio/contact" element={<Contact />} />
          <Route path="/my-portfolio/cv" element={<Cv />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
