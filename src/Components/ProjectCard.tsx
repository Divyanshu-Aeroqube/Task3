import React from 'react'
type Props={
    imag:string,
    desc:string,
}
const ProjectCard = ({imag,desc}:Props) => {
  return (
    <>
              <div className="bg-white shadow-lg rounded-lg text-center relative">
            <img
              src={imag}
              alt="house"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-small">
              {desc}
            </p>
          </div>
      
    </>
  )
}

export default ProjectCard
