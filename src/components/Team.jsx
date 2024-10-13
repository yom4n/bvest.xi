import React from "react";

const Team = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center pt-28 sm:pt-28 h-fit bg-parallax w-full bg-cover -z-10">
        <div className="flex flex-wrap justify-center z-0">
          
          {/* bg-[#011027]  */}

          <heading className="md:py-10  w-screen p-10 flex justify-center align-center ">
          <img
            src="/FM/MEET THE TEAM.png"
            alt=""
            className="md:w-1/3 w-full"
          />
        </heading>
          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " 
           >
              <div class="flex items-center mb-3">
                <img src="/FM/armaan.png" alt="" />
              </div>
            </div>
          </div>
          
          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " >
              <div class="flex items-center mb-3">
                <img src="/FM/vidyut.png" alt="" />
              </div>
            </div>
          </div>

          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " >
              <div class="flex items-center mb-3">
                <img src="/FM/priyal.png" alt="" />
              </div>
            </div>
          </div>

          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " >
              <div class="flex items-center mb-3">
                <img src="/FM/ayush.png" alt="" />
              </div>
            </div>
          </div>

          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " >
              <div class="flex items-center mb-3">
                <img src="/FM/aashima.png" alt="" />
              </div>
            </div>
          </div>

          <div class="p-8 max-w-sm z-0">
            <div class="flex rounded-lg h-full bg-triangles  transition-all ease-in-out duration-500 hover:animate-pulseFast p-4 flex-col " >
              <div class="flex items-center mb-3">
                <img src="/FM/sartaj.png" alt="" />
              </div>
            </div>
          </div>
          
          

        </div>
      </div>
    </>
  );
};

export default Team;
