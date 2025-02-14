import React from 'react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team4.jpg';
import AboutCard from './AboutCard';

const About = () => {
    const teamMembers = [
        {
          image: team1,
          name: 'John Doe',
          role: 'CEO & Founder',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. abore minima? Soluta possimus unde officia ut!',
          contactText: 'Contact',
        },
        {
          image: team2,
          name: 'Jane Smith',
          role: 'CTO',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. abore minima? Soluta possimus unde officia ut!',
          contactText: 'Contact',
        },
        {
          image: team3,
          name: 'Mark Johnson',
          role: 'Lead Developer',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. abore minima? Soluta possimus unde officia ut!',
          contactText: 'Contact',
        },
        {
          image: team2,
          name: 'Jane Smith',
          role: 'CTO',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. abore minima? Soluta possimus unde officia ut!',
          contactText: 'Contact',
        },
      ];
  return (

      <section id="About" className="scroll-mt-16">
        <h2 className="mt-5 mb-2 font-bold ml-2 text-xl">About</h2>
        <hr className="border-gray-300" />
        <p className="text-l my-15 mx-2">
          Lorem ipsum dolor officia neque perferendis modi tempore similique pariatur commodi doloremque labore deserunt perspiciatis. Quibusdam veniam, perspiciatis laborum optio nesciunt recusandae beatae! Reiciendis debitis magnam porro cum alias. Quas exercitationem eaque doloribus excepturi rem sint repellendus ullam ut laboriosam in. Autem, velit laboriosam dicta veritatis harum ipsam facere quis sequi veniam labore inventore suscipit impedit. Ex, alias dolor asperiores, excepturi voluptate impedit.
        </p>

        <div className="About_cardContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
       { teamMembers.map((card,index)=>(
            <AboutCard
             key={index} 
             imag={card.image} 
             name={card.name} 
             desc={card.description} 
             pos={card.role}/>
        ))}
        </div>
      </section>
    
  );
}

export default About;

