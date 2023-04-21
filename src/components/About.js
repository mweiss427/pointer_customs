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
description: 'A much needed door and siding update for this residential home, enhancing curb appeal with a modern look. We increased window size for improved natural lighting and energy efficiency, perfect for home renovation enthusiasts.',
},
{
image: garageCabnets,
title: 'Garage Cabinets',
description: "Transforming a client's shop/man cave with stylish and functional garage cabinets. Custom benchtop made from upcycled bowling alley lanes, corrugated steel backsplash, and bright task lighting creates an organized workspace for DIY enthusiasts.",
},
{
image: trimWork,
title: 'Trim Work',
description: "Showcasing unique rustic vintage charm with custom trim work for window renovation projects. The client provided salvaged vintage head casings, which perfectly fit the new windows in their entry porch, highlighting the beauty of repurposed materials.",
},
{
image: deck,
title: 'Deck',
description: "Reviving a client's outdoor living space with a low-maintenance TREX Composite Deck, TREX Railing system, and rebuilt staircase. This deck renovation is perfect for homeowners looking to enhance their backyard for relaxation and entertainment.",
},
{
image: customBar,
title: 'Custom Bar',
description: 'A bespoke bar crafted from reclaimed barn wood for a rustic barn wedding. The custom bar, finished with a clear protective coat, adds a touch of elegance and sustainability for eco-conscious event planners and clients.',
},
];

return (
<div id="about-me">
<h2>About Us</h2>
<p>
We started by going to school for engineering and then decided to go into the trades. Now I've gone off on my own and started my own business. I have a passion for building and creating things. I love to see the finished product and the satisfaction of a job well done.
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