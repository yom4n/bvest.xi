import React, { useRef, useTransition } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";

const SECTION_HEIGHT = 1000;

const Home = () => {
  return (
    <>
      {/* <div className="flex h-screen md:w-vw w-fit md:px-20 pt-20 justify-center items-center">
        <img src="test-wolf.jpg" alt="" className="w-1/2 " />
      </div>

      <div className="flex h-screen w-vw bg-fixed bg-parallax bg-cover justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 font-semibold  py-20 px-10 md:w-3/4 w-fit  h-fit top-0">
          <span className="text-cyan-400 md:text-3xl text-md font-sixtyfour py-10">
            About Us
          </span>
          <div className="md:text-xl text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            cupiditate inventore ducimus. Neque sint dolorem quas libero
            doloremque quos illum, eius in velit deleniti tempora repellat
            maiores, asperiores, obcaecati nam quidem natus autem consequatur
            iure ad possimus vel doloribus. Ut quidem tempora inventore magni
            eaque minus minima, velit illo, harum maiores molestias hic
            dignissimos aliquam culpa pariatur tenetur! Adipisci, amet ducimus
            impedit ipsa odio labore saepe ea praesentium aliquid distinctio in,
            molestiae quasi maxime aperiam quod sed provident consectetur
            repellat dolorum, harum explicabo voluptatibus numquam laudantium
            earum. Nulla consequuntur at ullam vero praesentium quisquam,
            necessitatibus, repellendus similique, enim id ex!
          </div>
        </div>
      </div> */}
      <div className="bg-parallax w-full bg-cover">
        <div
          className="w-full relative "
          style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        >
          <CenterImage />
          <ParallaxImages />

          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/5 to-[#011027]/80"></div>
        </div>
        <div className="h-screen bg-[#011027]/80"></div>
      </div>
    </>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT - 500],
    ["170%", "100%"]
  );
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  return (
    <motion.div
      className="sticky top-0 h-screen w-3/4 mx-auto"
      style={{
        backgroundSize,
        clipPath,
        backgroundImage: "url(../public/bvest-logo2.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto flex h-screen w-full px-4 pt-[200px] relative z-10">
      <ParallaxImg
        src="design/lines.png"
        alt="Oopsie"
        start={-200}
        end={200}
        className="w-1/4 md:w-2/12 left-5"
      />
      <ParallaxImg
        src="design/lines.png"
        alt="Oopsie"
        start={200}
        end={-250}
        className="w-1/3 right-5"
      />
      <ParallaxImg
        src="design/lines.png"
        alt="Oopsie"
        start={-200}
        end={200}
        className="absolute w-1/4 md:w-2/12 right-5"
      />
      <ParallaxImg
        src="design/lines.png"
        alt="Oopsie"
        start={200}
        end={-250}
        className="absolute w-1/3 right-5"
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
