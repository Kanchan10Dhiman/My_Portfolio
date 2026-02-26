import React from 'react'
import { Download, Award } from 'lucide-react'

export default function Button({ text }) {
  let Icon = null

  if (text === 'Download CV') {
    Icon = Download
  } else if (text === 'Certifications') {
    Icon = Award
  }

  return (
    <button
      className='h-11 w-44 rounded-full text-base text-slate-900 font-semibold px-6 inline-flex items-center justify-center gap-2
  bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]
  hover:from-cyan-300 hover:to-emerald-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)]
  hover:-translate-y-[1px] active:translate-y-[1px] transition-all duration-300'
    >
      {Icon && <Icon className='w-5 h-5' />}
      <span>{text}</span>
    </button>
  )
}
