import React from 'react'

const Navbar = () => {
  return (
    <div>
          <header className="nav flex justify-between items-center fixed w-full h-2 bg-white shadow-lg shadow-gray-500/50 p-6 z-10">
        <h5><span className="font-bold">BR</span> Architacts</h5>
        <section className="flex justify-around gap-10 sm:block hidden">
            <a href="#Projects" className="hover:bg-gray-200 p-2">Projects</a>
            <a href="#About" className="hover:bg-gray-200 p-2">About</a>
            <a href="#Contact" className="hover:bg-gray-200 p-2">Contacts</a>
        </section>
    </header>
    </div>
  )
}

export default Navbar
