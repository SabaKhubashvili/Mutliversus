'use client';

import styles from "../styles";
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} 
    className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-10`}
    >
      <TypingText title='| People on the World' />
      <TitleText title='Track friends around you and invite them to play together in the same world'  textStyles='text-center' />
      <motion.div className="relative mt-[68px] w-full h-[550px]" variants={fadeIn('up','tween',0.3,1)}>
        <img src="./map.webp" className="w-full h-full mx-auto object-cover" alt="map" />  
        <div className="absolute bottom-24 right-24 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="./people-01.webp" alt="People" className="w-full h-full shadow-people rounded-full" />
        </div>
        <div className="absolute top-12 left-32 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="./people-02.webp" alt="People" className="w-full h-full shadow-people rounded-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="./people-03.webp" alt="People" className="w-full h-full shadow-people rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
