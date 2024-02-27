import React from "react";
import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./About.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { MdOutlineHttps } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

const personalDetails = [
  {
    label: "Name",
    Value: "Nirej Gang",
  },
  {
    label: "Age",
    Value: 20,
  },
  {
    label: "Adress",
    Value: "Thailand",
  },
  {
    label: "Email",
    Value: "purampandey1234@gmail.com",
  },
  {
    label: "Contact Me",
    Value: "0813480300",
  },
];

const jobSummary =
  "Are you a motivated self-learner, currently pursuing studies at university while immersing yourself in the world of web development? With 3-4 months of dedicated JavaScript exploration under your belt and a tangible project like a motorbike rental website to showcase your skills, your poised for the next step in your journey. Eager to transition into a part-time, full-time, or internship role, you bring a hunger to learn new languages and technologies, coupled with a knack for problem-solving and collaboration. As you seek to apply your burgeoning expertise in a professional setting, your excited by the prospect of joining a team where your contributions will be valued, your growth nurtured, and your passion for coding ignited.";
function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText='About Me'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about_content'>
        <div className='about_content_personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End and Back End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className='personalInformationHeaderText'>
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about_content_servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className='about_content_servicesWrapper_innerContent'>
              <div>
                <SiGmail size={55} color='var(  --yelllow-theme-main-color)' />
              </div>
              <div>
                <FaLinkedinIn
                  size={57}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
              <div>
                <IoMdContact
                  size={60}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
              <div>
                <DiJsBadge
                  size={50}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
              <div>
                <FaReact size={60} color='var(  --yelllow-theme-main-color)' />
              </div>
              <div>
                <TbBrandNodejs
                  size={60}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
              <div>
                <MdOutlineHttps
                  size={60}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
              <div>
                <FaSquareGithub
                  size={55}
                  color='var(  --yelllow-theme-main-color)'
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
