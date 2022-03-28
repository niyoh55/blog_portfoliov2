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
          <div className="flex h-[100vh] bg-neutral-300">
            <div className="flex flex-col justify-end items-start w-1/2 pb-20 px-10">
              <h1 className="text-5xl tracking-widest text-left ">
                Hi, I'm{" "}
                <span className="text-pink-500">Niyoh Edwyn A. Villanueva</span>
              </h1>

              <h2 className="text-5xl py-10 tracking-widest text-left">
                I'm a Web Developer
              </h2>
            </div>

            <div className=" flex justify-center items-center bg-opacity-40  font-montserrat  w-1/2	">
              <div className="flex-col">
                <Link href="/">
                  <h1 className="text-[11rem] tracking-wide font-light not-italic hover:scale-110 hover:italic duration-500">
                    Work
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="text-[11rem] tracking-wide font-light hover:scale-110 hover:italic duration-500">
                    About
                  </h1>
                </Link>

                <Link href="/">
                  <h1 className="text-[11rem] tracking-wide font-light hover:scale-110 hover:italic duration-500">
                    Contact
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        ></ParallaxLayer>

        <ParallaxLayer
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
        </ParallaxLayer>
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
