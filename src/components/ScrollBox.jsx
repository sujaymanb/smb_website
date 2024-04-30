import React from "react";

function ScrollBox({size, children}) {
  const sizeVariants = {
    sm: 'overflow-y-auto overscroll-contain max-h-48',
    lg: 'overflow-y-auto overscroll-contain max-h-72',
  }

  return (
      <div className="my-4">
        <div className={`${sizeVariants[size]} ...`}>
          <div className="text-justify">
          { children }
          </div>
        </div>
      </div>
      
  );
};

export default ScrollBox;