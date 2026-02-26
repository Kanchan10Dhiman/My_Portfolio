import React from 'react'
import { Link } from 'react-router-dom'
import { Home, User, Code2, FolderKanban, Mail } from 'lucide-react'
// import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-gray-800 via-emerald-950 to-gray-800
 border-b border-white h-14 flex justify-between'>
      <div className=''>
        {/* <img src={logo} alt="logo" className='h-3 w-6' /> */}
        <h1 className='text-2xl text-white font-serif p-3 pl-28 '>Kanchan Dhiman</h1>
      </div>
      <nav className='text-white p-3 pr-32 flex gap-10 text-xl font-serif items-center'>
        <Link to="/" className="flex items-center gap-2 flex items-center gap-2  hover:underline decoration-emerald-400 underline-offset-4 transition-all duration-200"><Home size={20} />Home</Link>
        <Link to="/about" className="flex items-center gap-2  hover:underline decoration-emerald-400 underline-offset-4 transition-all duration-200"><User size={20} />About</Link>
        <Link to="/skills" className="flex items-center gap-2 hover:underline decoration-emerald-400 underline-offset-4 transition-all duration-200"><Code2 size={20} />Skills</Link>
        <Link to="/projects" className="flex items-center gap-2 hover:underline decoration-emerald-400 underline-offset-4 transition-all duration-200"><FolderKanban size={20} />Projects</Link>
        <Link to="/contact" className="flex items-center gap-2 hover:underline decoration-emerald-400 underline-offset-4 transition-all duration-200"><Mail size={20} />Contact</Link>
      </nav>

    </header >
  )
}
