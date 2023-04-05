import { NavBar, Projects, Skills, AboutMe, ContactMe, Footer } from './components'

function App() {

  return (
    <div className='w-full overflow-hidden'>
      <div id='header' className='sm:px-16 px-6 flex justify-center items-center fixed w-full'>
        <div className='xl:max-w-[1280px] w-full'>
          <NavBar />
        </div>
      </div>
      <div className='pt-[6rem]'>
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
