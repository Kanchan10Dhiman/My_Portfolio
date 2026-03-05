import React from 'react'

export default function SkillsPage() {
  return (
    // main div
    <div className='min-h-screen w-full bg-gradient-to-r from-gray-800 via-emerald-950 to-gray-800 flex justify-center'>
      <div className='w-full h-[610px] flex flex-col items-center gap-6'>
        {/* Technical Skill  div 1*/}
        <div className='w-[400px] h-18 pt-5'>
          <h1 className='text-5xl text-white font-serif font-bold underline underline-offset-8 decoration-cyan-400'>Technical Skills</h1>
        </div>

        {/* Skills div 1 */}
        <div className='w-[1300px] h-60 flex gap-10'>
          {/* PROGRAMMING */}
          <div className='flex gap-3 flex-1 bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300 backdrop-blur '>
            <div className='w-4 h-full bg-cyan-600 rounded-s-2xl'>
            </div>

            <div className='h-full w-[360px] text-white flex flex-col gap-6 pt-5 '>
              <h1 className='text-2xl font-bold '>PROGRAMMING</h1>
              <div className='flex gap-4 text-xl font-semibold'>
                <span className='bg-cyan-800/90 h-9 w-20 flex justify-center'>C</span>
                <span className='bg-cyan-800/90 h-9 w-20 flex justify-center'>C++</span>
                <span className='bg-cyan-800/90 h-9 w-32 flex justify-center'>JavaScript</span>
              </div>



            </div>

          </div>

          <div className='flex gap-3 flex-1 bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300 backdrop-blur '>
            <div className='w-4 h-full bg-cyan-600 rounded-s-2xl'>
            </div>

            <div className='bg-pink-500 h-full w-[360px]'>
              <h1 >Programming</h1>
            </div>

          </div>

          <div className='flex gap-3 flex-1 bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300 backdrop-blur '>
            <div className='w-4 h-full bg-cyan-600 rounded-s-2xl'>
            </div>

            <div className='bg-pink-500 h-full w-[360px]'>
            </div>

          </div>
        </div>

        {/* Skills div 2 */}
        <div className='w-[1300px] h-60 flex gap-10'>
          <div className='bg-yellow-300 flex-1 rounded-2xl'>
          </div>

          <div className='bg-pink-400 flex-1 rounded-2xl'>
          </div>

          <div className='bg-orange-400 flex-1 rounded-2xl'>
          </div>
        </div>
      </div>
    </div>
  )
}
