import React from "react";

const Team = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center pt-28 sm:pt-28 h-fit bg-gradient-to-t from-sky-800 via-sky-950 to-[#051F2D]">
        <div className="flex flex-wrap justify-center z-0">
          <div className="animate-float opacity-30 absolute z-[-1] w-32 right-6 md:top-1/12">
            <img src="/gear.png" alt="" />
          </div>
          <div className=" animate-float absolute z-[-1] w-32 left-6 top-[200px] md:top-1/12">
            <img src="/gear2.png" alt="" />
          </div>
          <div className="animate-float opacity-30 absolute z-[-1] w-28 left-6 top-[400px] md:top-1/2">
            <img src="/gear.png" alt="" />
          </div>
          <div className="animate-float opacity-30 absolute z-[-1] w-20 right-6 top-[550px] md:bottom-1/3">
            <img src="/gear.png" alt="" />
          </div>
          <div className="animate-float opacity-30 absolute z-[-1] w-28 left-6 top-[600px] md:bottom-20">
            <img src="/gear.png" alt="" />
          </div>
          <div className="animate-float absolute z-[-1] w-60 right-6 top-[300px] md:bottom-0">
            <img src="/gear2.png" alt="" />
          </div>
          {/* bg-[#011027]  */}
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
