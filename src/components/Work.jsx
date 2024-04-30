import React from "react";
import Container from "./Container";
import Bento from "./Bento"
import VideoFrame from "./VideoFrame";
import ScrollBox from "./ScrollBox";
import PaperLink from "./PaperLink";
import { FadeIn } from "./FadeIn";
import { PaperIcon, WheelChairIcon, NoteIcon, VideoIcon, RoboArmIcon, MobileRoboIcon, ProjectIcon } from "./Icons";
import goal1 from "../assets/tshirt-goal-1.png";
import ach1 from "../assets/tshirt-ach-1.png";
import goal2 from "../assets/t-shirt-goal-2.png";
import ach2 from "../assets/t-shirt-ach-2.png";
import plas from "../assets/plas.png";
import LinkButton from "./LinkButton";

function Work() {
  return (
    <Container id="work">
      <FadeIn>
        <div className="grid gap-8 grid-cols-[60fr_40fr] max-mdd:grid-cols-1 grid-rows-auto my-8">
          <Bento>
            <div className="w-full bg-emerald-300">
              <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
               <NoteIcon className="float-start mt-2 mr-2"/>
               FabricFlowNet
              </h1>
            </div>
            <div>
              <h2 className="text-primary">Bimanual Cloth Manipulation with a Flow-based Policy</h2>
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
            <div className="flex self-center space-x-6 mt-2">
              <LinkButton url="https://sites.google.com/view/fabricflownet">
                <NoteIcon className="w-[20px] h-[20px] flex-[0_0_auto] mr-2" />
                FabricFlowNet site
              </LinkButton>
              <LinkButton url="https://arxiv.org/abs/2111.05623">
                <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto] mr-2" />
                arXiv:2111.05623 [cs.RO]
              </LinkButton>
            </div>
          </Bento>
          <div className="grid grid-cols-auto grid-rows-2 gap-y-6">
            <Bento topic="video">
              <div className="grid grid-rows-1 grid-flow-col gap-2">
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
              <div className="grid grid-rows-1 grid-flow-col gap-2">
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
        <div className="grid gap-8 grid-cols-[0.5fr_0.5fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-8">
          <Bento>
            <div className="w-full bg-amber-300">
              <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
                <NoteIcon className="float-start mt-2 mr-2"/>
                PLAS
              </h1>
            </div>
            <h2 className="text-primary">Latent Action Space for Offline Reinforcement Learning</h2>
            <div>
              <img className="my-2" src={plas} alt="PLAS overview"/>
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
          <div className="flex justify-center space-x-6 self-center mt-2">
            <LinkButton url="https://sites.google.com/view/latent-policy">
              <NoteIcon className="w-[20px] h-[20px] flex-[0_0_auto] mr-2" />
              PLAS site
            </LinkButton>
            <LinkButton url="https://arxiv.org/abs/2011.07213">
              <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto] mr-2" />
              arXiv:2011.07213 [cs.RO]
            </LinkButton>
          </div>
          </Bento>
          <Bento>
            <div className="w-full bg-fuchsia-300">
              <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
                <NoteIcon className="float-start mt-2 mr-2"/>
                Cloth Sliding with Tactile Perception
              </h1>
            </div>
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
            <div className="self-center mt-4">
              <VideoFrame url="https://www.youtube.com/embed/BCk0LQ08qsQ"/>
            </div>
          </Bento>
        </div>
        <div className="grid gap-8 grid-cols-[0.40fr_0.60fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-8">
          <Bento>
            <div className="w-full bg-indigo-300">
              <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
                <NoteIcon className="float-start mt-2 mr-2"/>
                Delivery Robot
              </h1>
            </div>
            <h2 className="text-primary">Intention Estimation through Statistical, Goal-oriented Human-Robot Dialog</h2>
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
            <div className="self-center mt-4">
              <VideoFrame url="https://www.youtube.com/embed/DFB3jbHBqYE"/>
            </div>
            <div className="flex justify-center mt-8 self-center">
              <LinkButton url="https://arxiv.org/abs/1907.03390">
                <PaperIcon className="w-[20px] h-[20px] flex-[0_0_auto] mr-2" />
                arXiv:1907.03390 [cs.RO]
              </LinkButton>
            </div>
          </Bento>
          <div className="grid gap-8 grid-cols-auto grid-rows-2">
            <Bento>
              <div className="w-full bg-orange-300">
                <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
                  <NoteIcon className="float-start mt-2 mr-2"/>
                  Meal Assistance Robot
                </h1>
              </div>
              <div className="columns-1 md:columns-2">
                <div>
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
                <div className="mt-4">
                  <VideoFrame url="https://www.youtube.com/embed/kkbPEdshNx8"/>
                </div>
              </div>
            </Bento>
            <Bento>
              <div className="w-full bg-rose-300">
                <h1 className="max-md:text-[40px] max-md:leading-[48px] text-primary">
                  <NoteIcon className="float-start mt-2 mr-2"/>
                  UAV-UGV Collaboration
                </h1>
              </div>
              <div className="columns-1 md:columns-2">
                <div>
                  <ScrollBox size="sm">
                    <p>
                      Implemented autonomous UAV landing on UGV platform using vision.  
                      Implemented communication and task synchronization between UAV and UGV 
                      for collaboration to complete high level task from human input.
                    </p>
                  </ScrollBox>
                </div>
                <div>
                  <VideoFrame url="https://www.youtube.com/embed/NZQ-CGzPjCY"/>
                </div>
              </div>
            </Bento>
          </div>
        </div>
      </FadeIn>

      {/*<h1>Other Projects</h1>
      <div className="grid grid-cols-auto grid-flow-col gap-4 p-2 w-full overflow-x-auto h-max-[250px]">
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-indigo-300">
          <h2>MindWeb (coming soon)</h2>
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-fuchsia-300">
          <h2>VLM Nutrition Tracker</h2>
          Uses a Multimodal Language model with vision capability to estimate the nutrition content of food in given image.
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-emerald-300">
          <h2>Clutter Object Detection</h2>
          Implementation of Robotic pick-and-place of novel objects in clutter with multi-affordance grasping and cross-domain image matching by Zeng Et Al
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-amber-300">
          <h2>Barrett 7DOF</h2>
          Kinematics and Dynamics of Barrett Arm in MATLAB
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-rose-300">
          <h2>Sawyer WSG MoveIt</h2>
          Move It Code for Sawyer Robot Arm with WSG Tactile Sensor Gripper
        </div>
        <div className="w-[200px] h-[200px] border-2 border-black my-4 p-4 bg-yellow-300">
          <h2>test 6</h2>
        </div>
      </div>*/}
    </Container>
  );
}

export default Work;
