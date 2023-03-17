'use client';
import React from "react";
import { ExploreCard,TitleText,TypingText } from "../components";
import {exploreWorlds} from '../constants'
import {motion} from 'framer-motion'
import styles from "../styles";
import { staggerContainer } from "../utils/motion";


const Explore = () => {

  const [active,setActive] = React.useState('world-2')

  return(
  <section className={`${styles.paddings} `} id='explore'>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex-col`}
  >

    
      <TypingText title='| The World' textStyles='text-center' />
      <TitleText title='Choose the world you want to explore' textStyles='text-center' />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((World,index) =>(
          <ExploreCard key={World.id} index={index} active={active} setActive={setActive} {...World} />
        ) )}
      </div>   



  </motion.div>

    
  </section>

  )
};

export default Explore;
