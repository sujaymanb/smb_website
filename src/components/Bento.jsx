import React from "react";
import Container from "./Container";
import { PaperIcon, ProjectIcon, VideoIcon } from "./Icons";

const icon = {
  "paper": <PaperIcon />,
  "project": <ProjectIcon />,
  "video": <VideoIcon />,
}

function Bento({image, title, text, topic, children}) {
  return (
    <div className="relative flex w-full flex-col items-start border-2 rounded-md border-black p-6 max-mdd:max-w-none max-md:p-8">
      {image ? <img src={image.src} alt="alt text" className="rounded-sm overflow-hidden w-[108px] h-[108px] flex-[0_0_auto]"/> : null}
      {title ? <h1 className="max-md:text-[40px] max-md:leading-[48px] text-[#c2ffff]">
        {title}
      </h1> : null}
        {text ? <p>{text}</p> : null}
      <div>
        { children }
      </div>
      <div className="absolute top-2 right-2">
        {icon[topic]}
      </div>
    </div>
  );
}

export default Bento;