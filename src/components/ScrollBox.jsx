import React from "react";

function ScrollBox({size, children}) {
  const sizeVariants = {
    sm: 'overflow-y-auto overscroll-contain max-h-48',
    lg: 'overflow-y-auto overscroll-contain max-h-72',
  }

  return (
      <div className="shadow-xl rounded-2xl p-6 my-6 bg-zinc-300/10 -hue-rotate-90">
        <div className={`${sizeVariants[size]} ...`}>
          <div className="oldstyle-nums">
          { children }
          </div>
        </div>
      </div>
      
  );
};

export default ScrollBox;