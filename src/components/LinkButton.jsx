import React from "react";

function LinkButton({url,children}) {
  return (
    <div className="relative rounded-xl bg-none bg-dark">
      <a href={url}
        className="relative invert-0 active:bg-key active:-left-0 -left-0.5 -top-0.5 active:-top-0 hover:-left-0.5 hover:-top-0.5 hover:bg-secondary/50 bg-primary/50 text-back flex w-200 min-h-[56px] 
      justify-center items-center rounded-xl text-sm 
      text-center px-6 py-4">
        { children }
      </a>
    </div>
  );
}

export default LinkButton;