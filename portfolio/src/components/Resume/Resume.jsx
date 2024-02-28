import React from "react";

import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";

import "./Resume.css";
function Resume() {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headerText='My Resume'
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='timeline'>
        <div className='timeline_experience'>
          <h3 className='timeline_experience_header-text'>Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor='var( --yelllow-theme-main-color)'
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className='timeline_experience_vertical-timeline-element'
                contentStyle={{
                  background: "none",
                  color: "var( --yellow-theme-sub-text-color)",
                  border: " 1.5px solid var(  --yelllow-theme-main-color)",
                }}
                date='2021-present'
                icon={<GrUserExpert />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-sub-text-color)",
                }}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3>{item.title}</h3>

                  <h4>{item.subTitle}</h4>
                </div>
                <p className='vertical-timeline-element-title-wrapper-description'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className='timeline_education'>
          <h3 className='timeline_experience_header-text'>Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor='var( --yelllow-theme-main-color)'
          >
            {data.education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className='timeline_education_vertical-timeline-element'
                contentStyle={{
                  background: "none",
                  color: "var( --yellow-theme-sub-text-color)",
                  border: " 1.5px solid var(  --yelllow-theme-main-color)",
                }}
                date='2021-present'
                icon={<MdOutlineWorkOutline />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-sub-text-color)",
                }}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3>{item.title}</h3>

                  <h4>{item.subTitle}</h4>
                </div>
                <p className='vertical-timeline-element-title-wrapper-description'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
