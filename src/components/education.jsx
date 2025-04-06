import { motion } from "framer-motion";
import React, { useState } from "react";
import "../css/education.css"
import Header from "./heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const education = [
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

const Education = () => {

    const [selectedItem, setSelectedItem] = useState(education[0]);

    return (
        <div className="education-container">
            <Header heading={"Education and Work Experience"} />
            <div className="education-content">
                <div className="left-content">
                    <div className = "title-cards">
                        {education.map((item, index) => (
                            <div className={`item-card ${selectedItem.id === item.id ? 'active':''}`} 
                                key={item.id} 
                                onClick={() => setSelectedItem(item)}>
                                <div className="card-content">
                                    <h2>{item.degree}</h2>
                                    <p>{item.university}</p>
                                    <div className="ed-icon">
                                        <FontAwesomeIcon icon={item.type === 'ed' ? faGraduationCap : faBriefcase} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-content">
                    <div className="item-details">
                        <h2>{selectedItem.degree}</h2>
                        <h3>{selectedItem.university}</h3>
                        <p>{selectedItem.year}</p>
                        <p>{selectedItem.location}</p>
                        <p>{selectedItem.project}</p>
                        <p>{selectedItem.description}</p>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Education;
