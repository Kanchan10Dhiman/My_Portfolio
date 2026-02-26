import React from 'react'
import {
  FileCode,
  Palette,
  GitBranch,
  Github,
  Code2,
  Braces,
  Zap,
  Atom,
} from 'lucide-react'

const NODE_LOGO = 'https://nodejs.org/static/images/logo.svg'

const skills = [
  { name: 'HTML', icon: FileCode, color: 'text-orange-400' },
  { name: 'CSS', icon: Palette, color: 'text-blue-400' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
  { name: 'GitHub', icon: Github, color: 'text-gray-100' },
  { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
  { name: 'C++', icon: Braces, color: 'text-cyan-400' },
  { name: 'Node.js', icon: null, color: 'text-green-500', logoUrl: NODE_LOGO },
  { name: 'Express.js', icon: Zap, color: 'text-gray-300' },
  { name: 'React.js', icon: Atom, color: 'text-cyan-300' },
]

export default function SkillsPage() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-gray-800 via-emerald-950 to-gray-800'>
      <div className='p-24'>
        <h1 className='text-5xl font-bold text-white font-serif mb-4'>
          Skills
        </h1>
        <p className='text-emerald-200/90 text-lg font-serif mb-16 max-w-xl'>
          Technologies and tools I work with to build web applications and solve problems.
        </p>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {skills.map(({ name, icon: Icon, color, logoUrl }) => (
            <div
              key={name}
              className='flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-300 group'
            >
              <div
                className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center ${color}`}
              >
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={name}
                    className='h-10 w-10 object-contain'
                  />
                ) : Icon ? (
                  <Icon size={40} strokeWidth={1.5} />
                ) : null}
              </div>
              <span className='text-white font-serif text-lg font-medium'>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
