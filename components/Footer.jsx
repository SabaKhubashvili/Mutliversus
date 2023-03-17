'use client';

import styles from "../styles";
import { TitleText } from "./CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
const Footer = () => (
  <footer className={`${styles.paddings} relative z-10`}>
     <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className={`${styles.innerWidth} mx-auto flex flex-col gap-10`}
    >
      <div className="flex justify-between items-center lg:flex-row flex-col border-opacity-[0.1] pb-10 border-solid border-b-2 border-b-[#FFF]">
        <h1 className="text-white font-extrabold lg:text-[64px] lg:my-0 my-10 lg:text-start text-center text-[40px]">Enter the Metaverse </h1>
        <button className={` flex items-center justify-around rounded-full text-white h-[64px] w-[246px] bg-[#25618B] outline-none border-none`}>
          <img src="./headset.svg"  alt="" />
          ENTER METAVERSE
        </button>
      </div>

      <div className="flex justify-between lg:flex-row flex-col items-center">
        <h2 className="uppercase text-white text-[24px] font-extrabold">METAVERUS</h2>
        <p className="text-white opacity-[0.8] lg:my-0 my-10 text-center">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <div className="flex">
          <img src="./twitter.svg" className="mx-4" alt="" />
          <img src="./linkedin.svg" className="mx-4" alt="" />
          <img src="./instagram.svg" className="mx-4" alt="" />
          <img src="./facebook.svg" className="mx-4" alt="" />
        </div>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
