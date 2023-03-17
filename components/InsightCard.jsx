'use client';

import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { Arrow } from '../public';

const InsightCard = ({title,subtitle,imgUrl,index}) => (
  <motion.div
  variants={fadeIn('right','spring',index * 0.5,0.75)}
  className='flex md:flex-row flex-col gap-4' >

        <div className='h-full'>
          <img src={imgUrl} className='md:w-[270px] w-full h-[250px] object-cover rounded-[32px]' alt="" />
        </div>
        <div className='w-full flex justify-between items-center '>
          <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
            <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{title}</h4>
            <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white'>{subtitle}</p>
          </div>
          <div className='lg:hover:rotate-[30deg] transition-transform duration-200 lg:flex hidden w-[100px] h-[100px] items-center justify-center cursor-pointer border-solid border-white border-2 rounded-full p-4'>
            <Arrow />
          </div>
        </div>
        
  </motion.div>
);

export default InsightCard;
