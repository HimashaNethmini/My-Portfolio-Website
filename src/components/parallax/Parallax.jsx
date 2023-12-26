import React, {useRef} from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ( {type} ) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["start start", "end start"] //start animation when page is in the tab and end while it's scroll up
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); //control animation speed
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >

      <motion.h1 style={{ y: yText }}> 
        {type === "services" ? "Who Am I ?" : "What I Do ?"}
      </motion.h1>

      <motion.div className="mountains"></motion.div>

      <motion.div 
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}></motion.div>

{/*stars won't move here and there */}
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parallax;