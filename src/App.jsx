import React from "react";
import Hero from "./Components/Hero/Index";
import About from "./Components/About/Index";
import Blogs from "./Components/Blogs/Index";
import Event from "./Components/Events/Index";
import Contact from "Components/Contact/Index";
import BackToTop from "Components/FixedButton";

const App = () => {
  return (
    <React.Fragment>
      <header>
        {/* navigation bar and header data */}
        <Hero />
        {/* Fixed button for down to up */}
        <BackToTop />
      </header>
      {/* *** */}
      <main>
        {/*   Some information and Card */}
        <About />
        {/* Blogs and informataion */}
        <Blogs />
        {/* Testimonail carousel and information */}
        <Event />
      </main>

      <footer>
        {/* Footer and contact FormF */}
        <Contact />
      </footer>
    </React.Fragment>
  );
};

export default App;
