import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ReactLenis } from "lenis/dist/lenis-react";

import Home from "./components/Home";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Footer from "./components/Footer"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ReactLenis root>
            <Navbar />
            <Home />
            <Footer/>
          </ReactLenis>
        </>
      ),
    },
    {
      path: "/events",
      element: (
        <>
          <ReactLenis root>
            <Navbar />
            <Events />
            <Footer/>
          </ReactLenis>
        </>
      ),
    },
   
    {
      path: "/team",
      element: (
        <>
          <ReactLenis root>
            <Navbar />
            <Team />
            <Footer/>
          </ReactLenis>
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <div className="h-screen bg-[url('backdrop.mp4')] ">
        <video
          src="backdrop.mp4"
          autoPlay
          
          muted
          className="absolute z-[-10]
                  w-screen h-screen object-cover"
        ></video>
        
      </div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
