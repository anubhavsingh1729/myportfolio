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
      description : ['Specialisation: Machine Learning / Artificial Intelligence',
        "Major Subjects: Artificial intelligence, Pattern recognition, Deep learning, AI software applications, Machine learning in finance, Knowledge discovery in databases, Biomedical Signal Analysis, AI in medical Robotics."
      ],
      img: '/timeturner.gif',type:"ed"
  },

  {id : 2, degree : 'Student Researcher', 
    university : 'FAU Professorship for Open-Source Software', 
      year:'Apr 2024 - Sep 2024', location:'Erlangen, Germany',  
      project: '',
      img: '/timeturner.gif',type:'emp',
      description: [
        "Managed an independent research project analyzing Github commit data.",
        "Designed unit and Integration test scripts for Pyspark data pipelines",
        "Developed dashboards to visualize git commit metrics productivity and trends."
      ]
  },
  {id : 3, degree : 'Data Analyst & ETL Developer', 
    university : 'Tata Consultancy Services', 
      year:'Feb 2021 - Aug 2022', location:'Delhi, India',  
      project: '',
      description:["Worked in an agile project on data integration, analysis, and Business Intelligence reporting for a pharmaceutical manufacturing client.",
        "Improved system efficiency, reducing development time by 25% through workflow redesign.",
        "Deployed PowerBI reporting solution for RFID-based asset tracking, drug API genealogy and product history tracking, automating monitoring and boosting efficiency.",
        "Built and deployed Tableau Pending Actions Dashboard, integrating multiple data sources and reducing task resolution delays by 40%.",
        "Led SSRS and SAP BO to Power BI migration, cutting maintenance costs by 30%.",
        "Automated incident management tasks with Linux scripts, reducing manual effort by 50%.",
        "Collaborated with stakeholders to gather requirements, design efficient documentation, ensure data quality, and drive continuous improvements."
        ],
      img: '/timeturner.gif',type:'emp'
  },

  {id : 4, degree : 'B.Tech Computer Science and Engineering', 
    university : 'Jaypee University of Engineering and Technology', 
      year:'July 2016 - Aug 2020', location:'Guna, India', 
      project: 'Project: Image Captioning',
      img: '/timeturner.gif',type:'ed',
      description: ["Major Subjects: Data Structures, Object Oriented Programming, Database Systems, Fundamentals of Algorithm, Computer Networks, Operating System, Software Engineering, Theory of Computation, Compiler Design, Data Science, AI and Cognitive Sciences, Neural Network, Image Processing"]

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
                        {selectedItem.description.length>0 && (
                            <ul className="description-list">
                                {selectedItem.description.map((des,index)=>(
                                    <li key={index}>{des}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Education;
