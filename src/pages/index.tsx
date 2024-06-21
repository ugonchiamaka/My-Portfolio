import Head from "next/head";
import Email from "../components/Email";
import Loader from "../components/Loader";
import SocialIcons from "../components/SocialIcons";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import React, { useEffect, useRef, useState } from "react";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import { useInView } from "framer-motion";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [experienceView, setExperienceView] = useState(false);
  const [projectView, setProjectView] = useState(false);
  const [aboutView, setAboutView] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Judith Ugonna</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="DgzOS3oNMuUQ4Y1sU7x860SgyvsYvnd1BCWQLFu0KT8"
        />
      </Head>
      {showContent && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: "red",
              display: "flex",
              flexDirection: "column",
              // gap: "30rem",
            }}
          >
            <main
              style={{
                width: "100%",
                padding: 0,
              }}
            >
              <div className="main-wrap">
                <div
                  style={{
                    // width: "100%",
                    height: "100%",
                    // margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Hero
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    experienceView={experienceView}
                    aboutView={aboutView}
                    projectView={projectView}
                  />
                  {/* <Navbar /> */}

                  {/* <div
                    style={{
                      position: "sticky",
                      // height: "100%",
                      bottom: 80,
                      left: 0,
                      // width: "100%",
                      display: "flex",
                      // margin: "auto",
                      // justifyContent: "start",
                      // padding: "0 3rem",
                      // marginLeft: "1.5rem",
                    }}
                  >
                    <SocialIcons />
                  </div> */}
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <About
                    aboutRef={aboutRef}
                    aboutView={aboutView}
                    setAboutView={setAboutView}
                  />
                  <Experience
                    experienceRef={experienceRef}
                    setExperienceView={setExperienceView}
                    experienceView={experienceView}
                    // setActiveSection={setActiveSection}
                  />
                  <Projects
                    projectRef={projectRef}
                    setActiveSection={setActiveSection}
                    setProjectView={setProjectView}
                    projectView={projectView}
                  />
                  {/* <Contact /> */}
                </div>
              </div>
              {/* </div> */}
            </main>
          </div>
          {/* <Footer /> */}
        </div>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
