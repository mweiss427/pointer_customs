import React from 'react';
import houseProject from '../images/houseProject.jpg';
import garageCabnets from '../images/garageCabnets.jpg';
import trimWork from '../images/trimWork.jpg';
import deck from '../images/deck.jpg';
import customBar from '../images/customBar.jpg';

function About() {
  const projects = [
    {
      image: houseProject,
      title: 'House Project',
      description: 'A much needed door and siding update for this home along with a nice window size increase to brighten things up inside and bring a more inviting look to the front of the house.',
    },
    {
      image: garageCabnets,
      title: 'Garage Cabinets',
      description: "Bringing some style and function to a customer's shop/man cave with this one.  Custom benchtop made from salvaged bowling alley lanes, new corrugated steel backsplash and some nice bright task lighting.",
    },
    {
      image: trimWork,
      title: 'Trim Work',
      description: "Here's a little something different for those who appreciate some rustic vintage charm. The customer had salvaged these neat vintage head casings which were just the right size to finish off the top of their new windows in their entry porch.",
    },
    {
      image: deck,
      title: 'Deck',
      description: "This client was looking to revive their back deck. Re-decked with TREX Maintenance-Free Composite Decking, complimented with a TREX Railing system and a rebuilt staircase. I imagine lots of summer afternoons and evenings enjoyed out here.",
    },
    {
      image: customBar,
      title: 'Custom Bar',
      description: 'Custom made bar for a barn wedding. The bar was made from reclaimed barn wood. The bar was finished with a clear coat to protect the wood and give it a nice shine.',
    },
  ];

  return (
    <div id="about-me">
      <h2>About Me</h2>
      <p>
        I started by going to school for enginnering and then decided to go into the trades. I have been in the trades for 10 years, now I've gone off on my own and started my own business. I have a passion for building and creating things. I love to see the finished product and the satisfaction of a job well done.
      </p>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
