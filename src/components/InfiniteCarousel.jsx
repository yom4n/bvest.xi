import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../components/Icons";

const InfiniteCarousel = () => {
  const items = [
    "/Sponsors/Sponsor1.png",
    "/Sponsors/Sponsor2.png",
    "/Sponsors/Sponsor3.png",
    "/Sponsors/Sponsor4.png",
    "/Sponsors/Sponsor5.png",
    "/Sponsors/Sponsor6.png",
    "/Sponsors/Sponsor7.png",
    "/Sponsors/Sponsor8.png",
    "/Sponsors/Sponsor9.png",
    "/Sponsors/Sponsor10.png",
  ];

  return (
    <div className="overflow-hidden py-20">
      <title className=" px-10 flex justify-center align-middle">
        <Icons.Sponsors className="md:w-1/3 h-full  pb-10 mt-10 w-2/3" />{" "}
      </title>

      <motion.div
        className="flex p-5"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[120px] md:w-[150px]  bg-white  text-white flex items-center justify-center mx-2 p-2 rounded-xl"
          >
            <img src={item} alt="" />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex p-5"
        animate={{
          x: [0, -800],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[120px] md:w-[150px]  bg-white  text-white flex items-center justify-center mx-2 p-2 rounded-xl"
          >
            <img src={item} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
