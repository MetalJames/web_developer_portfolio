import { webDevSkills } from '../constants/constants';

const Skills = () => {
    return (
        <div id='skills' className='sm:w-[80%] w-full m-[auto] pt-[6rem]'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>SKILLS</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-[4rem] w-[full] sm:p-6 p-0 justify-items-center'>
                {webDevSkills.map(webDevSkill=> (
                    <div key={webDevSkill.id} className='skillsborder border-x-[3px] rounded-[25px] p-10 sm:max-w-[30vw] w-full'>
                        <h3 key={webDevSkill.id} className='text-center text-3xl pb-4'>{webDevSkill.title}</h3>
                        <ul className='skillsborder flex flex-col flex-wrap border-t-[3px] pt-4 sm:max-h-[10vw] h-[40vw]'>
                            {webDevSkill.skillslist.map(skill => (
                                <li key={skill.id} className='font-light'>{skill.skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills