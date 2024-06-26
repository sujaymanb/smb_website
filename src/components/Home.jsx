import React from "react";
import Container from "./Container";
import headshot from "../assets/sujay_p.svg";
import eye from "../assets/eye.svg";
import sphere from "../assets/GradientSphere.svg"
import { LinkIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-8 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] mt-8">        
          <div className="relative overflow-hidden flex w-full max-w-[746px] px-12 py-10 max-mdd:max-w-none max-md:p-8 text-secondary bg-gradient-to-bl from-bggradst/50 from-10% to-bggradend/30 to-90%"> 
            <div>
              <img
                src={sphere}
                alt="sujay m b"
                className="overflow-hidden w-[108px] h-[108px] mb-4"
              />
              <h1 className="font-typewriter">
                  <span className="text-brand text-[48px]">SUJAY M B</span><br/>
                  <span>ROBOTICS</span><br/>
                  <span>MACHINE LEARNING</span><br/>
                  <span>EMBODIED AI</span><br/>
                  {" "}
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 text-primary text-center p-12 max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <LinkIcon className="w-[200px] h-[200px] flex-[0_0_auto]" />
              <h1 className="max-md:text-[20px] max-md:leading-[48px]">
              let's connect
              </h1>
              <h2 className="max-md:text-[20px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Reach out to me.
              </h2>
              <span className="text-secondary">
                {" "}
                learn more...
              </span>
            </div>
            <a
              href="mailto:sujaymanb@gmail.com"
              className="bg-dark border-2 border-dark min-h-[64px] transition-[background-color] hover:bg-key hover:text-primary text-back duration-300 ease-[ease-out] text-[20px] leading-[28px] font-medium text-center p-4 max-md:min-h-[80px] max-md:text-2xl max-md:leading-8"
            >
              sujaymanb@gmail.com
              {<span className=" animate-pulse">👾</span>}
            </a>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <Socials />
      </FadeIn>
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 px-12 py-10 max-mdd:max-w-none max-md:p-8">
          <h3 className="font-typewriter">
            explore {" "}
            <span className="text-brand">
              {" "}
              projects
            </span>
          </h3>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Home;
