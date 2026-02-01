import React from 'react';
import about from '../assets/about.png'; // তোমার image path ঠিক করবে

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE + STAR */}
        <figure className="flex justify-center relative order-2 lg:order-1 overflow-visible">
          <div className="relative -translate-x-8 translate-y-8 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

            {/* ⭐ STAR BACKGROUND */}
            <div
              className="absolute -left-10 -top-10
              w-[115%] h-[115%]
              bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f59e0b]
              rotate-12 star-shape z-0"
            ></div>

            {/* 🖼️ IMAGE ON TOP */}
            <img
              src={about}
              alt="About Image"
              className="relative w-full h-full  object-cover rounded-2xl z-10 shadow-2xl"
            />
          </div>
        </figure>

        {/* CONTENT SIDE */}
       <article 
       data-aos='fade-left'
       data-aos-delay='300'
       className='text-center lg:text-left relative order-1
       lg:order-2'>
        <header>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl
          xl:text-6xl font-bold mb-4 sm:mb-6
          text-transparent bg-linear-to-r from-orange-400
          to-orange-600 bg-clip-text'
          data-aos='fade-up'
          data-aos-delay='400'>
            About Me
             </h1>
        </header>
           <p className={`text-sm sm:text-base lg:text-lg
            xl:text-xl mb-6 sm:mb-8 leading-relaxed
           bg-linear-to-r from-orange-900/10 to-orange-900/5
           p-4 sm:p-6 rounded-xl sm:rounded-2xl
           backdrop-blur-sm
           ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
           data-aos='fade-up'
           data-aos-delay='500'>
           I am a Web Designer and WordPress Developer with internship experience in MERN Stack development. 
           I specialize in building modern, responsive websites and continuously improving my full-stack skills.
            I focus on quality work, performance, and client satisfaction.
           </p>
           <div
           className='flex flex-wrap justify-center
           lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6
           sm:mb-8'>
            <div 
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='650'>
              <div className='text-2xl sm:text-3xl
              lg:text-4xl font-bold text-orange-400'>5+</div>
               <div className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >Education</div>
            </div>


             <div 
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='650'>
              <div className='text-2xl sm:text-3xl
              lg:text-4xl font-bold text-orange-400'>1+</div>
               <div className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >Years Experience</div>
            </div>

          <div 
            className='text-center'
            data-aos='zoom-in'
            data-aos-delay='700'>
              <div className='text-2xl sm:text-3xl
              lg:text-4xl font-bold text-orange-400'>5+</div>
               <div className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >Projects</div>
            </div>


           </div>
           <button
              onClick={() =>
               document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
             }
            className={`w-full sm:w-auto
                inline-flex items-center justify-center 
                border-2 border-orange-500
                py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
               rounded-full text-base sm:text-lg font-semibold transition-all
               duration-300 transform
               ${darkMode
               ? 'text-white bg-orange-500/10'
               : 'text-gray-800 bg-white/90'
                  }`}
               data-aos='fade-up'
            data-aos-delay='800'
                   >
              Learn More
            </button>


       </article>

      </div>
    </section>
  );
};

export default About;
