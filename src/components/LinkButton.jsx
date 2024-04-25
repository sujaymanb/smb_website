import React from "react";

function LinkButton({url,children}) {
  return (
    <div className="relative">
      <a href={url}
        className="underline transition-150 transition-[background-color] active:bg-key hover:bg-secondary/50 text-primary flex text-sm text-center py-2 px-6">
        { children }
      </a>
    </div>
  );
}

export default LinkButton;