import React from "react";
import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

function Skills() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
        headerText='My Skills'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default Skills;
