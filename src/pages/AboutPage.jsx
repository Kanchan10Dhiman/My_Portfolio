import React from 'react'
import { GraduationCap, Code, Brain, School, BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-gray-800 via-emerald-950 to-gray-800 flex justify-center px-4 py-12'>
      <div className='max-w-6xl w-full h-[550px] flex  gap-14 '>
        {/* LEFT: ABOUT ME CARD */}
        <div className='flex-1 bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-300 backdrop-blur'>
          {/* Header + About text */}
          <div className='px-8 pt-8 pb-6 flex flex-col gap-6'>
            <h1 className='text-5xl font-serif font-bold text-white mb-4'>
              <span className='underline underline-offset-8 decoration-cyan-400'>
                About Me
              </span>
            </h1>
            <p className='text-white/90 text-base lg:text-lg leading-relaxed font-serif max-w-xl'>
              I am a <span className='font-semibold text-cyan-300'>Computer Science Engineering</span> student passionate about
              <span className='font-semibold text-cyan-200'> Data Structures</span>,
              <span className='font-semibold text-cyan-200'> Algorithms</span>, and
              <span className='font-semibold text-cyan-200'> Web Development</span>. I enjoy solving real-world problems and building efficient, responsive applications while continuously exploring new technologies.
              <br />
              <br />
              My goal is to grow as a
              <span className='font-semibold text-cyan-300'> Software Engineer</span> and contribute to meaningful projects that combine clean design with strong engineering principles.
            </p>
          </div>

          {/* Icon highlight row */}
          <div className='px-8 pb-8 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3'>
              <div className='p-2 rounded-full bg-cyan-500/20 text-cyan-300'>
                <GraduationCap className='w-6 h-6' />
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>B.Tech CSE Student</p>
              </div>
            </div>

            <div className='flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3'>
              <div className='p-2 rounded-full bg-sky-500/20 text-sky-300'>
                <Code className='w-6 h-6' />
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>Building Web Experiences</p>
              </div>
            </div>

            <div className='flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3'>
              <div className='p-2 rounded-full bg-emerald-500/20 text-emerald-300'>
                <Brain className='w-6 h-6' />
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>Curious Problem Solver</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: EDUCATION TIMELINE CARD */}
        <div className='flex-1 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.25)]'>
          {/* EDUCATION HEADING */}
          <div className='h-16 flex items-center justify-center border-b border-white/10 bg-white/5'>
            <h2 className='text-2xl lg:text-3xl font-serif font-semibold text-white flex items-center gap-2'>
              <BookOpen className='w-7 h-7 text-cyan-300' />
              <span>Education</span>
            </h2>
          </div>

          {/* ITEMS SECTION */}
          <div className='py-6 px-8'>
            <div className='space-y-6'>
              {/* B.Tech */}
              <div className='flex gap-4 items-start bg-gradient-to-r from-cyan-700 to-emerald-600 p-5 rounded-xl shadow-lg border border-white/10'>
                <div className='shrink-0 w-10 h-10 rounded-full bg-blue-500/90 flex items-center justify-center shadow-md'>
                  <GraduationCap className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-white font-semibold text-lg'>
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className='text-gray-100/90 text-sm mt-1'>
                    Maharishi Markandeshwar (Deemed to be University)
                  </p>
                  <span className='inline-block mt-3 bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full text-xs'>
                    2023 - 2027
                  </span>
                </div>
              </div>

              {/* 12th */}
              <div className='flex gap-4 items-start bg-gradient-to-r from-sky-700 to-cyan-600 p-5 rounded-xl shadow-md border border-white/10'>
                <div className='shrink-0 w-10 h-10 rounded-full bg-cyan-600/90 flex items-center justify-center shadow-md'>
                  <School className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-white font-semibold text-lg'>
                    Senior Secondary (12th)
                  </h3>
                  <p className='text-white text-sm mt-1'>
                    Sant Mohan Singh Public School
                  </p>
                  <span className='inline-block mt-3 bg-emerald-500/20 text-emerald-100 px-3 py-1 rounded-full text-xs'>
                    2022 | 71.2%
                  </span>
                </div>
              </div>

              {/* 10th */}
              <div className='flex gap-4 items-start bg-gradient-to-r from-rose-900/80 via-rose-700/80 to-amber-600/70 p-5 rounded-xl shadow-md border border-white/10'>
                <div className='shrink-0 w-10 h-10 rounded-full bg-rose-500/90 flex items-center justify-center shadow-md'>
                  <BookOpen className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h3 className='text-white font-semibold text-lg'>
                    Secondary (10th)
                  </h3>
                  <p className='text-gray-100/90 text-sm mt-1'>
                    Sant Mohan Singh Public School
                  </p>
                  <span className='inline-block mt-3 bg-rose-500/20 text-rose-100 px-3 py-1 rounded-full text-xs'>
                    2020 | 76%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
