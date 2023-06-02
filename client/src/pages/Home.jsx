/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {useState, useEffect} from 'react'
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header
            className="w-full flex justify-start items-start"
            {...slideAnimation("down")}
          >
            <img
              src="./homelogo.png"
              alt="logo"
              className="w-full h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                YOUR <br className="xl:block hidden" /> STYLE.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Transform your t-shirt into a work of art with our AI-powered
                design generator. <strong>Express your individuality</strong>{" "}
                and make a statement with a design that's uniquely yours.{" "}
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles={'w-fit px-4 py-2.5 font-bold text-sm'}

              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
