import { aboutme } from '../constants/constants';

export const AboutMe = () => {
    return (
        <div id='aboutme' className='pt-[6rem] md:px-24 sm:px-0 px-3 sm:pb-4 pb-2'>
            <h1 className='text-3xl font-poppins font-bold text-center py-6'>ABOUT ME</h1>
            {aboutme.map(item=> (
                <div key={item.id} className='flex sm:flex-row flex-col w-full justify-center items-center p-6'>
                    <div className='sm:w-[50%] md:w-[40%] w-full flex flex-col items-center'>
                        <h2 className='text-2xl pb-6'>{item.title}</h2>
                        <p className='md:max-w-[75%] max-w-[90%] sm:text-justify text-left indent-10'>{item.descriptionone}</p><br />
                        <p className='md:max-w-[75%] max-w-[90%] sm:text-justify text-left indent-10'>{item.descriptiontwo}</p><br />
                        <p className='md:max-w-[75%] max-w-[90%] sm:text-justify text-left indent-10'>{item.descriptiontree}</p>
                        <a href={item.resume} target="_blank" className='sm:pt-12 pt-6 sm:pb-6 pb-12'>
                            <button className='bg-transparent hover:bg-[#29caba] font-semibold hover:text-white py-2 px-4 border downloadresume hover:border-transparent rounded transition-all'>Download Resume</button>
                        </a>
                    </div>
                    <div className='sm:w-[50%] md:w-[40%] w-full flex flex-col justify-center content-center items-center'>
                        <img src={item.img} alt={item.name}  className='w-full'/>
                        <div className='flex justify-between items-center w-full pt-4'>
                            <a href={item.email} className='w-[2.5rem] h-[2.5rem]'><img src={item.emailImg} alt="" /></a>
                            <div>
                                <p className='text-center'>{item.name}</p>
                                <p className='text-center'>{item.position}</p>
                            </div>
                            <a href={item.linkedIn} className='w-[2.5rem] h-[2.5rem]'><img src={item.linkedInImg} alt="" /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};