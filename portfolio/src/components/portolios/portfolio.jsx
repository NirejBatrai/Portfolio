import React from "react";

import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

function portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        headerText='My Portfolio'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default portfolio;
