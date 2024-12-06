"use client";

import React from 'react'

import { useState } from 'react'
import Link from 'next/link'
const page = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="p-4 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-black text-2xl font-semibold">
            Logo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/home" className="text-black hover:text-gray-300">
              Home
            </Link>
            <Link href="/properties" className="text-black hover:text-gray-300">
              Properties
            </Link>
            <Link href="/agents" className="text-black hover:text-gray-300">
              Agents
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
        <button onClick={toggleMenu} className="menu-button text-black">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition-transform duration-300 rotate-90"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>


        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-4">
          <Link href="/home" className="block text-black hover:text-gray-300 py-2">
            Home
          </Link>
          <Link href="/properties" className="block text-black hover:text-gray-300 py-2">
            Properties
          </Link>
          <Link href="/agents" className="block text-black hover:text-gray-300 py-2">
            Agents
          </Link>
          <Link href="/contact" className="block text-black hover:text-gray-300 py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default page