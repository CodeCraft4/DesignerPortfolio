import React, { useState } from "react";
import "./index.css";
import Hero from "./Components/Hero/Index";
import About from "./Components/About/Index";
import Blogs from "./Components/Blogs/Index";
import Event from "./Components/Events/Index";
import Contact from "Components/Contact/Index";
import BackToTop from "Components/FixedButton";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
    <React.Fragment>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      {loading ? (
        <div className="loader">
          <InfinitySpin
            visible={true}
            size={200}
            color="orange"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
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
        </>
      )}
    </React.Fragment>
  );
};

export default App;
