import React, { useState } from "react";
import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { FaComputer } from "react-icons/fa6";
import bike from "../../assets/bike.png";
import InvestCal from "../../assets/investmentcalculator.png";
import Tictactoe from "../../assets/tic.png";
import weatherdash from "../../assets/weatherdashboard.png";
import commingsoonImg from "../../assets/commingsoon1.png";
import "./portfolio.css";
import { Link } from "react-router-dom";
const portfolioData = [
  {
    id: 1,
    name: "Bike Renting App",
    image: bike,
    link: "https://statuesque-pie-efc306.netlify.app/",
  },
  {
    id: 2,
    name: "InvestMent Calculator",
    image: InvestCal,
    link: "https://golden-scone-3bb564.netlify.app/",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    image: Tictactoe,
    link: "https://quiet-dieffenbachia-61097e.netlify.app/",
  },
  {
    id: 4,
    name: "Weather DashBoard",
    image: weatherdash,
    link: "https://cool-snickerdoodle-df989c.netlify.app/",
  },
  {
    id: 5,
    name: "Comming Soon!!",
    image: commingsoonImg,
    link: "",
  },
];

function Portfolio() {
  const [hoveredValue, setHoverValue] = useState(null);
  //for hover in images

  function handleHover(index) {
    setHoverValue(index);
  }

  const handlePreview = (link) => {
    if (link) {
      window.open(link, "_blank"); // Opens link in a new tab
    } else {
      alert("Link not available.");
    }
  };

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        headerText='My Portfolio'
        icon={<FaComputer size={40} />}
      />

      <div className='portfolio_content'>
        <div className='portfolio_content_cards'>
          {portfolioData.map((item, index) => (
            <div
              className='portfolio_content_cards_item'
              key={item.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className='portfolio_content_cards_item_img_wrapper'>
                <img alt='dummy data' src={item.image} />
              </div>
              <div className='overlay'>
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.id <= 4 && ( // Render button only for items with id 1 to 4
                      <button onClick={() => handlePreview(item.link)}>
                        Preview
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
