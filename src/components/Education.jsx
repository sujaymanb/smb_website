import React, { useState } from 'react'
import Panel from './AccordionPanel'
import { FadeIn } from "./FadeIn";

const data = [
  {
    id: 1,
    title: 'Master of Science in Robotics',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    start: 'Grad',
    end: 'Aug 2021',
    info:[
      ''
      ]
  },
  {
    id: 2,
    title: 'Bachelor of Science in Computer Science',
    company: 'Cleveland State University',
    location: 'Cleveland, OH',
    start: 'Grad',
    end: 'May 2019',
    info: [
      ''
      ]
  },
];

function Education() {
  const [schools, setJobs] = useState(data);

  return (
    <div id="education">
      <h1>Education</h1>
      <div className='info'>
        {schools.map((school) => (
          <Panel key={school.id} {...school} />
        ))}
      </div>
    </div>
  );
};

export default Education