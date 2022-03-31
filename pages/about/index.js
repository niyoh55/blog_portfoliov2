import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full h-full">
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: ["100vh", "0vh"] }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="h-[100vh] bg-black "
      ></motion.div>

      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="w-full flex justify-center items-center bg-neutral-300 "
      >
        <motion.div>
          <div className="flex flex-row h-full w-full ">
            <div className="py-[50px] w-[4rem] hidden sm:block items-center justify-start h-full border-black border-r-2 border-b-2	">
              <Link href="/">
                <p className="rotate-[270deg] text-xl text-black hover:text-blue-600">
                  Home
                </p>
              </Link>
            </div>

            <div className="h-full flex-1 px-3 2xl:px-60 xl:px-40 lg:px-20 md:px-15 sm:px-10 pt-5 ">
              <div className="lg:hidden text-center">
                <p className="text-[3rem] 2xl:text-[13rem] xl:text-[10rem] lg:text-[9rem] md:text-[7rem] sm:text-[5rem] font-gilda font-light tracking-wider">
                  About
                </p>
              </div>
              <div className="flex flex-row ">
                <div className=" hidden lg:flex flex-col justify-end items-end">
                  <h1 className="text-[3rem] 2xl:text-[13rem] xl:text-[10rem] lg:text-[9rem] md:text-[7rem] sm:text-[5rem] font-gilda font-light tracking-wider ">
                    About
                  </h1>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-col flex-grow justify-center items-center w-full "
                >
                  <img src="https://i.ibb.co/nzBjqVQ/1-29304022021.jpg" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="w-full font-gilda"
              >
                <div className="text-4xl py-10">
                  <p>Hi! I&apos;m Niyoh. A full-stack developer.</p>
                </div>

                <div className="text-2xl text-justify">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pellentesque felis est, vel fermentum leo mollis non.
                    Proin pretium felis velit, sed fringilla erat congue eu.
                    Donec non feugiat augue. Nam scelerisque nulla at massa
                    hendrerit vehicula. Nunc sed molestie nunc, sit amet
                    imperdiet metus. Mauris ac tristique ipsum, a vestibulum
                    libero. Nulla facilisi. Donec aliquet nunc neque, nec porta
                    massa vestibulum at. Curabitur nec efficitur sapien. Ut
                    iaculis odio non velit fermentum sagittis. Maecenas
                    scelerisque viverra lacus, quis dictum nibh placerat id.
                  </p>

                  <p className="pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pellentesque felis est, vel fermentum leo mollis non.
                    Proin pretium felis velit, sed fringilla erat congue eu.
                    Donec non feugiat augue. Nam scelerisque nulla at massa
                    hendrerit vehicula. Nunc sed molestie nunc, sit amet
                    imperdiet metus. Mauris ac tristique ipsum, a vestibulum
                    libero. Nulla facilisi. Donec aliquet nunc neque, nec porta
                    massa vestibulum at. Curabitur nec efficitur sapien. Ut
                    iaculis odio non velit fermentum sagittis. Maecenas
                    scelerisque viverra lacus, quis dictum nibh placerat id.
                  </p>
                  <p className="pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pellentesque felis est, vel fermentum leo mollis non.
                    Proin pretium felis velit, sed fringilla erat congue eu.
                    Donec non feugiat augue. Nam scelerisque nulla at massa
                    hendrerit vehicula. Nunc sed molestie nunc, sit amet
                    imperdiet metus. Mauris ac tristique ipsum, a vestibulum
                    libero. Nulla facilisi. Donec aliquet nunc neque, nec porta
                    massa vestibulum at. Curabitur nec efficitur sapien. Ut
                    iaculis odio non velit fermentum sagittis. Maecenas
                    scelerisque viverra lacus, quis dictum nibh placerat id.
                  </p>
                  <p className="py-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin pellentesque felis est, vel fermentum leo mollis non.
                    Proin pretium felis velit, sed fringilla erat congue eu.
                    Donec non feugiat augue. Nam scelerisque nulla at massa
                    hendrerit vehicula. Nunc sed molestie nunc, sit amet
                    imperdiet metus. Mauris ac tristique ipsum, a vestibulum
                    libero. Nulla facilisi. Donec aliquet nunc neque, nec porta
                    massa vestibulum at. Curabitur nec efficitur sapien. Ut
                    iaculis odio non velit fermentum sagittis. Maecenas
                    scelerisque viverra lacus, quis dictum nibh placerat id.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
