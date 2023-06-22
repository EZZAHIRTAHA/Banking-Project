import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,BackToTop, Login, Register } from "./components";
import { Link, Routes, Route } from "react-router-dom";

const App = () => (

  
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <hr />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} scale-up-center`}>
        <div className={`${styles.boxWidth}`}>
          
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <BackToTop />
    </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Stats />
        <Billing />
        <Testimonials />
        <Clients />
        <CardDeal />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  

);

export default App;
