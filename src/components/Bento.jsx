import React from "react";
import Container from "./Container";

function Bento({children}) {
  return (
    <div className="border-secondary/10 rounded-[50px] p-8 relative flex w-full flex-col items-start p-4 max-mdd:max-w-none max-md:p-4">
      { children }
    </div>
  );
}

export default Bento;