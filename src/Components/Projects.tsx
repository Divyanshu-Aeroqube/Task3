import React from 'react';
import house1 from '../assets/house2.jpg';
import house2 from '../assets/house3.jpg';
import house3 from '../assets/house4.jpg';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
          image: house1,
          description: 'Renovated House 1',
        },
        {
          image: house1,
          description: 'Modern Apartment',
        },
        {
          image: house2,
          description: 'Beach House',
        },
        {
          image: house3,
          description: 'Mountain Retreat',
        },
        {
          image: house1,
          description: 'Modern Apartment',
        },
        {
          image: house2,
          description: 'Beach House',
        },
        {
          image: house3,
          description: 'Mountain Retreat',
        },
        {
          image: house3,
          description: 'Mountain Retreat',
        },
      ];
  return (
    <>
      <section id="Projects" className="scroll-mt-16">
        <h2 className="mt-5 mb-2 font-bold ml-2 text-xl scroll-mt-16">Projects</h2>
        <hr className="border-gray-300" />

        <div
          id="project_container"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
        >
            {projects.map((card,index)=>(
                <ProjectCard key={index} imag={card.image} desc={card.description}/>
            ))}
          
        </div>
      </section>
    </>
  );
};

export default Projects;
