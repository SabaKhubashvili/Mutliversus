'use client';

import styles from '../styles/index'
import {motion} from 'framer-motion'
import { planetVariants, staggerContainer } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col `}
    >
      <div className='flex-[0.75]'>
        <TypingText title='| Whats New?' />
        <TitleText title="What's new about Metaversus?" />

        <div className='flex flex-row justify-start mt-[30px]'>
        {
          newFeatures.map((feature)=>(
            <NewFeatures  key={feature.title} {...feature} />
            ))
          }
        </div>
      </div>

      <motion.div variants={planetVariants('right')}
      className='flex-1 lg:mt-0 mt-16'
      >
        <img src="./whats-new.png" alt="" />
      </motion.div>


    </motion.div>
  </section>
);

export default WhatsNew;
