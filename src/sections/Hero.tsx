import Button from "../components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import Navbar from "./Navbar";
function Hero({
  activeSection,
  setActiveSection,
  experienceView,
  aboutView,
  projectView,
}: any) {
  return (
    <div
      className="hero"
      // style={{
      //   height: "100%",
      //   display: "flex",
      //   alignItems: "space-between",
      //   flexDirection: "column",
      // }}
    >
      {/* <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi, my name is
      </motion.h1> */}
      <div style={{ marginBottom: "3rem" }}>
        <motion.h5
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.75,
          }}
        >
          Judith Ugonna
        </motion.h5>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.05,
          }}
        >
          Frontend Engineer
        </motion.h3>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35,
          }}
        >
          I build pixel-perfect, engaging, and accessible fluid web experiences.
          {/* am an experienced software engineer with interest in creating fluid
        web experiences, bringing forth expertise in developing, designing,
        testing and maintenance of software systems. */}
        </motion.p>
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          experienceView={experienceView}
          aboutView={aboutView}
          projectView={projectView}
        />
      </div>

      <div
        style={{
          height: "100%",
          alignItems: "end",
          display: "flex",
          paddingBottom: "30rem",
        }}
      >
        <SocialIcons />
      </div>

      {/* <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my LinkedIn"
          link="https://www.linkedin.com/in/judith-ugonna-77966619b/"
        />
      </motion.div> */}
      {/* <div
        style={{
          position: "sticky",
          // height: "100%",
          bottom: 0,
          left: "0",
          // width: "100%",
          // display: "flex",
          height: "100%",
          alignItems: "end",
          // flex: 1,
          // margin: "auto",
          // justifyContent: "start",
          // padding: "0 3rem",
          // marginLeft: "1.5rem",
          // bottom: 0,
        }}
      >
        <SocialIcons />
      </div> */}
    </div>
  );
}

export default Hero;
