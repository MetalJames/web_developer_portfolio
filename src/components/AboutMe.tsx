import { aboutme } from '../constants/constants';

const AboutMe = () => {
    return (
        <div id='aboutme' className='pt-[6rem] sm:px-24 px-6 sm:pb-4 pb-2'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>ABOUT ME</h1>
            {aboutme.map(item=> (
                <div key={item.id} className='flex sm:flex-row flex-col w-full justify-center items-center'>
                    <div className='sm:w-[40%] w-full flex flex-col items-center'>
                        <h2 className='text-2xl py-6'>{item.title}</h2>
                        <p className='max-w-[70%] text-center'>{item.description}</p>
                        <button>{item.resume}</button>
                    </div>
                    <div className='sm:w-[40%] w-full flex flex-col justify-center content-center items-center'>
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