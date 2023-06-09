import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,BackToTop } from "./components";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (

  
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <hr />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <BackToTop />
    </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  

);

export default App;
