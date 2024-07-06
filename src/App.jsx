import HeaderSection from "./global/header"
import HomePage from "./pages/home"
import { Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import FooterSection from "./global/footer";

function App() {

  return (
    <>
    <div className="bg-bgHomeColor p-0 m-0">
    <HeaderSection />

    <main className="pt-16">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    
    <Route path="/contact" element={<ContactPage />} />
  </Routes>

    </main>

  

    


    <FooterSection />
    </div>

    </>
  )
}

export default App
