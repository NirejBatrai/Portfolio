import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id='home' className='home'>
      <div className='home_text-wrapper'>
        <h1>
          Hello, I am Nirej
          <br />
          Front end developer
        </h1>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className='home_contact-me'>
          <button onClick={handleNavigateToContactMePage}>
            Hire me please
          </button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
