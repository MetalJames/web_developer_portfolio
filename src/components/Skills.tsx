import { webDevSkills } from '../constants/constants';

const Skills = () => {
    return (
        <div id='skills' className='sm:w-[90%] md:w-[80%] xs:w-[70%] w-full m-[auto] pt-[6rem]'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>SKILLS</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-[4rem] w-[full] md:p-6 sm:p-0 p-3 justify-items-center'>
                {webDevSkills.map(webDevSkill=> (
                    <div key={webDevSkill.id} className='skillsborder border-x-[3px] rounded-[25px] md:p-10 p-6 sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[25rem] w-full'>
                        <h3 key={webDevSkill.id} className='font-poppins text-center sm:text-2xl lg:text-3xl pb-4'>{webDevSkill.title}</h3>
                        <ul className='skillsborder flex flex-col flex-wrap border-t-[3px] pt-4 sm:max-h-[10rem] h-[10rem]'>
                            {webDevSkill.skillslist.map(skill => (
                                <li key={skill.id} className='font-poppins font-light'>{skill.skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills