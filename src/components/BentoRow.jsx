import React from "react";
import Container from "./Container";
import Bento from "./Bento";

function BentoRow(Bentos) {
  return (

<FadeIn>
<div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">
  {Bentos}
</div>
</FadeIn>

}

export default BentoRow;