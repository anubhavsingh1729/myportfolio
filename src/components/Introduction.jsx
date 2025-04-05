import React from 'react';
import "../css/introduction.css";
import cloudLeft from "/clouds-left.png";
import cloudRight from "/clouds-right.png";
import MaraudersMap from './homepage';

const Introduction = () => {
  const introText = "I solemnly swear that I am up to no good";
  return (
      <section id="introduction" className="introduction">
        <img src={cloudLeft} alt="Cloud Left" className="cloud cloud-left" />
        <img src={cloudRight} alt="Cloud Right" className="cloud cloud-right" />
        <MaraudersMap />
        {/* <div className='intro-text'>
        <p>Master’s in data science with industry experience in Data analytics, ETL development and BI reporting. 
        Experienced in managing independent projects, working in international cross-functional teams, 
        conducting explorative data analyses, and implementing efficiency-enhancing solutions in digitalization initiatives. 
        Proficient in Python, Machine learning, SQL, PowerBI and Tableau.</p>
        </div> */}
    </section>
  )
};

export default Introduction;