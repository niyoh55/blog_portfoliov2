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
    <div className="w-full">
      <Parallax pages={2} className="">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="flex flex-col 2xl::flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col h-[100vh] bg-neutral-300">
            {/* bg-slate-600 */}
            <div className=" py-[50px] w-[4rem] flex flex-col gap-20 items-center">
              <p className="rotate-[270deg] text-xl text-black">Linkedin</p>
              <p className="rotate-[270deg] text-xl text-black">Twitter</p>
              <p className="rotate-[270deg] text-xl text-black">Facebook</p>
            </div>

            <div className="flex flex-col flex-1 justify-end items-start pb-20 px-10 bg-pink-400">
              <h1 className="2xl:text-8xl xl:text-6xl lg:text-4xl md:text-2xl sm:text-base text-base tracking-widest ">
                Niyoh Edwyn A. Villanueva
              </h1>

              <h2 className="text-base py-10 tracking-widest text-left">
                {/* Front-End Developer. Back-End Developer. Web Developer. Aspiring
                Data Scientist. */}
                kwekwekwekwkewkewkekw kwekwkewkewke wkekwek wekwkewke
                kekekewkewkekwk
              </h2>
            </div>

            <div className="flex flex-col flex-1 h-[100vh]  justify-center items-start gap-y-20  pt-[200px] font-montserrat pb-[12rem] text-3xl 2xl:text-9xl xl:text-9xl lg:text-7xl md:text-5xl sm:text-3xl bg-gray-700">
              <Link href="/">
                <h1 className=" tracking-[3rem] font-light not-italic hover:scale-110 hover:italic duration-500 hover:rotate-3 hover:underline">
                  Work
                </h1>
              </Link>
              <Link href="/">
                <h1 className="tracking-[3rem] font-light hover:scale-110 hover:italic duration-500 hover:rotate-3 hover:underline ">
                  About
                </h1>
              </Link>

              <Link href="/">
                <h1 className="tracking-[3rem] font-light hover:scale-110 hover:italic duration-500 hover:rotate-3 hover:underline ">
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
