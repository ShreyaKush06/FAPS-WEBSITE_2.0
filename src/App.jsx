import SocietyTitle from '../components/society_name.jsx';
import SocialLinks from '../components/social_links.jsx';
import { useState, useEffect } from "react";
import logo from "./assets/logo1 white (1).png";



function App() {
  const [animate, setAnimate] = useState(false);
  const [logoUp, setLogoUp] = useState(false);
  const [showText, setShowText] = useState(false);
  const [blinkDone, setBlinkDone] = useState(false);

  useEffect(() => {
  const logoTimer = setTimeout(() => setLogoUp(true), 1700);      // Move logo up after 1.7s
  const textTimer = setTimeout(() => setShowText(true), 2000);  // Show text after (e.g. 1.8s)
  const blinkTimer = setTimeout(() => setBlinkDone(true), 1700);   
  return () => {
    clearTimeout(logoTimer);
    clearTimeout(textTimer);
  };
}, []);


  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#231f20] via-[#352b2c] to-[#232025] overflow-hidden">
        <SocialLinks />

        {/* Logo Animation */}
        <img
          src={logo}
          alt="Society Logo"
          className={`
            absolute
            w-14 h-14
            transition-all duration-700
            ${
              logoUp
                ? 'top-6 left-1/2 -translate-x-1/2'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            }{!blinkDone ? ' animate-blinkTwice ' : ''}
          `}
          style={{ zIndex: 10 }}
        />

        {/* Animated Society Name */}
        <div className={`transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <SocietyTitle />
        </div>
      </div>
    </>
  );
}

export default App;
