import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About({ aboutRef, aboutView, setAboutView }: any) {
  const isInView = useInView(aboutRef, {
    once: false,
  });
  useEffect(() => {
    if (isInView) {
      setAboutView(true);
    } else {
      setAboutView(false);
    }
  }, [aboutView, isInView, setAboutView]);

  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <motion.div
          // className="about"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -35 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <div className="title">
            <h2>ABOUT</h2>
          </div>
        </motion.div>

        <div className="about-grid" ref={aboutRef}>
          <div className="about-grid-info">
            <p className="about-grid-info-text text-justify">
              {/* I am passionate and versatile technologist with a strong foundation
            in software development. 
            I thrive on the intersection of creativity
            and technology, constantly exploring new ways to innovate and solve
            complex problems. */}
              {/* In 2022, When I decided to switch carrer into tech, I found myself
            recycyling over a less complex project, One of these projects was a
            calculator  */}
              I specialize in building robust web applications with React,
              Next.Js, and Tailwind CSS, an experience with Node.Js and Express
              for backend development. I’ve had the privilege of building
              software for{" "}
              <span
                style={
                  {
                    // color: "var(--lightest-slate)",
                    // fontWeight: 700,
                    // cursor: "pointer",
                    //                 '&:hover' {
                    // color:' var(--theme-color)'
                    //                 }
                  }
                }
              >
                government parastatals
              </span>
              , banking agency, huge corporations, start-ups and an e-commerce
              platform.
              {/* I am passionate and versatile technologist with a strong
            foundation in software development. I thrive on the intersection of
            creativity and technology, constantly exploring new ways to innovate
            and solve complex problems. */}
            </p>

            <p className="about-grid-info-text text-justify">
              My main focus these days is building accessible user interfaces
              for clients. I mostly enjoy building software in the sweet spot
              where design and engineering meet — things that look good but are
              also built well under the hood. As a Javascript and Typescript
              enthusiast, I&apos;ve honed my skills through hands-on experience
              and personal development.
              {/* In my free time, */}
            </p>
            <p className="about-grid-info-text text-justify">
              {/* I specialize in React.JS, Next.JS, Node.JS, Express, Javascript, and
            Typescript, */}
              {/* with hands-on experience.  */}
              When I’m not at the computer, I’m usually dancing, reading,
              singing, hanging out with my family and friends.
            </p>
            {/* <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p> */}

            {/* <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Typescript</li>
          </ul> */}
          </div>
          {/* <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="https://lohitcdn.blob.core.windows.net/portfoliocdn/Etc/lohit.webp"
              alt="profile"
              fill
              sizes="100vw" // Add appropriate sizes
            />
          </div>
        </div> */}
          <div ref={aboutRef} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
