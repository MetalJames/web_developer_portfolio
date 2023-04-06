import { projects } from '../constants/constants';

const Projects = () => {

    const first = ['aghReact', 'travelapp', 'techoshawa', 'tamagotchigame'];
    const middle = ['chevysonic2018', 'realestateapp', 'grocerystore', 'equipmentsignout'];
    const last = ['fitnessapp', 'gpt3app', 'moviewebsite', 'aghwordpress'];

    const mdFirst = ['aghReact', 'fitnessapp', 'realestateapp', 'techoshawa', 'moviewebsite', 'equipmentsignout' ];
    const mdLast = ['chevysonic2018', 'travelapp', 'gpt3app', 'grocerystore', 'tamagotchigame', 'aghwordpress' ];

    return (
        <div id='projects' className='pt-[6rem]'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>PROJECTS</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
                {projects.map(project => (
                    <div key={project.id} className={`
                        group/item sm:h-[auto] h-[18rem] object-contain overflow-hidden relative flex flex-col sm:pt-0 m-2 justify-center 
                        items-center skillsborder border-y-[3px]
                        ${first.includes(project.id) && 'md:rounded-s-[25px] md:rounded-[0] rounded-[25px]'}
                        ${middle.includes(project.id) && 'md:rounded-[0px] rounded-[25px]'}
                        ${last.includes(project.id) && 'md:rounded-e-[25px] md:rounded-[0] rounded-[25px]'}
                        ${mdFirst.includes(project.id) && 'sm:rounded-s-[25px] sm:rounded-[0] rounded-[25px]'}
                        ${mdLast.includes(project.id) && 'sm:rounded-e-[25px] sm:rounded-[0] rounded-[25px]'}
                    `}
                    >
                        <h3 className='sm:block hidden font-poppins text-[1.2rem] py-4'>{project.title}</h3>
                        <h3 className='absolute top-0 sm:hidden block font-poppins text-[1.2rem] py-1.5 w-full rounded-t-[25px] text-center'>{project.title}</h3>
                            <img src={project.img} alt={project.title} className=
                                {`
                                md:group-hover/item:opacity-25 transition-opacity duration-500 cursor-pointer

                                `}
                                />
                        <div className='absolute opacity-0 sm:group-hover/item:opacity-100 transition-opacity duration-500 text-center cursor-pointer'>
                            <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>{project.smallDiscription}</h4>
                            <h6 className='font-poppins font-normal text-[16px] leading-[24px]'>{project.buildWithTitle}</h6>
                            <h4 className='font-poppins font-normal text-[18px] leading-[32px]'>{project.buildWith}</h4>
                        </div>
                        <p className='absolute bottom-7 sm:hidden block w-full pt-1.5 text-center'>Visit Site</p>
                        <p className='absolute bottom-0 sm:hidden block font-poppins text-[.8rem] py-1.5 w-full rounded-b-[25px] text-center'>{project.buildWith}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects