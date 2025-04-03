import { motion } from "framer-motion";
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

const EduItem = ({ title,specialization, university,location,year,project,courses,index}) => {
  return (
    <motion.div
    className = "education-item"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <h2>{specialization}</h2>
      <p>{university}</p>
      <p>{location}, {year}</p>
      <p>{project}</p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="education">
        <div class="heading-container">
            <span class="line"></span> 
            <span class="diamond"></span>
            <span>◆</span>
            <div class="round-icon">
                <img src="/timeturner.gif" alt="Time Turner" />
            </div>
            <span>◆</span>
            <span class="diamond"></span>
            <span class="line"></span>
        </div>
        <div className="magicline">
            <div className="education-container">
            {education.map((edu,index) => (
                <EduItem key={edu.id} title={edu.degree} specialization={edu.specialization} 
                    university={edu.university} location={edu.location} year={edu.year} project={edu.project}
                    courses={edu.courses} index={index}/>
            ))}
            </div>
        </div>

        {/* <div className="education-container">
        {education.map((edu) => (
            <EduItem key={edu.id} title={edu.degree} specialization={edu.specialization} 
                university={edu.University} location={edu.location} year={edu.year} project={edu.project}
                courses={edu.courses}/>
        ))}
        </div> */}

    </div>
  );
};

export default Education;
