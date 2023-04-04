import { webDevSkills } from '../constants/constants';

const Skills = () => {
    return (
        <div>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>SKILLS</h1>
            <div className='grid grid-cols-2 gap-y-[4rem] w-[full] p-6 justify-items-center'>
                {webDevSkills.map(webDevSkill=> (
                    <div className='border-x-[3px] rounded-[25px] w-full p-10 max-w-[30vw]'>
                        <h3 key={webDevSkill.id} className='text-center text-3xl pb-4'>{webDevSkill.title}</h3>
                        <ul className='flex flex-col flex-wrap border-t-[3px] pt-4 max-h-[10vw]'>
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