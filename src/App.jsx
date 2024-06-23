import HeaderSection from "./global/header"
import HomePage from "./pages/home"
import { Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

function App() {

  return (
    <>
    <div>
    <HeaderSection />

<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
  

    </div>

    </>
  )
}

export default App
