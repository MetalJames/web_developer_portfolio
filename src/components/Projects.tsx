import { projects } from '../constants/constants';

const Projects = () => {

    const first = ['pcmaxrepair', 'aghReact', 'travelapp', 'techoshawa', 'tamagotchigame'];
    const middle = ['chevysonic2018', 'myyoutube', 'realestateapp', 'grocerystore', 'equipmentsignout'];
    const last = ['todofirebase', 'fitnessapp', 'gpt3app', 'moviewebsite', 'aghwordpress'];

    const mdFirst = ['pcmaxrepair', 'todofirebase', 'myyoutube', 'travelapp', 'gpt3app', 'grocerystore', 'tamagotchigame', 'aghwordpress' ];
    const mdLast = ['chevysonic2018', 'aghReact', 'fitnessapp', 'realestateapp', 'techoshawa', 'moviewebsite', 'equipmentsignout' ];

    return (
        <div id='projects' className='pt-[6rem]'>
            <h1 className='text-3xl font-bold text-center py-6'>PROJECTS</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
                {projects.map((project, index) => (
                    <div key={project.id} >   
                    <a href={project.link} target='_blank' className={`
                        relative flex flex-col sm:pt-0 m-2 justify-center items-center
                        group/item sm:h-[auto] h-[18rem] object-contain overflow-hidden  skillsborder border-y-[3px]
                        ${first.includes(project.id) && 'md:rounded-s-[25px] md:rounded-[0] rounded-[25px]'}
                        ${middle.includes(project.id) && 'md:rounded-[0px] rounded-[25px]'}
                        ${last.includes(project.id) && 'md:rounded-e-[25px] md:rounded-[0] rounded-[25px]'}
                        ${mdFirst.includes(project.id) && 'sm:rounded-s-[25px] sm:rounded-[0] rounded-[25px]'}
                        ${mdLast.includes(project.id) && 'sm:rounded-e-[25px] sm:rounded-[0] rounded-[25px]'}
                    `}>
                        <h3 className='sm:block hidden font-poppins text-[1.2rem] py-4'>{project.title}</h3>
                        <h3 className='absolute top-0 sm:hidden block font-poppins text-[1.2rem] py-1.5 w-full rounded-t-[25px] text-center'>{project.title}</h3>
                            <img src={project.img} alt={project.title} className='
                                md:group-hover/item:opacity-10 transition-opacity duration-500 cursor-pointer'
                            />
                        <div className='absolute sm:block hidden sm:bottom-0 lg:bottom-auto lg:opacity-0 lg:group-hover/item:opacity-100 transition-opacity duration-500 text-center cursor-pointer bgSMtoLG lg:bg-transparent sm:opacity-80 w-full'>
                            <h4 className='font-semibold lg:text-[20px] md:text-[1rem] text-[.9rem] leading-[32px]'>{project.smallDiscription}</h4>
                            <h6 className='font-poppins font-light lg:text-[16px] md:text-[.7rem] text-[.7rem] leading-[24px]'>{project.buildWithTitle}</h6>
                            <h4 className='font-poppins font-normal lg:text-[18px] md:text-[.8rem] text-[.7rem] leading-[32px]'>{project.buildWith}</h4>
                        </div>
                            <p className='absolute bottom-7 sm:hidden block w-full pt-1.5 text-center'>Visit Site</p>
                            <p className='absolute bottom-0 sm:hidden block text-[.8rem] py-1.5 w-full rounded-b-[25px] text-center'>{project.buildWith}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects