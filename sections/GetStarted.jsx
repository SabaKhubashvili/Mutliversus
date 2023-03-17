'use client';

import {StartSteps, TitleText,TypingText } from "../components";
import styles from '../styles'
import { startingFeatures } from "../constants";
import {staggerContainer,planetVariants,fadeIn} from '../utils/motion'
import {motion} from 'framer-motion'

const GetStarted = () => (
  <section className={`${styles.paddings} relative
  z-10`}>
    <motion.div
    variants={staggerContainer}
    whileInView='show'
    initial='hidden'
    viewport={{once:true,amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}>
        <img src="./get-started.webp  " alt="getStarted" className="w-[90%] h-[90%] object-contain"/>
      </motion.div>

      <motion.div variants={fadeIn('left','tweem',0.2,0.75)}
      className='flex-[0.75] flex justify-center flex-col'>
        <TypingText title='| How Metaverus Works' textStyles='text-center'/>
        <TitleText title='Get started with just a few clicks'textStyles='text-center' />
        <div className="mt-[30px] flex flex-col justify-start items-center">
        {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
