'use client'
import { easeInOut } from 'framer-motion';
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react';

const Loader = ({ Logo}) => {
    const [loading, setLoading] = useState(true);
    
    const container = {
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 200, rotate:90, },
        show: {
          opacity: 1,
          y: 0,
          rotate:180,
          transition: {
            ease: easeInOut,
            duration: 1,
          },
        },
        exit:{
          rotate:360,
        }
      };


    return(
    <motion.div 
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className='bg-white w-screen h-screen fixed z-50 flex justify-center items-center'>

        <motion.div 
            layoutId='logo-animate' variants={item}>
            <Image src={Logo}
                alt="fhflogo"
                width={200}
                height={54}
            />
        </motion.div>
    </motion.div>
  )
}

export default Loader