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
    <div className='border-b-2 border-l-2 border-l-primary border-back hover:border-primary p-2 my-4'>
      <div className="flex">
        <div onClick={() => setExpanded(!expanded)} className="basis-1/2 shrink text-sm">
          <h2>{company}</h2>
          {title}
        </div>
        <div className="grow min-w-100 basis-1/4 px-2 text-sm">
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