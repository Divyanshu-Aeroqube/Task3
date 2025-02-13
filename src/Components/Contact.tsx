import React from 'react'
import map from '../assets/map.jpg'
const Contact = () => {
  return (
    <>
                <section id="Contact" className="scroll-mt-16">
            <h2 className="mt-5 mb-2 font-bold ml-2 text-xl">Contact</h2>
            <hr className="border-gray-300"/>
            <p className="m-3">Let's get in touch and talk about your next project</p>
            <form action="" className="flex flex-col mx-3 gap-4">
                <input className="w-full p-1 border-1 border-gray-400" type="text" name="" id="" placeholder="Name"/>
                <input className="w-full p-1 border-1 border-gray-400" type="text" placeholder="Email"/>
                <input className="w-full p-1 border-1 border-gray-400" type="text" placeholder="Subject"/>
                <input className="w-full p-1 border-1 border-gray-400" type="text" name="" id="" placeholder="Comment"/>
                <button className="bg-black text-white w-fit p-1 mt-3 mb-5">SEND MESSAGE</button>
            </form>
        </section> 
        <section>
            <img className="w-full px-2" src={map} alt="map"/>
        </section>
      
    </>
  )
}

export default Contact

