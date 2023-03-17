'use client'

import styles from "../styles";
import {motion} from 'framer-motion'
import { textContainer, textVariant2 } from "../utils/motion";

const StartSteps = ({text,number}) => (
  <div className={`w-full ${styles.flexCenter} flex-row my-3`}>
    <div className={`bg-[#323F5D] rounded-[24px] w-[70px] h-[70px] ${styles.flexCenter}`}>
      <p className={`text-white`}>
        {number}
      </p>
    </div>
    <motion.div className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]" variants={textContainer}>
    {Array.from(text).map((letter,index)=>(
      <motion.span variants={textVariant2} key={index}>
        {letter}
      </motion.span>
    ))}
    </motion.div >
  </div>
);

export default StartSteps;
