'use client';

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "../components";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className={`${styles.innerWidth} mx-auto gap-10 flex md:flex-row flex-col justify-between items-center h-[32rem]`}
    >
      <div className="flex-[0.4] h-full rounded-2xl relative gradient-05  md:pb-4 py-10 lg:px-10 px-5 flex flex-col justify-end border-solid border-2 border-[#6A6A6A]">
          <div className="feedback-gradient z-10"/>
          <motion.h4 variants={fadeIn('down','tween',0.8,1)} className="lg:text-[32px] text-[28px] text-white font-extrabold">Samantha</motion.h4>
          <TypingText   title='Founder Metaverus' textStyles='text-white my-5' ></TypingText>

          <h6 className="text-white lg:leading-[190%] leading-[130%] font-normal text-[20px]">
          “With the development of today's technology,
           metaverse is very useful for today's work,
            or can be called web 3.0. by using metaverse 
            you can use it as anything”
          </h6>
      </div>

      <motion.div className="flex-1 h-full" variants={fadeIn('left','tween',0.5,1)}>
        <img src="./planet-09.webp" className="rounded-2xl w-full h-full object-cover" alt="" />
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
