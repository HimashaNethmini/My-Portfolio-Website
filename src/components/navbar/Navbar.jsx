import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>

      {/*sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}>
          Hello
       </motion.span>

        <div className="social">

            <a href='https://github.com/HimashaNethmini'><img src="github.png" alt="" /></a>
            {/*<a href='https://www.linkedin.com/in/himasha-nethmini-4b32a1231/'><img src="/linkedin.png" alt="" /></a>*/}
            <a href='https://www.linkedin.com/in/himasha-nethmini-4b32a1231/'><img src="1.png" alt="" /></a>
            <a href='#'><img src="youtube.png" alt="" /></a>
            <a href='https://www.hackerrank.com/profile/himashanethmini1'><img src="hackerrank.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
