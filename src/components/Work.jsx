import React from "react";
import Container from "./Container";
import Bento from "./Bento"
import VideoFrame from "./VideoFrame";
import ScrollBox from "./ScrollBox";
import PaperLink from "./PaperLink";
import { FadeIn } from "./FadeIn";
import { PaperIcon } from "./Icons";
import goal1 from "../assets/tshirt-goal-1.png";
import ach1 from "../assets/tshirt-ach-1.png";
import goal2 from "../assets/t-shirt-goal-2.png";
import ach2 from "../assets/t-shirt-ach-2.png";
import plas from "../assets/plas.png";
import LinkButton from "./LinkButton";
import Experience from "./Experience";

function Work() {
  return (
    <Container id="work">
      <FadeIn>
        <div className="grid gap-2 grid-cols-[60fr_40fr] max-mdd:grid-cols-1 grid-rows-auto my-8">
          <Bento title="FabricFlowNet" topic="paper">
            <div>
              <h2 className="text-emerald-100">Bimanual Cloth Manipulation with a Flow-based Policy</h2>
              <ScrollBox size="sm">
                <p>
                  A method for goal-directed cloth manipulation, a challenging task due to 
                  the deformability of cloth. The key insight of this work is that optical 
                  flow, a technique normally used for motion estimation in video, can also 
                  provide an effective representation for corresponding cloth poses across 
                  observation and goal images. We introduce FabricFlowNet (FFN), a cloth 
                  manipulation policy that leverages flow as both an input and as an 
                  action representation to improve performance. FabricFlowNet also 
                  elegantly switches between dual-arm and single-arm actions based on the 
                  desired goal. 

                  FabricFlowNet significantly outperforms state-of-the-art model-free and 
                  model-based cloth manipulation policies. The real-world experiments on 
                  a bimanual system demonstrate effective sim-to-real transfer.  The 
                  method generalizes when trained on a single square cloth to other cloth 
                  shapes, such as T-shirts and rectangular cloths.
                </p>
              </ScrollBox>
            </div>
            <div className="flex justify-center py-6 space-x-6">
              <LinkButton url="https://sites.google.com/view/fabricflownet">
                FabricFlowNet site
              </LinkButton>
              <LinkButton url="https://arxiv.org/abs/2111.05623">
                <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto]" />
                arXiv:2111.05623 [cs.RO]
              </LinkButton>
            </div>
          </Bento>
          <div className="grid gap-2 grid-cols-auto grid-rows-2">
            <Bento topic="video">
              <div className="border-2 rounded-lg overflow-hidden border-black grid grid-rows-1 grid-flow-col gap-2">
                <div className="space-y-2">
                  <div className="relative">
                    <img className="overflow-hidden h-[80px] flex-[0_0_auto]" src={goal1} alt="goal 1"/>
                    <div className="absolute top-0 left-2 text-sm">goal</div>
                  </div>
                  <div className="relative">
                    <img className="overflow-hidden h-[80px] flex-[0_0_auto]" src={ach1} alt="achieved 1" caption="achieved"/>
                    <div className="absolute top-0 left-2 text-sm">achieved</div>
                  </div>
                </div>
                <div className="self-center">
                  <VideoFrame url="https://drive.google.com/file/d/1K40LCAouyMbS47gyc8ljzUABt8tJoa4o/preview"/>
                </div>
              </div>
            </Bento>
            <Bento topic="video">
              <div className="border-2 rounded-lg overflow-hidden border-black grid grid-rows-1 grid-flow-col gap-2">
                <div className="space-y-2">
                  <div className="relative">
                    <img className="overflow-hidden h-[80px] flex-[0_0_auto]" src={goal2} alt="goal 2"/>
                    <div className="absolute top-0 left-2 text-sm">goal</div>
                  </div>
                  <div className="relative">
                    <img className="overflow-hidden h-[80px] flex-[0_0_auto]" src={ach2} alt="achieved 2" caption="achieved"/>
                    <div className="absolute top-0 left-2 text-sm">achieved</div>
                  </div>
                </div>
                <div className="self-center">
                  <VideoFrame url="https://drive.google.com/file/d/1A5_5rU9MqVwg932cbd2nyxm6HBqcmFcD/preview"/>
                </div>
              </div>
            </Bento>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-[0.5fr_0.5fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-8">
          <Bento title="PLAS" topic="paper">
            <h2 className="text-emerald-100">Latent Action Space for Offline Reinforcement Learning</h2>
            <div>
              <img className="rounded-sm my-2 border-2 border-black" src={plas} alt="PLAS overview"/>
            </div>
            <ScrollBox size="sm">
              <p>
              The goal of offline reinforcement learning is to learn a policy from
              a fixed dataset, without further interactions with the environment. 
              This setting will be an increasingly more important paradigm for real-world 
              applications of reinforcement learning such as robotics, in which data 
              collection is slow and potentially dangerous. Existing off-policy algorithms 
              have limited performance on static datasets due to extrapolation errors from 
              out-of-distribution actions. This leads to the challenge of constraining the 
              policy to select actions within the support of the dataset during training. 
              We propose to simply learn the Policy in the Latent Action Space (PLAS) such 
              that this requirement is naturally satisfied. We evaluate our method on 
              continuous control benchmarks in simulation and a deformable object 
              manipulation task with a physical robot. We demonstrate that our method 
              provides competitive performance consistently across various continuous 
              control tasks and different types of datasets, outperforming existing offline
              reinforcement learning methods with explicit constraints
              </p>
            </ScrollBox>
          <div className="flex justify-center py-6 space-x-6">
            <LinkButton url="https://sites.google.com/view/latent-policy">
              PLAS site
            </LinkButton>
            <LinkButton url="https://arxiv.org/abs/2011.07213">
              <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto]" />
              arXiv:2011.07213 [cs.RO]
            </LinkButton>
          </div>
          </Bento>
          <Bento title="Learning cloth sliding using tactile sensing" topic="project">
            <ScrollBox size="sm">
              <p>
              In previous works, tactile sensing has been mainly used in manipulation to get 
              some information about the material of the object that is being manipulated, 
              in order to, for example, prevent slip and improve the quality of the grasp. 
              Humans can leverage tactile information for other dexterous manipulation tasks 
              like manipulating an object without relying on vision using sliding. 
              Comparing to different modalities of perception, tactile sensing has some 
              advantages over vision. It provides location and geometry information of the 
              cloth portion being grasped, which would be otherwise occluded when relying on 
              vision only. Tactile sensors can provide undisturbed information about the 
              status of the current grasp. Possible applications of learning skills such as 
              sliding are: cloth folding, rope manipulation, etc.
              </p>
              <p>
              We are using a sawyer equipped with a WSG 32 gripper w/ WSG DSA tactile 
              sensor fingers. The task that we are trying to do is this: One point of the 
              cloth is fixed, the gripper grasps the cloth edge near this point and slides 
              to get to the end of the cloth. The policy is trained on real robot using TD3.
              </p>
            </ScrollBox>
            <div className="overflow-hidden rounded-md">
              <VideoFrame url="https://www.youtube.com/embed/BCk0LQ08qsQ"/>
            </div>
          </Bento>
        </div>
        <div className="grid gap-2 grid-cols-[0.40fr_0.60fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-8">
          <Bento
            title="Delivery Robot" topic="paper">
            <h2 className="text-emerald-100">Augmenting Knowledge through Statistical, Goal-oriented Human-Robot Dialog</h2>
            <ScrollBox size="sm">
            <p>
              Some robots can interact with humans using natural language, and identify 
              service requests through human-robot dialog. We develop a dialog agent for 
              robots that is able to interpret user commands using a semantic parser, 
              while asking clarification questions using a probabilistic dialog manager. 
              This dialog agent is able to augment its language capabilities by adding 
              new entities and learning new ways of referring to existing entities. We 
              extensively evaluated our dialog system in simulation as well as with 
              human participants through MTurk and real-robot platforms. 
            </p>
            </ScrollBox>
            <div className="overflow-hidden rounded-md">
              <VideoFrame url="https://www.youtube.com/embed/DFB3jbHBqYE"/>
            </div>
            <div className="flex justify-center my-4">
              <LinkButton url="https://arxiv.org/abs/1907.03390">
                <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto]" />
                arXiv:1907.03390 [cs.RO]
              </LinkButton>
            </div>
          </Bento>
          <div className="grid gap-2 grid-cols-auto grid-rows-2">
            <Bento title="Autonomous Meal Assistance Robot" topic="project">
              <div className="flex flex-row items-center space-x-2">
                <div className="shrink basis-1/2">
                  <ScrollBox size="sm">
                    <p>
                      Robotic arms used for meal assistance can help improve autonomy and quality 
                      of life for people with disabilites. However, controlling such a system is 
                      often  difficult for individuals with upper-body disabilities. We created 
                      a meal assistance robot capable of navigating to and from a user’s mouth 
                      and a bowl of food through the use of landmarks and facial tracking. The 
                      system can be controlled with both facial gestures and speech commands, 
                      allowing it to be used by individuals with a wide range of disabilities. 
                      We also tested our system with nine participants, with each participant 
                      running three trials of eating soup and dry food for both 
                      the manual and autonomous system. Our hypothesis was that our autonomous 
                      system would be faster, easier to use and generally preferred over 
                      manual mode. The data showed that our system was in fact preferred and 
                      easier to use; however, only for difficult tasks was it proven 
                      to be faster than manual control.
                    </p>
                    <p>
                      We utilized a Kinova JACO2 robotic arm and Microsoft Kinect camera.  
                      We used facial tracking, gesture recognition and speech recognition 
                      to give commands to robot making feeding easier for people with upper 
                      body mobility issues who cannot easily control the robot otherwise.
                    </p>
                  </ScrollBox>
                </div>
                <div className="grow basis-1/2 overflow-hidden rounded-md">
                  <VideoFrame url="https://www.youtube.com/embed/kkbPEdshNx8"/>
                </div>
              </div>
            </Bento>
            <Bento title="UAV-UGV Collaboration" topic="project">
              <div className="flex flex-row items-center space-x-2">
                <div className="shrink basis-1/2">
                  <ScrollBox size="sm">
                    <p>
                      Implemented autonomous UAV landing on UGV platform using vision.  
                      Implemented communication and task synchronization between UAV and UGV 
                      for collaboration to complete high level task from human input.
                    </p>
                  </ScrollBox>
                </div>
                <div className="grow basis-1/2 overflow-hidden rounded-md">
                  <VideoFrame url="https://www.youtube.com/embed/NZQ-CGzPjCY"/>
                </div>
              </div>
            </Bento>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Work;
