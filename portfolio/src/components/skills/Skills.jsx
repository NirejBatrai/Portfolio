import React from "react";
import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { FaBrain } from "react-icons/fa";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./Skills.css";

function Skills() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent headerText='My Skills' icon={<FaBrain size={40} />} />

      <div className='skills_content-wrapper'>
        {skillsData.map((item, i) => (
          <div key={i} className='skills_content-wrapper_inner-content'>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className='skills_content-wrapper_inner-content_category-text'>
                {item.label}
              </h3>
              <div className='skills_content-wrapper_inner-content_progressbar-container'>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    key={j}
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity: 0"]}
                    iterationCount='1'
                  >
                    <div className='progressbar-wrapper'>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth='4'
                        strokeColor='var(--yelllow-theme-main-color)'
                        trailWidth='5'
                        strokeLinecap='sqaure'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
