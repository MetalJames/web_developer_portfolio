import { NavBar, Projects, Skills, AboutMe, ContactMe, Footer } from './components'

function App() {

  return (
    <div className='w-full overflow-hidden'>
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <NavBar />
        </div>
      </div>
      <Projects />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
