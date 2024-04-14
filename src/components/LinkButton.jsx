import React from "react";

function LinkButton({url,children}) {
  return (
    <div className="relative rounded-xl bg-none bg-black">
      <a href={url}
        className="relative invert-0 active:bg-black active:-left-0 -left-1 -top-1 active:-top-0 hover:-left-0.5 hover:-top-0.5 hover:bg-zinc-400/50 bg-zinc-700/50 text-white flex w-200 min-h-[56px] 
      justify-center items-center rounded-xl text-sm 
      text-center px-6 py-4">
        { children }
      </a>
    </div>
  );
}

export default LinkButton;