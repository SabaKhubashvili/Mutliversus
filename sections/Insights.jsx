'use client';

import styles from "../styles";
import {motion} from 'framer-motion'
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText, InsightCard } from "../components";
import {insights} from '../constants/index'

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:true}}
    className={`${styles.innerWidth} mx-auto `}
    >
      <TypingText title='| Insight' textStyles='text-center' />
      <TitleText title='Insight about Metaverse' textStyles='text-center' />

      <div className="flex flex-col items-center justify-center gap-10 mt-[42px]">
        {
          insights.map((insight,index)=>(
            <InsightCard key={insight.title} index={index} {...insight} />
          ))
        }
      </div>
    </motion.div>
  </section>
);

export default Insights;
