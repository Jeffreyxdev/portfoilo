import React from 'react'
import { motion } from 'framer-motion'
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svg";
import imf from "../Assets/jeffrey.jpg"
const Hero = () => {
  return (
    <div>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          <div>
            <div className="gradientText">
              <h1>
                Creative Software Engineer<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#000] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]">
              I build & lead solid and scalable products with great user experiences.
            </p>
            <div
              id="intro"
              className="text-[#000] font-pop flex-shrink-0 text-[1em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
                <p className="max-w-[310px]">
                I'm Jeffrey Agbaenwere  a 19-year-old self-taught builder with 4+ years of hands-on experience across web, mobile, and smart contract development. I specialize in shipping real products, blending design, engineering, and execution at startup speed.
              </p>
              <p className="max-w-[319px]">
                From launching live applications to leading cross-functional teams, I bring full-stack capability with founder-level thinking. I'm also an active voice in the Sui blockchain ecosystem  sharing insights as a developer educator, speaker, and content creator.
              </p>

            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://www.facebook.com/share/1A9DExajDF/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <FbIcon
                  fill="#1c2c61"
                  className={`w-[30px] h-[30px] rounded-full border-[#1c2c61] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://x.com/Jeffreyonsui"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#1c2c61`}
                  className={`w-[30px] h-[30px] rounded-full border-[#1c2c61] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/tlc_jeffrey"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#1c2c61`}
                  className={`w-[30px] h-[30px] rounded-full     border-[#1c2c61] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jeffrey-agabaenwere/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#1c2c61`}
                  className={`w-[30px] h-[30px] rounded-full border-[#1c2c61] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full`}>
              
                  <img src={imf}  alt="hero image"
                  width={400}
                  height={400}
                  className="absolute w-full h-full bottom-3 right-4 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12"
                  draggable={false}
                  priority/>
                
               
               
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] lg:min-h-[400px] border-[3px] border-[#1c2c61]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero