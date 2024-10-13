import React from "react";
import { Icons } from "../components/Icons";

// bg-gradient-to-r from-sky-800 via-sky-950 to-sky-950
const Events = () => {
  const day1 = [
    [
      "https://unstop.com/competitions/tech-titans-bharati-vidyapeeths-college-of-engineering-new-delhi-1163261",
      "Banners/Frame 481501.png",
      "Ready for the ultimate showdown of tech brilliance? Step into the realm of industry giants with Tech Titans: The Next Big Thing! ",
      "A-401",
      "18k",
    ],
    [
      "https://unstop.com/competitions/pixel-to-pitch-coding-meets-business-innovation-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delh-1164233",
      "Banners/Frame 481509.png",
      "Code a killer landing page - Pitch your BIGGEST biz idea - Show the world you're not just a coder, you're an entrepreneur in the making!",
      "B-404",
      "7k",
    ],
    [
      "https://unstop.com/competitions/roboleague-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162825",
      "Banners/Frame 481504.png",
      " Calling all innovators! Join us at RoboLeague, where you can design and build your own autonomous robot for exciting football matches! Showcase your skills, compete for glory, and be part of an unforgettable experience.",
      "Basketball Court",
      "14k",
    ],
    [
      "https://unstop.com/competitions/microquest-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162848",
      "Banners/Frame 481502.png",
      "Teams will tackle challenges in Charades and then dive into hardware innovation and business strategy. Who will rise to the top?",
      "B-401",
      "5k",
    ],
  ];
  const day2 = [
    [
      "https://unstop.com/hackathons/code-showdown-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162805",
      "Banners/Frame 481507.png",
      "3 Rounds of Pure Challenge—from rapid-fire MCQs to ultimate DSA duels. Who will rise as the legend?",
      "C Block 3rd-Floor",
      "8k",
    ],
    [
      "https://unstop.com/competitions/dvd-dhanda-vigyaan-doraemon-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1163302",
      "Banners/Frame 481511.png",
      "In this thrilling B-plan competition, teams will unlock futuristic Doraemon gadgets through a fun quiz and pitch their innovative ideas in a creative showdown!",
      "B-404 ",
      "7k",
    ],
    [
      "https://unstop.com/competitions/digi-darzee-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162738",
      "Banners/Frame 481500.png",
      "Time to tailor a masterpiece with Digi Darzi! Fashion and UI/UX collide in this challenge with a 15k prize pool up for grabs!",
      "A-401",
      "15k ",
    ],
    [
      "https://unstop.com/competitions/vichaarx-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1153332",
      "Banners/Frame 481510.png",
      "From tech analysis to strategic pitch and implementation, take your ideas from concept to reality in 3 dynamic rounds. Are you ready to scale your vision?",
      "C-103",
      "5k ",
    ],
    [
      "https://unstop.com/competitions/mod-mindoverdata-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1163229",
      "Banners/Frame 481506.png",
      "Answer, Analyse, Visualise! Unlock the power of data at Mind Over Data ! Dive into a world where creativity meets precision, and data transforms into powerful insights.",
      "C-105 ",
      "5k",
    ],
    [
      "https://unstop.com/competitions/trp-tech-rumble-aur-panchaayat-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1165332",
      "Banners/Frame 481508.png",
      "Round 1: With 5 tech domains in play, only the best teams from each will emerge as champions. For more info Click the link below!",
      "A-405 ",
      "7k",
    ],
    [
      "https://unstop.com/competitions/idea-roulette-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162845",
      "Banners/Frame 481503.png",
      "In Idea Roulette, the only thing you can count on is change! 🔄💭 With every twist, teams will have to adapt and thrive. Are you ready to outsmart the unexpected? 💡✨",
      "B-402 & B-403",
      "8k ",
    ],
    [
      "https://unstop.com/competitions/game-of-code-20-bvestxi-bharati-vidyapeeths-college-of-engineering-new-delhi-1162840",
      "Banners/Frame 481505.png",
      "Embark on a journey through campus, uncover hidden clues, and solve mind-bending puzzles in a race against time. �",
      "B-401 ",
      "7k",
    ],
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center pt-32 h-max  bg-parallax w-full bg-cover -z-10">
        <heading className="md:py-10 fixed py-10 flex justify-end align-center animate-float">
          <img
            src="/Events/techElements.png"
            alt=""
            className="md:w-1/3 w-2/3"
          />
        </heading>
        <heading className="md:py-10 fixed py-10 flex justify-start align-center animate-float">
          <img
            src="/Events/techElements.png"
            alt=""
            className="md:w-1/3 w-2/3"
          />
        </heading>
        <Icons.Day1 className="md:w-3/12 h-full py-5 mt-10 w-2/3 z-10" />

        <div className="flex flex-wrap  justify-center z-0">
          {/* <div className="fixed">
            <div className="animate-float opacity-30 absolute z-[-1] w-32 right-6 top-1/12">
              <img src="/gear.png" alt="" />
            </div>
            <div className=" animate-float absolute z-[-1] w-32 left-6 top-1/12">
              <img src="/gear2.png" alt="" />
            </div>
            <div className="animate-float opacity-30 absolute z-[-1] w-28 right-2/3 top-1/2">
              <img src="/gear.png" alt="" />
            </div>
            <div className="animate-float opacity-30 absolute z-[-1] w-20 right-0 bottom-1/3">
              <img src="/gear.png" alt="" />
            </div>
            <div className="animate-float opacity-30 absolute z-[-1] w-28 left-8 bottom-20">
              <img src="/gear.png" alt="" />
            </div>
            <div className="animate-float absolute z-[-1] w-60 right-10 bottom-0">
              <img src="/gear2.png" alt="" />
            </div>
          </div> */}


          {day1.map((event) => (
            <div className="p-4 max-w-sm z-0">
              <div className="flex rounded-lg h-full bg-black opacity-95 transition-colors ease-in-out duration-500 hover:bg-slate-950 p-8 flex-col ">
                <div className="flex items-center mb-3">
                  <img src={event[1]} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="text-sm text-white dark:text-gray-300">
                    {event[2]}
                  </p>
                  <div className="flex w-full gap-x-16">
                    <div className="flex gap-x-2  mt-1">
                      <span className="text-base font-bold">Cash Prize:</span>
                      <span className="text-base ">{event[4]}</span>
                    </div>

                    <div className="flex gap-x-2  mt-1">
                      <span className="text-base font-bold">Venue:</span>
                      <span className="text-base ">{event[3]}</span>
                    </div>
                  </div>
                  <a
                    href={event[0]}
                    target="_blank"
                    className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Register Now!
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Icons.Day2 className="md:w-3/12 h-full py-5 mt-10 w-7/12 z-10" />


        <div className="flex flex-wrap justify-center z-0">
          {day2.map((event) => (
            <div className="p-4 max-w-sm z-0">
              <div className="flex rounded-lg h-full bg-black opacity-95 transition-colors ease-in-out duration-500 hover:bg-slate-950 p-8 flex-col ">
                <div className="flex items-center mb-3">
                  <img src={event[1]} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="text-sm text-white dark:text-gray-300">
                    {event[2]}
                  </p>
                  <div className="flex w-full gap-x-16">
                    <div className="flex gap-x-2  mt-1">
                      <span className="text-base font-bold">Cash Prize:</span>
                      <span className="text-base ">{event[4]}</span>
                    </div>

                    <div className="flex gap-x-2  mt-1">
                      <span className="text-base font-bold">Venue:</span>
                      <span className="text-base ">{event[3]}</span>
                    </div>
                  </div>
                  <a
                    href={event[0]}
                    target="_blank"
                    className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Register Now!
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
