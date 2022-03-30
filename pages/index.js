import { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";

import Link from "next/link";
export default function Home() {
  const [flip, set] = useState(false);

  const words = [
    "Front-End Developer",
    "Back-End Developer",
    "Full Stack Developer",
    "Soon to be Data Scientist",
  ];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    delay: 100,
    config: { mass: 1, tension: 280, friction: 120 },
    onRest: () => set(!flip),
  });

  return (
    <div className="w-full h-full bg-gray-500">
      <Parallax pages={4} className="bg-neutral-300 ">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="flex 2xl::flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  h-[100vh] ">
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
              </div>

              <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="=flex-1 2xl:h-2/3 xl:h-2/3 lg:h-1/3 md:h-1/3 sm:h-1/3 h-1/3 w-full">
                  {/* <div className="2xl:w-[550px] 2xl:h-[550px] xl:w-[500px] xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] sm:w-[350px] sm:h-[350px]"> */}

                  <div className="h-full w-full px-20 py-10">
                    <img
                      className="shadow-2xl rounded-lg"
                      src="https://wallpapercave.com/wp/wp4923992.png"
                    />
                  </div>
                </div>

                {/* Display Name ko */}
                <div className=" flex flex-col flex-1 justify-center items-start px-20 2xl:h-1/3 xl:h-1/3 lg:h-2/3 md:h-2/3 sm:h-2/3 h-2/3  ">
                  <h1 className="2xl:text-7xl xl:text-6xl lg:text-4xl md:text-2xl sm:text-lg text-base tracking-widest ">
                    Niyoh Edwyn A. Villanueva
                  </h1>

                  <h2 className="text-base py-10 tracking-widest text-left">
                    Front-End Developer. Back-End Developer. Web Developer.
                    Aspiring Data Scientist.
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex  flex-col flex-none h-[100vh] bg-pink-400 w-2/5 justify-center items-start gap-y-20 pt-[200px] font-gilda pb-[12rem] text-3xl 2xl:text-9xl xl:text-7xl lg:text-5xl md:text-3xl sm:text-xl ">
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

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        >
          <div className="flex justify-center items-center ">
            <img
              width={800}
              height={800}
              src="https://i.kym-cdn.com/entries/icons/facebook/000/010/606/orangutan_square.jpg"
            ></img>
          </div>
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
