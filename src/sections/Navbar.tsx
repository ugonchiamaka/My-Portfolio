import Button from "../components/Button";
import Logo from "../components/Logo";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState, useRef } from "react";
import { inView, motion, useInView } from "framer-motion";
function Navbar({
  activeSection,
  setActiveSection,
  experienceView,
  aboutView,
  projectView,
}: any) {
  const ref = useRef(null);
  // const isInView = useInView(ref);
  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const [tabName, setTabName] = useState("ABOUT");
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Projects", link: "/#project" },
    // {
    //   name: "Contact",
    //   link: "/#contact",
    // },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 350
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  useEffect(() => {
    if (aboutView) {
      setActiveSection(0);
      setTabName("ABOUT");
    } else if (experienceView) {
      setActiveSection(1);
      setTabName("EXPERIENCE");
    } else if (projectView) {
      setActiveSection(2);
      setTabName("PROJECT");
    }
  }, [
    aboutView,
    activeIndex,
    activeSection,
    experienceView,
    projectView,
    setActiveSection,
  ]);

  // console.log("amemm", { projectView }, activeSection, navbarVisible, {
  //   activeIndex,
  // });
  // console.log("heyey", activeSection, {
  //   projectView,
  //   experienceView,
  //   aboutView,
  // });

  return (
    <nav
      style={{
        width: "100%",
        // transition: "0.3s ease-in-out",
        // zIndex: 15,
        // // 121B2E
        // // 0F1931
        // backgroundColor: navbarVisible ? "black" : "",
        // boxShadow: navbarVisible ? "0 10px 30px -10px var(--navy-shadow)" : "",
        // backdropFilter: navbarVisible ? "blur(10px)" : "",
        // height: navbarVisible ? "80px" : "",
        // display: "flex",
        // alignItems: "center",
        // position: "fixed",
        // top: "0",
        // left: "0",
        // right: "0",
      }}
      className={navbarVisible ? "nav-container" : ""}
      // className="nav-bar"
    >
      {/* ${navbarVisible ? "blur-nav" : ""} */}
      <div
        className={`wrapper 
    
      `}
      >
        <div className={navbarVisible ? "navi-wrap" : "navii-wrap"}>
          {aboutView ? (
            <h2>{tabName}</h2>
          ) : experienceView ? (
            <h2 className="title">{tabName}</h2>
          ) : projectView ? (
            <h2 className="title">{tabName}</h2>
          ) : (
            ""
          )}
        </div>
        {/* <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href="">
            <Logo />
          </Link>
        </motion.div> */}
        {/* <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div> */}
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => {
              return (
                <div
                  key={name}
                  onClick={() => {
                    setActiveSection(index);

                    setActiveIndex(index);
                  }}
                >
                  <motion.li
                    key={name}
                    className={`${
                      // (activeIndex === index && "nav-items-list-item-active") ||
                      index === activeSection && "nav-items-list-item-active"
                    } nav-items-list-item`}
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    <Link
                      href={link}
                      className="nav-items-list-item-link"
                      // onClick={() => {
                      //   setActiveSection(index);
                      //   setActiveIndex(index);
                      // }}
                    >
                      {name}
                    </Link>
                  </motion.li>
                </div>
              );
            })}
          </ul>
          {/* <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button
              text="Resume"
              link="https://drive.google.com/file/d/1F2XBez0VWpZ0w_26ChovLkcZt9GVCZte/view?usp=sharing"
            />
          </motion.div> */}
        </div>
      </div>
    </nav>
    // <nav
    //   style={{
    //     width: "100%",
    //     transition: "0.3s ease-in-out",
    //     zIndex: "100",
    //     marginLeft: "15px",
    //     // 121B2E
    //     // backgroundColor: navbarVisible ? "#0F1931" : "",
    //     // boxShadow: navbarVisible ? "0 10px 30px -10px var(--navy-shadow)" : "",
    //     // backdropFilter: navbarVisible ? "blur(10px)" : "",
    //     // height: navbarVisible ? "80px" : "",
    //     display: "flex",
    //     alignItems: "center",
    //   }}
    // >
    //   <motion.div
    //     className="nav-responsive-toggle"
    //     initial={{ opacity: 0, y: 5 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{
    //       duration: 0.3,
    //       ease: "easeInOut",
    //     }}
    //   >
    //     {/* {responsiveNavVisible ? (
    //       <CgClose
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           setResponsiveNavVisible(false);
    //         }}
    //       />
    //     ) : (
    //       <GiHamburgerMenu
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           setResponsiveNavVisible(true);
    //         }}
    //       />
    //     )} */}
    //   </motion.div>
    //   {/* <ul className="nav-items-list">
    //     {sectionLinks.map(({ name, link }, index) => (
    //       <motion.li
    //         key={name}
    //         className="nav-items-list-item"
    //         initial={{ opacity: 0, y: -25 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{
    //           duration: 0.3,
    //           ease: "easeInOut",
    //           delay: 0.3 + index * 0.1,
    //         }}
    //       >
    //         <Link href={link} className="nav-items-list-item-link">
    //           {name}
    //         </Link>
    //       </motion.li>
    //     ))}
    //   </ul> */}
    // </nav>
  );
}

export default Navbar;
