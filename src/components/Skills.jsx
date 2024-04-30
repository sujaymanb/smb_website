import React, { useState } from 'react'
import Panel from './AccordionPanel'
import { FadeIn } from "./FadeIn";

const data = [
  {
    id: 1,
    company: 'Programming Languages',
    title: '',
    info:['Python','C++','C#','Java'],
    location: '',
    start: '',
    end: '',
  },
  {
    id: 2,
    company: 'Machine Learning',
    title: 'Supervised Learning, Reinforcement Learning, Finetuning, GAN, LLM, RAG',
    info:['PyTorch','TensorFlow','HuggingFace','Langchain'],
    location: '',
    start: '',
    end: '',
  },
  {
    id: 4,
    company: 'Robotics',
    title: 'Manipulation, sim-to-real, Planning, SLAM',
    info: ['ROS','Gazebo'],
    location: '',
    start: '',
    end: '',
  },
  {
    id: 3,
    company: 'Cloud and Ops',
    info: ['AWS','EC2','Azure','slurm','docker','Kubernetes'],
    title: '',
    location: '',
    start: '',
    end: '',
  },
  {
    id: 5,
    company: 'Full Stack Web Development',
    info: ['ASP.NET','SQL','node','React','HTML','Tailwind-CSS','CSS'],
    title: '',
    location: '',
    start: '',
    end: '',
  },
  {
    id: 6,
    title: '',
    company: 'Other',
    location: '',
    start: '',
    end: '',
    info: ['git','LaTeX','MATLAB']
  },
];

function Skills() {
  const [skills, setskills] = useState(data);

  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className='info'>
        {skills.map((skill) => (
          <Panel key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills