import { useEffect, useState } from 'react';
import { NavBar, Projects, Skills, AboutMe, ContactMe, Footer } from './components'

function App() {

  const [opacity, setOpacity] = useState(0); 

  useEffect(() => {
    let timer = setTimeout(() => {
      setOpacity(1);
    }, 500); // Increase opacity over 1 second

    return () => clearTimeout(timer); // Clean up timer when component unmounts
  }, []); // Run only once when component mounts

  return (
    <div style={{opacity}}  className="w-full overflow-hidden">
      <div
        id="header"
        className="sm:px-16 px-6 flex justify-center items-center fixed w-full z-50"
      >
        <div className="xl:max-w-[1280px] w-full">
          <NavBar />
        </div>
      </div>
      <div className="w-full flex justify-center items-center ss:px-20 ssm:px-24 sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Projects />
          <Skills />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
