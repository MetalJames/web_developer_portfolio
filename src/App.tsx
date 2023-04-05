import { NavBar, Projects, Skills, AboutMe, ContactMe, Footer } from './components'

function App() {

  return (
    <div className='w-full overflow-hidden transition-opacity duration-1000'>
      <div id='header' className='sm:px-16 px-6 flex justify-center items-center fixed w-full'>
        <div className='xl:max-w-[1280px] w-full'>
          <NavBar />
        </div>
      </div>
      <div className='pt-[6rem] xl:max-w-[1280px] w-full'>
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App
