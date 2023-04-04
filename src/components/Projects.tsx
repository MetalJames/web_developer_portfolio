import { projects } from '../constants/constants';

const Projects = () => {
    return (
        <div>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>PROJECTS</h1>
            <div className='grid grid-cols-3'>
                {projects.map(project => (
                    <div className='flex flex-col p-6 justify-center items-center'>
                        <h1 className='font-poppins text-2xl p-4'>{project.title}</h1>
                        <img src={project.img} alt={project.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects