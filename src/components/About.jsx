import React from "react";
import Container from "./Container";
import Experience from "./Experience";
import { FadeIn } from "./FadeIn";
import Education from "./Education"

function About() {
  return (
    <Container id="about">
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            about {" "}<span className="text-[#8a8a93]">{" "}me</span>
          </h3>
        </div>
      </FadeIn>
      <Experience />
      <Education />
    </Container>
  );
}

export default About;
