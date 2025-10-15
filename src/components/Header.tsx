'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isTesteGratis = pathname === '/testegratis';

  return (
    <header className="bg-black/95 backdrop-blur-sm shadow-sm border-b border-green-500/20 fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg leading-none">MA</span>
                </div>
                <div className="text-xl font-bold text-white">
                  Marcelo <span className="text-green-400">Ayub</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isTesteGratis && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-green-400 font-medium transition-colors">Home</Link>
              <Link href="#portfolio" className="text-gray-300 hover:text-green-400 font-medium transition-colors">Projetos</Link>
              <Link href="/#about" className="text-gray-300 hover:text-green-400 font-medium transition-colors">Sobre</Link>
              <Link href="#formulario-contato" className="text-gray-300 hover:text-green-400 font-medium transition-colors">Contato</Link>
              <Link href="/curriculo" className="text-gray-300 hover:text-green-400 font-medium transition-colors">Currículo</Link>
            </nav>
          )}

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isTesteGratis && (
              <>
                <Link 
                  href="https://www.linkedin.com/in/seu-perfil" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 font-medium transition-colors"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="https://github.com/seu-usuario" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 font-medium transition-colors"
                >
                  GitHub
                </Link>
                <Link 
                  href="#formulario-contato" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                >
                  Entrar em Contato
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
              {!isTesteGratis && <>
                <Link href="/" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#portfolio" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
                <Link href="/#about" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
                <Link href="#formulario-contato" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Contato</Link>
                <Link href="/curriculo" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Currículo</Link>
              </>}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 