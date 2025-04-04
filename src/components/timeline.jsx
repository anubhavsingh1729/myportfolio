import { motion } from "framer-motion";
import "../css/timeline.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const timelineData = [
  {id : 1, degree : 'MSc. Data Science', university : 'FAU Erlangen', 
      year:'Oct 2022 - Mar 2025', location:'Erlangen, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
      project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
      courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
          'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
          'Artificial Intelligence', 'Machine learning In finance.'],
      img: '/timeturner.gif',type:"ed"
  },

  {id : 2, degree : 'Student Researcher', university : 'FAU Erlangen', 
      year:'Apr 2024 - Sep 2024', location:'Erlangen, Germany', specialization:'', project: '','courses' : [],
      img: '/timeturner.gif',type:'emp'
  },
  {id : 3, degree : 'Data Analyst & ETL Developer', university : 'TCS, India', 
      year:'Feb 2021 - Aug 2022', location:'Delhi, India', specialization: '', 
      project: '',
      courses : [],
          img: '/timeturner.gif',type:'emp'
  },

  {id : 4, degree : 'B.Tech CSE', university : 'JUET, Guna', 
      year:'July 2016 - Aug 2020', location:'Guna, India', specialization:'', project: 'Project: Image Captioning','courses' : [],
      img: '/timeturner.gif',type:'ed'
  }
]

const VerticalTimeline = () => {
  return (
    <div className="timeline-container">
        <div class="heading-container">
            <span className="line"></span> 
            <span className="diamond"></span>
            <span>◆</span>
            <span class="title">Education and Work Experience</span>
            <span>◆</span>
            <span className="diamond"></span>
            <span className="line"></span>
        </div>
      {timelineData.map((item,index) => (
        <div className="items">
          <div className="icon">
          <FontAwesomeIcon icon={item.type === 'ed' ? faGraduationCap : faBriefcase} /> 
          </div>
              {/* <div key = {index} className={`item-container ${item.id % 2 === 0 ? "left" : "right"}`}> */}
              <motion.div
                key={index}
                className={`item-container magic-glow ${index % 2 === 0 ? "left" : "right"}`}
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
                </div>
            </motion.div>
          </div>
      ))}
    </div>
  );
}

export default VerticalTimeline;
