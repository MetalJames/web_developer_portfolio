import { aboutme } from '../constants/constants';

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>About Me</h1>
            {aboutme.map(item=> (
                <div className='flex w-full justify-center items-center'>
                    <div className='w-[40%] flex flex-col items-center'>
                        <h2 className='text-2xl py-6'>{item.title}</h2>
                        <p className='max-w-[70%] text-center'>{item.description}</p>
                        <button>{item.resume}</button>
                    </div>
                    <div className='w-[40%] flex flex-col justify-center content-center items-center'>
                        <img src={item.img} alt={item.name} />
                        <div className='flex w-[350px] justify-between'>
                            <button><a href={item.linkedIn} />Email Me</button>
                            <div>
                                <p className='text-center'>{item.name}</p>
                                <p className='text-center'>{item.position}</p>
                            </div>
                            <button><a href={item.linkedIn} />Linked In</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutMe