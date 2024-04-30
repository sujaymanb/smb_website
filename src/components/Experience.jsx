import React, { useState } from 'react'
import Panel from './AccordionPanel'
import { FadeIn } from "./FadeIn";

const data = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Epic Systems',
    location: 'Madison, WI',
    start: 'Sep 2021',
    end: 'Current',
    info:[
      'Built core infrastructure for Epic Nexus for TEFCA and enhanced scalability using Kubernetes containerization and microservices architecture',
      'Lead development of automated electronic case reporting over TEFCA',
      'Leveraged retrieval augmented generation as enhancement for LLM based note summarization tool leading to minutes saved per patient'
      ]
  },
  {
    id: 2,
    title: 'Research Assistant',
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    start: 'Oct 2019',
    end: 'Aug 2021',
    info: [
      'Developed new state-of-the-art method for dual arm cloth manipulation using an optical flow-based policy trained in simulation and transferred to real robot',
      'Improved mean error for cloth manipulation compared to previous works by >13% and published findings as part of FabricFlowNet paper in CoRL 2021',
      'Published CoRL 2020 paper on Latent Action Space for Offline Reinforcement Learning'
      ]
  },
  {
    id: 3,
    title: 'Robotics Researcher',
    company: 'University of Wisoncsin-Stout',
    location: 'Menomonie, WI',
    start: 'Jun 2018',
    end: 'Aug 2018',
    info: [
      'Leveraged face tracking, gesture commands, using Kinect depth camera for autonomous meal assistance system with robot arm',
      'Improved feeding time by 49%, reduced spilling, and improved ease of use, compared to manual joystick operation '
      ]
  },
  {
    id: 4,
    title: 'Research Assistant',
    company: 'Cleveland State University',
    location: 'Cleveland, OH',
    start: 'May 2017',
    end: 'Jun 2018',
    info: [
      'Designed dialog system with semantic parser and implemented navigation systems for mobile delivery robot',
      'Published at RSS 2018 workshop on human-robot dialog for delivery robots to improve intention estimation'
      ]
  },
  {
    id: 5,
    title: 'Computer Science Tutor',
    company: 'Cleveland State University',
    location: 'Cleveland, OH',
    start: '',
    end: 'Jun 2018',
    info: [
      'Assisted CS students with Systems Programming, Data Structures and Algorithms and Introduction to programming',
      'Organized office hours environment to promote productivity and learning',
      'Guided students with C and Java programming and debugging',
      ]
  },
];

function Experience() {
  const [jobs, setJobs] = useState(data);

  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className='info'>
        {jobs.map((job) => (
          <Panel key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Experience