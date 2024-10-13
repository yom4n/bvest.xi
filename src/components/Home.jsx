import React, { useRef, useTransition } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";

import { Icons } from "../components/Icons";

import InfiniteCarousel from "./InfiniteCarousel";

const SECTION_HEIGHT = 1000;

const Home = () => {
  return (
    <>
      <div className="bg-parallax w-full bg-cover z-100">
        <div className="flex w-screen">
          <div className="container rotate-180 absolute z-10 top-48 w-screen m-0 pr-5 flex justify-end align-center  ">
            <div className="chevron "></div>
            <div className="chevron "></div>
            <div className="chevron "></div>
          </div>
          <div className="container rotate-180 absolute z-10 top-48 md:pl-0 pl-5 w-screen  ">
            <div className="chevron justify-center align-center"></div>
            <div className="chevron justify-center align-center"></div>
            <div className="chevron justify-center align-center"></div>
          </div>
        </div>
        <div
          className="w-full relative "
          style={{ height: `calc(${SECTION_HEIGHT}px + 120vh)` }}
        >
          <Portal />

          <CenterImage />
          {/* <ParallaxImages /> */}

          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/5 to-[#011027]/80"></div>
        </div>
        <div className="  bg-[#011027]/80 pb-20">
          <div className="flex w-vw opacity-100 py-10 m-0 right-0 justify-center items-center z-10">
            <a href="https://bvphex.devfolio.co/" target="_blank">
              <img src="/Home/BVPHEX.svg" alt="" className="flex w-full" />
            </a>
          </div>
          <div className="flex  h-screen w-vw bg-fixed  justify-start items-center">
            <div className="flex flex-col justify-center items-start font-semibold  py-20 px-10 md:w-3/4 w-fit  h-fit top-0">
              {/* <span className="text-cyan-400 md:text-3xl text-md font-sixtyfour md:py-10 py left-0">
                About Us
              </span> */}

              <Icons.AboutUs className="md:w-1/3 h-full py-5 mt-10 w-2/3" />
              

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.5 }}
                className="md:text-xl text-sm text-slate-300 text-justify"
              >
                Transforming the Century BVP-HEX: HACK ELEVEN XPRESS Bharati
                Vidyapeeth's College of Engineering organizes BVEST, its very
                own Annual Technical Fest every year to upskill the technical
                skills of the students by conducting hackathons and other
                interactive events. This year it is happening on 18-19 October.
                Dive into a high-energy 24-hour hackathon at our technical fest,
                BVEST.XI! This is your chance to push the boundaries of
                technology and creativity. Whether you're a coding wizard or a
                tech visionary, you’ll find the perfect environment to
                collaborate, innovate, and solve real-world problems. Assemble
                your team, tackle exciting challenges, and build groundbreaking
                solutions from the ground up. Our hackathon features hands-on
                workshops, expert mentorship, and plenty of networking
                opportunities with industry leaders and fellow tech enthusiasts.
                Compete for fantastic prizes and gain recognition for your
                skills and ingenuity. It’s not just about coding; it’s about
                pushing limits and turning ideas into reality. Don’t miss out on
                this opportunity to showcase your talents and make a significant
                impact. Register now and get ready for an unforgettable
                experience!
              </motion.div>
            </div>
          </div>
        </div>

        <motion.section
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex h-3/4 flex-col mt-20 md:pb-14 pb-2 font-"
        >
          {/* <p className="font-sixtyfour text-cyan-400 text-2xl md:text-3xl text-center p-10">
            Numbers That Matter
          </p> */}

          <heading className="md:py-10 py-5 px-10 flex justify-center align-middle">
            <img
              src="/Home/the number speaks.png"
              alt=""
              className="md:w-7/12 w-11/12"
            />
          </heading>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">
            <div className="flex flex-col justify-center items-center hover:animate-float bg-[#011027]/80 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  3,000+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Registrations
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:animate-float bg-[#011027]/80 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)">
                    <path
                      d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
                      stroke="#FF6D42"
                      stroke-width="4.341"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.8.2h49.4v49.4H.8z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  20+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Sponsors
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:animate-float bg-[#011027]/80 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-path="url(#a)"
                    stroke="#FF6D42"
                    stroke-width="3.473"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"></path>
                    <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  10+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Competitions
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:animate-float bg-[#011027]/80 px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
              <div className="flex flex-row justify-center items-center">
                <svg
                  className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
                    stroke="#FF6D42"
                    stroke-width="4.341"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M45.569 24.356v-12.35h-12.35"
                    stroke="#FF6D42"
                    stroke-width="4.341"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                  1,000+
                </p>
              </div>
              <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                Social Media Views
              </p>
            </div>
          </div>
        </motion.section>

        <InfiniteCarousel />
      </div>
    </>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT - 500],
    ["150%", "100%"]
  );
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [50, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [50, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  return (
    <motion.div
      className="sticky top-0 h-screen w-10/12 mx-auto"
      style={{
        backgroundSize,
        clipPath,
        backgroundImage: "url(/Home/backdrop.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const Portal = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start center", "end center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="flex justify-center align-middle fixed w-screen pt-44 -z-8"
      style={{ opacity: opacity }}
    >
      <img
        src="/Home/portal.png"
        alt=""
        className="md:w-1/4 w-11/12 animate-spinSlow"
      />
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto flex h-screen w-screen  relative z-10">
      <ParallaxImg
        src="Home/monuments.png"
        alt="Oopsie"
        start={-200}
        end={0}
        className="w-full md:w-screen"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //Not working
    // offset: ["start end", "end start"],
  });
  //Not working
  // const opacity = useTransform(scrollYProgress, [0.75, 1], [1,0])
  //Printing Y postition
  // useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))

  return <motion.img style={{}} src={src} alt={alt} className={className} />;
};

export default Home;
