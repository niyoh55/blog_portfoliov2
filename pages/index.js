import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";

import Link from "next/link";
import Card from "../components/Card";
import { motion } from "framer-motion";
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
    <div>
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: ["0vh", "100vh"] }}
        transition={{ duration: 1, type: "tween" }}
        className="w-full bg-neutral-300 bg-repeat-round"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0.5, 0.75, 1] }}
          transition={{ delay: 0.75, duration: 1 }}
          className="flex flex-col 2xl::flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  h-[100vh] "
        >
          <div className="flex">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
              className=" py-[50px] w-[4rem] flex flex-none flex-col gap-20 items-center h-full border-black border-r-2 border-b-2	"
            >
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
            </motion.div>

            <div className="flex flex-col justify-center items-center h-[100vh]">
              <motion.div
                //   initial={{ y: -400 }}
                //   animate={{ y: 0 }}
                //   transition={{ ease: "easeIn", duration: 0.6 }}
                className="=flex-1 2xl:h-2/3 xl:h-2/3 lg:h-1/3 md:h-1/3 sm:h-1/3 h-1/3  w-full"
              >
                {/* <div className="2xl:w-[550px] 2xl:h-[550px] xl:w-[500px] xl:h-[500px] lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] sm:w-[350px] sm:h-[350px]"> */}

                <div className="h-full w-full md:px-20 md:py-10">
                  <img
                    className="shadow-2xl rounded-lg w-full h-full object-cover"
                    src="https://wallpapercave.com/wp/wp4923992.png"
                  />
                </div>
              </motion.div>

              {/* Display Name ko */}
              <motion.div className=" flex flex-col flex-1 justify-center items-start px-20 2xl:h-1/3 xl:h-1/3 lg:h-2/3 md:h-2/3 sm:h-2/3 h-2/3  ">
                <h1 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl tracking-widest ">
                  Niyoh Edwyn A. Villanueva
                </h1>

                <h2 className="text-base py-10 tracking-widest text-left">
                  Front-End Developer. Back-End Developer. Web Developer.
                  Aspiring Data Scientist.
                </h2>
              </motion.div>
            </div>
          </div>

          <motion.div className="sm:hidden md:hidden lg:flex hidden flex-col flex-none h-[100vh] w-2/5 justify-center items-start gap-y-20 pt-[200px] font-gilda pb-[12rem] text-3xl 2xl:text-9xl xl:text-7xl lg:text-5xl md:text-3xl sm:text-xl ">
            <Link href="/no-content-yet">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="underline tracking-[2rem] font-light not-italic hover:scale-110 hover:bg-red-400 hover:italic duration-500 hover:rotate-1 hover:underline "
              >
                Work
              </motion.h1>
            </Link>
            <Link href="/no-content-yet">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="underline tracking-[2rem] font-light hover:scale-110 hover:bg-green-400 hover:italic duration-500 hover:rotate-1 hover:underline "
              >
                About
              </motion.h1>
            </Link>

            <Link href="/no-content-yet">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="underline tracking-[2rem] font-light hover:scale-110 hover:bg-blue-400 hover:italic duration-500 hover:rotate-1 hover:underline "
              >
                Contact
              </motion.h1>
            </Link>
          </motion.div>
        </motion.div>
        {/* 
      <motion.div
        initial={{ x: -400, opacity: 0.6 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="px-10 py-10 mt-40 overflow-hidden"
      >
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
            imgURL="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
            title="React Native"
            desc="JS Framework for building cross-platform apps"
          />
          <Card
            imgURL="https://itfsoftwareservice.com/wp-content/uploads/2021/07/Java.png"
            title="Java"
            desc="Programming Language"
          />{" "}
          <Card
            imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            title="Python"
            desc="Programming Language"
          />
        </div>
      </motion.div>

      <div>
        <h1>nice</h1>
      </div> */}
      </motion.div>

      <motion.div
        animate={{ height: ["100vh", "0vh"] }}
        transition={{ duration: 1, type: "tween" }}
        className="w-full h-[100vh] bg-black"
      ></motion.div>
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
