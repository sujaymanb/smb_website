import React from "react";
import { LinkedInIcon,GithubIcon,ArchiveIcon,EyeIcon,NoteIcon } from "./Icons";

const socialData = [
  {
    icon: <LinkedInIcon/>,
    name: "linkedin",
    link: "https://www.linkedin.com/in/sujay-bajracharya/"
  },
  {
    icon: <GithubIcon/>,
    name: "github",
    link: "https://github.com/sujaymanb",
  },
  {
    icon: <ArchiveIcon/>,
    name: "arxiv",
    link: "https://arxiv.org/search/cs?searchtype=author&query=Bajracharya,+S",
  },
  {
    icon: <NoteIcon/>,
    name: "resume",
    link: "#",
  },
  {
    icon: <EyeIcon/>,
    name: "i n s i g h t",
    link: "#",
  }
];

function Socials() {
  return (
    <div className="overflow-hidden justify-center my-4 max-md:grid max-md:auto-cols-[1fr] max-md:gap-x-2 max-md:gap-y-2 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
      {socialData.map((social) => (
        <div className="">
          <div>
            <a href={social.link}
              className="px-2 hover:bg-brand hover:text-back text-primary flex items-center transition-[background-color] duration-150 ease-[ease-out] text-lg text-center">
              <div>{social.icon}</div>
              <div className="text-center px-2">{social.name}</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socials;
