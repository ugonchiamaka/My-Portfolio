import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
function Experience({
  experienceRef,
  setActiveSection,
  setExperienceView,
  experienceView,
}: any) {
  const [selected, setSelected] = useState(0);
  // const ref = experienceRef;
  const container = useRef(null);
  const isInViewExperience = useInView(experienceRef, {
    once: false,
    margin: "0px",
  });
  useEffect(() => {
    if (isInViewExperience) {
      // setActiveSection(1); // Set the active section to Experience when in view
      setExperienceView(true);
    } else {
      setExperienceView(false);
    }
  }, [isInViewExperience, setExperienceView]);

  // useEffect(() => {
  //   const transformSelected = () => {
  //     const underline = document.querySelector<HTMLElement>(".underline");
  //     underline!.style.top = `${selected * 2.5}rem`;
  //   };
  //   transformSelected();
  // }, [selected]);
  const expereinces = [
    {
      name: "2021 - PRESENT",
      role: "Software Engineer • Prunedge",
      url: "https://www.rapidops.com",
      start: "NOV 2021",
      end: "PRESENT",
      shortDescription: [
        "Build, maintain and ship high quality software solutions based on client requirements. Test and refine software prior to rollout. Design and implement digital experiences for a diverse array of projects including Document and Expenditure Management System, Learning Management System for different schools, Human Resource Management System. Provide ideas and leadership withing the team through close collaboration, knowledge, shares and providing mentorship to interns.",
      ],
      langType: [
        "Javascript",
        "Typescript",
        "React",
        "Storybook",
        "Tailwind",
        "Next",
        "Material-ui",
        "React-Query",
        "Redux",
        "Redux-toolkit",
      ],
    },
    {
      name: "Mathwork",
      role: "Software Engineer • Bundo",
      url: "https://www.mathwork.com",
      start: "DEC 2023",
      end: "PRESENT",
      shortDescription: [
        "Build, style, design systems and implement digital experiences for an e-commerce platform. Work closely with cross functional teams, including developers, designers, and product managers to implement and advocate for best practices in web accessibility.",
      ],
      langType: ["Javascript", "Typescript", "Tailwind", "Next", "React-Query"],
    },

    {
      name: "CodeLabd",
      role: "Internship • CodeLab",
      url: "https://www.mathwork.com",
      start: "MAY 2022",
      end: "NOV 2022",
      shortDescription: [
        "Developed and styled different interactive web apps. Replicated few social media platforms including WhatsApp and Telegram. Collaborated with other interns to create new brands, design systems and websites for schools, organisations and small businesses in the community. I also Created simple Api's for small projects",
      ],
      langType: [
        "React",
        "Javascript",
        "Styled-component",
        "Firebase",
        "Node",
        "Express",
        "Mongodb",
      ],
    },
    // {
    //   name: "Edunet Foundation",
    //   role: "Artificial Intelligence Intern",
    //   url: "https://www.edunetfoundation.org",
    //   start: "June 2023",
    //   end: "July 2023",
    //   shortDescription: [
    //     "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
    //     "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
    //     "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    //   ],
    // },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {/* <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div> */}

      <div>
        {/* <motion.div
          // className="about"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 0 },
          }}
        > */}

        <div className="title">
          <h2>EXPERIENCE</h2>
        </div>
        {/* </motion.div> */}

        <div ref={experienceRef} className="wrapper">
          {expereinces.map((expereince, index) => {
            return (
              <div key={expereince.name} className="wrap">
                <div className="container">
                  <ul className="exp-slider">
                    <li
                    // className={`exp-slider-item ${
                    //   index === selected && "exp-slider-item-selected"
                    // }`}
                    // onClick={() => setSelected(index)}
                    >
                      <p className="exp-details-range">
                        {expereince.start} — {expereince.end}
                      </p>
                      {/* <span>{expereince.name}</span> */}
                    </li>
                  </ul>
                  <div className="exp-details">
                    <div className="exp-details-position">
                      <p className="exp-details-position-header">
                        <span>{expereince.role}</span>
                        {/* <span className="exp-details-position-company"></span> */}
                      </p>

                      <ul className="exp-details-list">
                        <li key={index} className="exp-details-list-item">
                          {expereince.shortDescription}
                        </li>
                      </ul>
                      <div
                        style={{
                          marginTop: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          width: "100%",
                          gap: "6px",
                        }}
                      >
                        {expereince.langType.map((prop, idx) => {
                          return (
                            <button
                              key={idx}
                              className="exp-details-list-item-buttonType"
                            >
                              {prop}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div ref={experienceRef} />
              </div>
            );
          })}
          <Link
            href={
              "https://drive.google.com/file/d/1TqNHO02ZtLhRyCpgrGYjSh-q4YvfwhlB/view?usp=sharing"
            }
            className="link-wrap"
          >
            <span>View Full Résumé </span>
            <span className="link-icon">
              {" "}
              <FiExternalLink />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
