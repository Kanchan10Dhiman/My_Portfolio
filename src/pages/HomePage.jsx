import React from 'react'
import image from '../assets/kanchu.png'
import Button from '../components/Button'
import { Github, Linkedin, Code2 } from 'lucide-react'
export default function HomePage() {
  return (
    //main div
    <div className='min-h-[90vh] w-full flex gap-40 p-24 bg-gradient-to-r from-gray-800 via-emerald-950 to-gray-800
'>

      {/* box1 */}
      <div className=' h-[28rem] w-1/2 flex-col '>

        {/*div 1*/}
        <div className='h-40 min-w-screen  p-2'>
          <h1 className='text-6xl font-bold leading-[80px] font-serif text-white'>
            <span className='block'>Hi There,</span>
            I'm <span className='text-sky-300 '>Kanchan!</span>
          </h1>
        </div>
        {/* div2 */}
        <div className='h-28 min-w-screen p-3'>
          <p className='text-lg font-semibold font- text-white'>I am a passionate Computer Science student focused on building responsive and user-friendly web applications. I enjoy solving problems and continuously improving my development skills.
          </p>
        </div>

        {/* div3 */} 
        <div className='h-16 min-w-screen flex gap-4 pt-2'>
          <Button text='Download CV' />
          <Button text='Certifications' />
        </div>

        {/* div4: social links */}
        <div className='min-w-screen h-16 flex items-center gap-4 pt-4'>
          <a
            href='https://www.linkedin.com/in/kanchan-dhiman-20b393286/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400 text-sky-200 text-sm font-medium hover:bg-sky-400/10 hover:border-sky-300 transition-colors duration-200'
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href='https://github.com/Kanchan10Dhiman'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-100 text-sm font-medium hover:bg-gray-100/10 hover:border-white transition-colors duration-200'
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href='https://leetcode.com/u/kanchandhiman008/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400 text-amber-200 text-sm font-medium hover:bg-amber-400/10 hover:border-amber-300 transition-colors duration-200'
          >
            <Code2 size={18} />
            <span>LeetCode</span>
          </a>
        </div>

      </div>


      {/* img div */}
      <div className="h-96 w-96 rounded-full overflow-hidden border-cyan-400 hover:border-cyan-300 transition-all duration-500 ease-in-out shadow-[0_0_20px_#22d3ee] hover:shadow-[0_0_40px_#22d3ee]">
        <img
          src={image} alt="profile" className="h-full w-full object-fill" />
      </div>

    </div>
  )
}
