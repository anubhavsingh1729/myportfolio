import React from 'react';
import "../css/introduction.css";

const Introduction = () => {
  const introText = "I solemnly swear that I am up to no good";
  return (
      <section id="introduction" className="introduction">
        <h2 className='intro-head'>
          {introText}
        </h2>
        <div className='intro-text'>
        Master’s in data science with industry experience in Data analytics, ETL development and BI reporting. 
        Experienced in managing independent projects, working in international cross-functional teams, 
        conducting explorative data analyses, and implementing efficiency-enhancing solutions in digitalization initiatives. 
        Proficient in Python, Machine learning, SQL, PowerBI and Tableau.
        </div>
    </section>
  )
};

export default Introduction;