import React from 'react'
import architect from '../assets/architect.jpg'
const LandingPage = () => {
  return (
    <>
            <section className="landing_image">
            <img src={architect} alt="architect" className="w-full h-full object-cover"/>
            <h1 className="absolute inset-7 flex items-center justify-center text-white gap-1 text-2xl">
                <span className="font-bold bg-[rgba(0,0,0,0.5)] m-2 p-2 text-2xl">BR</span> Architacts
            </h1>
        </section>
    </>
  )
}

export default LandingPage
