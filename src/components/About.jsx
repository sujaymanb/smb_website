import React from "react";
import Container from "./Container";
import Experience from "./Experience";
import { FadeIn } from "./FadeIn";
import Education from "./Education";
import Skills from "./Skills";

function About() {
  return (
    <Container id="about">
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 max-mdd:max-w-none max-md:p-8">
          <h3 className="font-typewriter">
            about {" "}<span className="text-brand">{" "}me</span>
          </h3>
        </div>
      </FadeIn>
      <Experience />
      <Education />
      <Skills />
    </Container>
  );
}

export default About;
