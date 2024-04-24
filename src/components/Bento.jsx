import React from "react";
import Container from "./Container";

function Bento({children}) {
  return (
    <div className="relative flex w-full border-2 border-t-2 border-b-4 border-primary flex-col items-start rounded-md bg-secondary/20 p-6 max-mdd:max-w-none max-md:p-8">
      { children }
    </div>
  );
}

export default Bento;