import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function Projects({
  projectRef,
  setActiveSection,
  setProjectView,
  projectView,
}: any) {
  const isInViewProject = useInView(projectRef, { once: true, margin: "0px" });
  const navigate = useRouter();

  const projectsData = [
    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718724697/prowoks_buffi6_newProwoks_5_gijmiy.png",
      projectName: "Business Process Automation System.",
      projectLink:
        "https://github.com/lohitkolluri/mental_health_fitness_tracker/blob/master/mental_health_tracker.pdf",
      projectDescription:
        "A comprehensive solution aimed at streamlining business operations and ehancing business efficiency. This is a state govermental workflow, it detail the process of signing contract, tracking of workflows and movement of documents from one workbench to the next, thereby  enhancing efficiency for Ekiti state, other states, government parastatals, it's permanent secretaries, and other business enterprises.",
      projectTech: ["React", "Typescript", "Material Ui", "Django"],
      projectExternalLinks: {
        github: "https://github.com/Prunedge-Dev-Team/proworks-web",
        externalLink: "https://proworks-oyo.vercel.app/signin",
      },
    },

    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718817694/dfa_xvfz0d.png",
      projectName: "Digital for All Challenge. (DFA)",
      projectLink: "https://code.lohitkolluri.tech",
      projectDescription:
        "This platform is designed to reward self-development and encourage the acquisition and use of digital skills through competitive incentives. It is a free digital skill-building competition and program to increase digital literacy in Nigeria and igniting interest in obtaining digital skills and certifications using online platforms.",
      projectTech: ["React", "GraphQL", "Material UI"],
      projectExternalLinks: {
        github: "https://github.com/Prunedge-Dev-Team/delta-lms-web",
        externalLink: "digitalforall.tech4dev.com",
      },
    },
    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718740406/dslmsss_ca40k9.png",
      projectName: "Delta State Learning Platform.",
      projectLink: "https://code.lohitkolluri.tech",
      projectDescription:
        "This is a state governemt digital learning platform for student. it carter for the materials, the examination and for the ease of learning in a multitenant platform where the school are sitting on a subdomain.",
      projectTech: ["React", "GraphQL", "Material UI"],
      projectExternalLinks: {
        github: "https://github.com/Prunedge-Dev-Team/delta-lms-web",
        externalLink: "https://dslms.ng/",
      },
    },
    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718815256/edge_zz5x7w.png",
      projectName: "Edge Human resource and Payroll.",
      projectLink: "https://code.lohitkolluri.tech",
      projectDescription:
        "A Self Customisable Software as a Service (SaaS) Human Resource and Payroll Service Provider. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform",
      projectTech: ["React", "GraphQL", "Material UI"],
      projectExternalLinks: {
        github: "https://github.com/Prunedge-Dev-Team/delta-lms-web",
        externalLink: "https://digitalforall.tech4dev.com/",
      },
    },
    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718813533/keystone_rh685y.png",
      projectName: "Keystone Human resource & Payroll.",
      projectLink: "https://v2.lohitkolluri.tech",
      projectDescription:
        "A Self Customisable Internal App Human Resource and Payroll for keystone Bank. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform. ",
      projectTech: ["React", "Django", "Typescript", "Tailwind CSS"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://keystone-hrms-dev.netlify.app",
      },
    },

    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718816565/docuplier_fa8idw.png",
      projectName: "Docuplier.",
      projectLink: "https://code.lohitkolluri.tech",
      projectDescription:
        "A Self Customisable Software as a Service (SaaS). Thie patform help organisations and individuals to effortlessly generate and personalize certificates, badges, and invitations. It also send, issue and the ability to download up to 250 copies to boast trainings, events and programs which are easily shareable on linkedin, via emails and WhatsApp.",
      projectTech: ["React", "Typescript", "Express", "Material UI"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://docuplier.com/",
      },
    },

    {
      image:
        "https://res.cloudinary.com/dwb2p1beg/image/upload/v1718968265/mipade_xfelvq.png",
      projectName: "MIPAD Event",
      projectLink: "https://v2.lohitkolluri.tech",
      projectDescription: "Event registration and tracking platform for MIPAD",
      projectTech: ["React", "Django", "Material UI"],
      projectExternalLinks: {
        github: "",
        externalLink: "https://events.mipad.org/events",
      },
    },
  ];

  useEffect(() => {
    if (isInViewProject) {
      // setActiveSection(2); // Set the active section to Experience when in view
      setProjectView(true);
    } else {
      setProjectView(false);
    }
  }, [isInViewProject, setActiveSection, setProjectView, projectView]);

  return (
    <motion.div
      className="projects"
      id="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      style={{ zIndex: window.innerWidth <= 768 ? -1 : 1 }}
    >
      <div
        className="projects"
        id="project"

        // style={{ backgroundColor: "red" }}
      >
        {/* <motion.div
          className="title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: 60 },
            hidden: { opacity: 0, y: 0 },
          }}
        > */}
        <div className="title">
          <h2>PROJECT</h2>
        </div>
        {/* </motion.div> */}
        <div className="projects-container" ref={projectRef}>
          {projectsData.map(
            ({
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            }) => {
              return (
                <motion.div
                  className="project"
                  key={projectName}
                  initial="hidden"
                  id="project"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                  onClick={() =>
                    navigate.push(projectExternalLinks.externalLink)
                  }
                >
                  {/* <div className="project-image"> */}
                  {/* <div className="project-image-overlay"></div> */}
                  <div className="project-image-container">
                    <Image
                      src={image}
                      // fill
                      loading="lazy"
                      alt={projectName}
                      quality={100}
                      width={90}
                      height={90}
                      objectFit="cover"
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                  </div>
                  {/* </div> */}

                  <div className="project-info">
                    {/* <p className="project-info-overline">Featured Project</p> */}
                    <div className="wrap">
                      {" "}
                      <h3 className="">{projectName}</h3>
                      <ul className="project-info-links">
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.externalLink}
                            className="project-info-links-item-link"
                          >
                            <FiExternalLink />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Contributor</span>
                      <li className="project-info-links-item">
                        <Link
                          href={projectExternalLinks.github}
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link>
                      </li>
                    </div> */}
                    <div className="project-info-description">
                      <p style={{ textAlign: "justify" }}>
                        {projectDescription}{" "}
                        {/* <li className="project-info-links-item"> */}
                        {/* <Link
                          href={projectExternalLinks.github}
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link> */}
                        {/* </li> */}
                      </p>
                    </div>

                    <ul
                      className="project-info-tech-list"
                      // style={{
                      //   display: "flex",
                      //   justifyContent: "space-between",
                      //   width: "100%",
                      // }}
                    >
                      {projectTech.map((tech) => (
                        <li className="project-info-tech-list-item" key={tech}>
                          {tech}
                        </li>
                      ))}
                      {/* <li className="project-info-links-item">
                        <Link
                          href={projectExternalLinks.github}
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
