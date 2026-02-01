import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import CV from '../assets/CV.pdf'
import { DownloadIcon, Mail } from 'lucide-react'
import hero from '../assets/hero.png'
import hi from '../assets/hi.png'

const Hero = ({ darkMode }) => {

  const socialIcons = [
    { icon: github, alt: 'github', url: 'https://github.com/farzana2005' },
    { icon: facebook, alt: 'facebook', url: 'https://www.facebook.com/farzana.arefin.poly' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
    decoractiveCircle: 'bg-orange-500 opacity-10',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: `text-gray-900 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
    decoractiveCircle: 'bg-orange-400 opacity-20',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section id='home' className='body-font z-10'>
        <div className='container mx-auto flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 lg:px-14 py-12 lg:py-20 gap-3'>

          {/* LEFT CONTENT (TEXT + BUTTONS) */}
          <div className='lg:w-1/2 w-full flex flex-col items-start text-left space-y-4 lg:space-y-6'>

            {/* Social Icons */}
            <div className='flex justify-start gap-3'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transform hover:scale-110 transition-transform duration-300'
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.textPrimary}`}>
              hi, i'm Farzana
            </h1>

            {/* Paragraph */}
            <p className={`leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}>
              Web Designer & WordPress Developer  <br />
                 I build modern, responsive, and high-converting websites.
            </p>

            {/* Contact Info */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
             <a href="mailto:arefin683467@gmail.com" className="hover:underline">arefin683467@gmail.com</a> | 
             <a href="tel:+8801881-039182" className="hover:underline">+88 01881-039182</a>
            </p>

            {/* BUTTONS */}
            <div className='flex flex-col sm:flex-row justify-start gap-3'>
              <a href={CV} download>
                <button className='inline-flex items-center justify-center text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-transform duration-300 transform hover:scale-105'>
                  <DownloadIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                  Download CV
                </button>
              </a>

              <a href='#contact'>
                <button className={`inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-transform duration-300 transform hover:scale-105`}>
                  <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                  Contact Me
                </button>
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className='lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-end mt-4 lg:mt-0'>
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img src={hero} alt='Hero Image' className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />
              </div>
              <img src={hi} alt='Hi icon' className='absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10' />
            </div>
          </div>

        </div>

        {/* Decorative Circle */}
        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decoractiveCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`} />

      </section>
    </div>
  );
};

export default Hero;
