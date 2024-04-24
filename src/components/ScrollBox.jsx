import React from "react";

function ScrollBox({size, children}) {
  const sizeVariants = {
    sm: 'overflow-y-auto overscroll-contain max-h-48',
    lg: 'overflow-y-auto overscroll-contain max-h-72',
  }

  return (
      <div className="my-4 border-b-2 border-primary rounded-2xl p-6 bg-secondary/10">
        <div className={`${sizeVariants[size]} ...`}>
          <div className="oldstyle-nums">
          { children }
          </div>
        </div>
      </div>
      
  );
};

export default ScrollBox;