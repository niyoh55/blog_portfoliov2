import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";

import Link from "next/link";
import Card from "../components/Card";
export default function Home() {
  const [flip, set] = useState(false);

  const [screenSize, getDimension] = useState({});
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="w-full h-full bg-gray-500">
      <Parallax
        pages={4}
        className="bg-neutral-300 "
        onClick={() => console.log(screenSize.dynamicWidth)}
      >
        <ParallaxLayer offset={0} speed={0}>
          <div className="flex flex-col 2xl::flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  h-[100vh] ">
            {/* bg-slate-600 */}

            <div className="flex">
              <div className=" py-[50px] w-[4rem] flex flex-none flex-col gap-20 items-center h-full border-black border-r-2 border-b-2	">
                <a href="https://www.linkedin.com/in/niyoh-edwyn-villanueva-5b2524113/">
                  <p className="rotate-[270deg] text-xl text-black hover:text-blue-600">
                    Linkedin
                  </p>
                </a>
                <a href="https://www.facebook.com/niyohedwyn.villanueva/">
                  <p className="rotate-[270deg] text-xl text-black hover:text-blue-600">
                    Twitter
                  </p>
                </a>
                <a href="https://www.facebook.com/niyohedwyn.villanueva/">
                  <p className="rotate-[270deg] text-xl text-black hover:text-blue-600">
                    Facebook
                  </p>
                </a>

                <Link href="https://www.linkedin.com/in/niyoh-edwyn-villanueva-5b2524113/">
                  <p className="mt-20 lg:hidden rotate-[270deg] text-xl text-black hover:text-blue-600">
                    Work
                  </p>
                </Link>
                <Link href="https://www.facebook.com/niyohedwyn.villanueva/">
                  <p className="lg:hidden rotate-[270deg] text-xl text-black hover:text-blue-600">
                    Contact
                  </p>
                </Link>
                <Link href="https://www.facebook.com/niyohedwyn.villanueva/">
                  <p className="lg:hidden rotate-[270deg] text-xl text-black hover:text-blue-600">
                    About
                  </p>
                </Link>
              </div>

              <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="=flex-1 2xl:h-2/3 xl:h-2/3 lg:h-1/3 md:h-1/3 sm:h-1/3 h-1/3 bg-gray-400 w-full">
                  {/* <div className="2xl:w-[550px] 2xl:h-[550px] xl:w-[500px] xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] sm:w-[350px] sm:h-[350px]"> */}

                  <div className="h-full w-full md:px-20 md:py-10">
                    <img
                      className="shadow-2xl rounded-lg w-full h-full object-cover"
                      src="https://wallpapercave.com/wp/wp4923992.png"
                    />
                  </div>
                </div>

                {/* Display Name ko */}
                <div className="bg-blue-400 flex flex-col flex-1 justify-center items-start px-20 2xl:h-1/3 xl:h-1/3 lg:h-2/3 md:h-2/3 sm:h-2/3 h-2/3  ">
                  <h1 className="2xl:text-7xl xl:text-6xl lg:text-4xl md:text-2xl sm:text-lg text-4xl tracking-widest ">
                    Niyoh Edwyn A. Villanueva
                  </h1>

                  <h2 className="text-base py-10 tracking-widest text-left">
                    Front-End Developer. Back-End Developer. Web Developer.
                    Aspiring Data Scientist.
                  </h2>
                </div>
              </div>
            </div>

            <div className="sm:hidden md:hidden lg:flex hidden flex-col flex-none h-[100vh] bg-pink-400 w-2/5 justify-center items-start gap-y-20 pt-[200px] font-gilda pb-[12rem] text-3xl 2xl:text-9xl xl:text-7xl lg:text-5xl md:text-3xl sm:text-xl ">
              <Link href="/no-content-yet">
                <h1 className="underline tracking-[2rem] font-light not-italic hover:scale-110 hover:bg-red-400 hover:italic duration-500 hover:rotate-1 hover:underline ">
                  Work
                </h1>
              </Link>
              <Link href="/no-content-yet">
                <h1 className="underline tracking-[2rem] font-light hover:scale-110 hover:bg-green-400 hover:italic duration-500 hover:rotate-1 hover:underline ">
                  About
                </h1>
              </Link>

              <Link href="/no-content-yet">
                <h1 className="underline tracking-[2rem] font-light hover:scale-110 hover:bg-blue-400 hover:italic duration-500 hover:rotate-1 hover:underline ">
                  Contact
                </h1>
              </Link>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5} className=" bg-purple-400  ">
          <div className="px-10 py-10">
            <h1 className="text-7xl font-montserrat pb-10">Skills:</h1>
            <div className="grid  gap-8  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4">
              <Card
                imgURL="https://usefulangle.com/img/thumb/javascript.png"
                title="Javascript"
                desc="Programming Language"
              />
              <Card
                imgURL="https://miro.medium.com/max/1400/0*XK4Q_OOsF4lObTgL.png"
                title="ReactJS"
                desc="Javascript Library for building UI"
              />
              <Card
                imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xxeQe2fRjvIQbegZz-y-HMn9JNN0sSiTTx1bXZvbjDsErD9LojB7f5pj9aPnBLeSK44&usqp=CAU"
                title="Tailwind CSS"
                desc="CSS Framework"
              />
              <Card
                imgURL="https://miro.medium.com/max/1400/0*XK4Q_OOsF4lObTgL.png"
                title="React Native"
                desc="JS Framework for building cross-platform apps"
              />
              <Card
                imgURL="https://itfsoftwareservice.com/wp-content/uploads/2021/07/Java.png"
                title="Java"
                desc="Programming Language"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.5}>
          <div className="bg-gray-400 h-full"></div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up Nice Lods</p>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

{
  /* <section
className={`h-[100vh] ${inViewport ? "bg-blue-300" : ""}  `}
ref={myRef}
>
<div className="content">
  <h1>Hello</h1>
  <p>{`Enter viewport: ${enterCount} times`}</p>
  <p>{`Leave viewport: ${leaveCount} times`}</p>
</div>
</section> */
}
