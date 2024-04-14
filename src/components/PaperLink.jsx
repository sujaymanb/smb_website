import React from "react";
import { PaperIcon } from "./Icons";

function PaperLink({url,cite}) {
  return (
    <div className="flex justify-center py-6">
    <a
      href={url}
      className="invert-0 hover:invert bg-black text-white flex w-200 min-h-[56px] justify-center items-center rounded-lg transition-[background-color] duration-300 ease-[ease-out] text-sm leading-6 text-center tracking-[-0.01em] px-6 py-4"
    >
      <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto]" />{cite}
    </a>
    </div>
  );
}

export default PaperLink;