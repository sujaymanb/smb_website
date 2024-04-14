import React from "react";
import Container from "./Container";
import robot from "../assets/robot_arm_wireframe.webp";
import headshot from "../assets/sujay_p.svg";
import { LinkIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";

function Home() {
  return (
    <Container id="home">
      <FadeIn>
        <div className="grid gap-x-8 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] mt-8">
          <div className="flex w-full max-w-[746px] border-2 rounded-md border-black px-12 py-10 max-mdd:max-w-none max-md:p-8 bg-gradient-to-r from-indigo-400/50 from-10% via-emerald-300/50 via-50% to-fuchsia-200/50 to-90%">
            <div className="basis-3/4 grow">
              <img
                src={robot}
                alt="sujay m b"
                className="rounded-md overflow-hidden w-[108px] h-[108px] mb-4"
              />
              <h1 className="max-md:text-[20px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                  <span className="tracking-[0.18em] text-[#e4ff1a] text-[48px] max-md:text-[30px]">SUJAY M B</span><br/>
                  <span className="tracking-[0.77em]">ROBOTICS</span><br/>
                  <span className="tracking-[0.04em]">MACHINE LEARNING</span><br/>
                  <span className="tracking-[0.36em]">EMBODIED AI</span><br/>
                  {" "}
              </h1>
            </div>
            <div className="basis-1/4 shrink">
              <img
              src={headshot}
              alt="sujay m b"
              className="w-max-[150px] h-max-[150px] rounded-md border-2 border-black overflow-hidden"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 rounded-md border-2 border-black text-center p-12 max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <LinkIcon className="w-[200px] h-[200px] flex-[0_0_auto]" />
              <h1 className="max-md:text-[20px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              let's connect
              </h1>
              <h2 className="max-md:text-[20px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                Reach out to me.
              </h2>
              <span className="text-[#8a8a93]">
                {" "}
                learn more...
              </span>
            </div>
            <a
              href="mailto:sujaymanb@gmail.com"
              className="min-h-[64px] border-black border-2 rounded-lg transition-[background-color] hover:bg-zinc-300 hover:text-black bg-black text-white duration-300 ease-[ease-out] text-[20px] leading-[28px] font-medium text-center px-8 py-6 max-md:min-h-[80px] max-md:text-2xl max-md:leading-8"
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
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            explore {" "}
            <span className="text-[#8a8a93]">
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
