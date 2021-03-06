import React from 'react';

const AboutMe = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='flex flex-col-reverse md:flex-row justify-around my-5'>
                <div className='text-left w-full md:w-1/2 my-auto'>
                    <h1 className='text-5xl font-semibold mb-5'>Labib Amir Salimi</h1>
                    <p className='text-3xl'>Student and beginner <span className='font-semibold'>web developer</span></p>
                </div>
                <div>
                    <img
                        className='w-80 mx-auto rounded-full border-4 border-orange-400 shadow-md shadow-gray-500 mb-3 md:mb-0'
                        src="images/me.jpg"
                        alt="me!" />
                </div>
            </div>
            <div className='text-left'>
                <h1 className='text-5xl font-semibold my-3'>Goals</h1>
                <p className='text-xl leading-relaxed'>
                    I am a student who recently moved from my home town to Dhaka. After finishing this course I want to get a part-time job so that I can afford a better place to live. I want this part-time job for career reasons as well. I think already having a couple of years of work experience will keep me ahead of my competition when I finish university and look for a full time job. I always liked web development, mainly because It's feels very rewarding when I visually see my code effect in the browser in real time. That is why I chose this path and want to give my best to turn this passion into a profession. <br />
                    This course taught me many things other than just programming. I learned the importance of consistency here. Consistently dedicating at least 4-5 hours to this course everyday got me where I am today and I have no intention of stopping this flow. <br />
                    Ever since we got started with react, I had to work even harder to learn because before this course I never even heard of this 'thing'. But it was an enjoyable process and I will have to continue that to fulfill my goal. <br />
                </p>
            </div>
        </div>
    );
};

export default AboutMe;