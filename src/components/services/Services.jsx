import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

//make animation
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  //map to function
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am passionate about learning and growing
          <br />
          in a wide range of technologies
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title1">
          <p>
            Hello <span style={{ color: "orange" }}>!</span> I'm Himasha
            Nethmini, a Final year undergraduate at University of SLIIT,
            pursuing a BSc (Hons) Spec. in Information Technology. I am a person
            with a heart full of curiosity and a head buzzing with creativity.
            Whether it's tinkering with design, coding, problem-solving or
            diving into the world of IT, I find joy in every aspect of what I
            do. My journey is painted with a palette of experiences that have
            sculpted me into someone who's not just about the skills but also
            about the journey. I believe in continuous learning, collaboration,
            committment, and always bring a positive vibe to the table. If
            you're looking for someone who's not just a professional but also a
            friendly face, let's connect! I'm all ears for new conversations and
            adventures. Can't wait to chat and explore where creativity takes
            us!{" "}
          </p>
          <p className="title2">
            Hey there <span style={{ color: "orange" }}>!</span> I'm Himasha Nethmini, a final-year IT undergrad at SLIIT.
            I'm not just passionate about coding and design—I'm on a journey
            fueled by curiosity and creativity. I bring a positive vibe, love
            collaborating, and I'm committed to continuous learning. If you're
            seeking not just a professional but a friendly, enthusiastic
            teammate, let's connect! I'm ready for new conversations and
            exciting adventures. Can't wait to chat and explore the
            possibilities together! 😊
          </p>
        </div>

        <div className="type">
          <button>WHAT I DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fullstack App</h2>
          <p>
            I have experiences in developing numerous seamless user-friendly and
            responsive ( respond to different screens ) websites and web
            applications using MERN stack, Next Js, Angular and Springboot
            (Java). Please check my github for more details.
          </p>
          <a href="https://github.com/HimashaNethmini/Digital_Business">Go</a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI / UX Design </h2>
          <p>
            I have experiences in designing several websites in aspects of
            UI/UX. Recently, I have redesign a cupcake website after identifying
            numerous usability and user-friendly issues. I have used Figma to
            design UI/UX. Take a look
          </p>
          <a href="https://www.figma.com/proto/M6EcRtZslfmWjooM8zJT9h/Home-page?node-id=2-2&starting-point-node-id=2%3A2">
            Go
          </a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database </h2>
          <p>
            I specialized in application development, favoring MongoDB & MySQL
            as my go-to DB. Majority of the app, uses MongoDB. Additionally, I
            bring experience in Oracle to ensure versatility in handling diverse
            database needs.
          </p>
          <a href="#">Go</a>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Mobile App </h2>
          <p>
            As in semester, I have developed a mobile application in Android
            studio using Java. Furthermore, I am currently developing a mobile
            application using React Native for the final year research.
          </p>
          <a href="#">Go</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;