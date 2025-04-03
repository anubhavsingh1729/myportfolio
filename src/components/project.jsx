import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../css/education.css"; 

const education = [
    {id : 1, degree : 'MSc. Data Science', university : 'Friedrich-Alexander-Universität', 
        year:'2022-2025', location:'Erlangen-Nürnberg, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
        project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
        courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
            'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
            'Artificial Intelligence', 'Machine learning In finance.']
    },

    {id : 2, degree : 'B.Tech Computer Science and Engineering', university : 'Jaypee University of Engineering and Technology', 
        year:'2016-2020', location:'Guna, India', specialization:'', project: 'Project: Image Captioning','courses' : []
    },
    {id : 3, degree : '3 MSc. Data Science', university : 'Friedrich-Alexander-Universität', 
        year:'2022-2025', location:'Erlangen-Nürnberg, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
        project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
        courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
            'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
            'Artificial Intelligence', 'Machine learning In finance.']
    },

    {id : 4, degree : '4 B.Tech Computer Science and Engineering', university : 'Jaypee University of Engineering and Technology', 
        year:'2016-2020', location:'Guna, India', specialization:'', project: 'Project: Image Captioning','courses' : []
    }
]

const EduItem = ({ title, specialization, university, location, year, project, courses, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`education-cards ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <h3>{title}</h3>
      <h2>{specialization}</h2>
      <p>{university}</p>
      <p>{location}, {year}</p>
      <p>{project}</p>
    </motion.div>
  );
};

const Project = () => {
  const lineControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      lineControls.start({ height: "100%" });
    }
  }, [inView, lineControls]);

  return (
    <div className="education">
      <div className="heading-container">
        <span className="line"></span>
        <span className="diamond"></span>
        <span>◆</span>
        <div className="round-icon">
          <img src="/timeturner.gif" alt="Time Turner" />
        </div>
        <span>◆</span>
        <span className="diamond"></span>
        <span className="line"></span>
      </div>
      <motion.div className="magicline" animate={lineControls} initial={{ height: "0%" }}>
        <div className="education-container2">
          {education.map((edu, index) => (
            <EduItem key={edu.id} {...edu} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
