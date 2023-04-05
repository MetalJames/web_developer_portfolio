import { projects } from '../constants/constants';

const Projects = () => {
    return (
        <div id='projects' className='pt-[6rem]'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>PROJECTS</h1>
            <div className='grid sm:grid-cols-3 grid-cols-1 m-2'>
                {projects.map(project => (
                    <div key={project.id} className='sm:h-[auto] h-[18rem] relative flex flex-col sm:p-6 m-2 justify-center items-center skillsborder border-y-[3px] rounded-[25px]'>
                        <h3 className='sm:block hidden font-poppins text-[1.2rem] p-4'>{project.title}</h3>
                        <h3 className='absolute top-0 sm:hidden block font-poppins text-[1.2rem] py-1.5 w-full rounded-t-[25px] text-center'>{project.title}</h3>
                        <img src={project.img} alt={project.title} className='rounded-[10px]'/>
                        <p className='absolute bottom-7 w-full pt-1.5 text-center'>Visit Site</p>
                        <p className='absolute bottom-0 font-poppins text-[.8rem] py-1.5 w-full rounded-b-[25px] text-center'>{project.buildWith}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects