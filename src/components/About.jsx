import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'

import {fadeIn, textVariant} from '../utils/motion'

import '../styless.css'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full p-[2px] rounded-[20px] bg-gradient-to-r from-pink-500 via-indigo-500 to-teal-300 shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center' style={{ fontFamily: 'Dreaming Outloud Pro' }}>
            {title}
          </h3>

        </div>

      </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mb-4`}>
        Introduction
        </p>
        <h3 className='text-white font-extrabold text-[50px]'>
        Overview.
        </h3>
        
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500 bg-clip-text text-transparent text-[17px] max-w-3xl leading-[30px]'>
      I am a very dedicated and hardworking CS and AI student at University of Edinburgh in my penultimate year. I am also a visiting student at ETH Zurich. I have a strong passion for AI and software development. I am currently working on projects to enhance my skills and profile. I am always eager to learn new things and I am always looking for new challenges.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}

      </div>
    </>
  )
}

export default SectionWrapper( About, "about")