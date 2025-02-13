import React from 'react'
type Props={
    imag:string,
    name:string,
    pos:string,
    desc:string
}
const AboutCard = ({imag,name,pos,desc}:Props) => {
  return (
              <div className="abouCard bg-white shadow-lg rounded-lg text-center p-4">
            <img src={imag} alt="John Doe" className="w-full h-40 object-cover" />
            <h3 className="font-bold text-xl">{name}</h3>
            <h5 className="text-l">{pos}</h5>
            <p>{desc}</p>
            <div className="w-full bg-gray-400 py-1 px-3 text-center mt-3">Contact</div>
          </div>

  )
}

export default AboutCard
