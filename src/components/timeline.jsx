import { motion } from "framer-motion";
import React from "react";
import "../css/timeline.css"
import Header from "./heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { desc } from "motion/react-client";

const timelineData = [
  {id : 1, degree : 'MSc. Data Science', 
    university : 'Friedrich-Alexander-Universität', 
      year:'Oct 2022 - Mar 2025', location:'Erlangen, Germany', 
      project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
      description : 'Specialisation: Machine Learning / Artificial Intelligence',
      img: '/timeturner.gif',type:"ed"
  },

  {id : 2, degree : 'Student Researcher', 
    university : 'FAU Professorship for Open-Source Software', 
      year:'Apr 2024 - Sep 2024', location:'Erlangen, Germany',  
      project: '',
      img: '/timeturner.gif',type:'emp',
      description: 'Managed an independent research project analyzing Github commit data. Designed unit and Integration test scripts for Pyspark data pipelines. Developed dashboards to visualize git commit metrics productivity and trends'
  },
  {id : 3, degree : 'Data Analyst & ETL Developer', 
    university : 'Tata Consultancy Services', 
      year:'Feb 2021 - Aug 2022', location:'Delhi, India',  
      project: '',
      description:'Developed and deployed data-driven solutions in an agile environment for pharmaceutical manufacturing client, focused on data integration, analytics and Business Intelligence reporting',
      img: '/timeturner.gif',type:'emp'
  },

  {id : 4, degree : 'B.Tech Computer Science and Engineering', 
    university : 'Jaypee University of Engineering and Technology', 
      year:'July 2016 - Aug 2020', location:'Guna, India', 
      project: 'Project: Image Captioning',
      img: '/timeturner.gif',type:'ed',
      description: ''

  }
]

const VerticalTimeline = () => {
  return (
    <div className="timeline-container">
      <Header heading={"Education and Work Experience"} />
      {timelineData.map((item,index) => (
        <div className="items">
          <div className="icon">
          <FontAwesomeIcon icon={item.type === 'ed' ? faGraduationCap : faBriefcase} /> 
          </div>
              <motion.div
                key={index}
                // className={`item-container magic-glow ${index % 2 === 0 ? "left" : "right"}`}
                className={`item-container magic-glow`}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y:50 }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)",y:0}} 
                viewport={{ amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                onViewportLeave={(entry) => entry.target.style.opacity = 0} 
              >
                <div className="notch"></div>
                <div className="item-content">
                  <h2>{item.degree}</h2>
                  <h3>{item.university}</h3>
                  <p>{item.year}</p>
                  <p>{item.project}</p>
                  <p>{item.description}</p>
                </div>
            </motion.div>
          </div>
      ))}
    </div>
  );
}

export default VerticalTimeline;
