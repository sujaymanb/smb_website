import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function List(info) {
  const listItems = info.map(item =>
    <li>{item}</li>
  );
  return <ul className="list-disc list-inside">{listItems}</ul>;
}

const AccordionPanel = ({ title, company, location, start, end, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='border-b-2 border-primary rounded-md p-2 bg-secondary/10 shadow-md my-4'>
      <div className="flex">
        <div onClick={() => setExpanded(!expanded)} className="basis-1/2 shrink">
          <h2>{company}</h2>
          <p>{title}</p>
        </div>
        <div className="grow min-w-100 basis-1/4 px-2">
          <div className="text-right">{start} - {end}</div>
          <div className="text-right">{location}</div>
        </div>
        <button className='flex-none rounded-full p-2' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {expanded && <p>{List(info)}</p>}
    </div>
  )
}

export default AccordionPanel