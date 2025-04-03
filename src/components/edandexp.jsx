import { motion } from "framer-motion";
import "../css/edandexp.css"

const edandexp = [
    {id : 1, degree : 'MSc. Data Science', university : 'Friedrich-Alexander-Universität', 
        year:'2022-2025', location:'Erlangen-Nürnberg, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
        project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
        courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
            'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
            'Artificial Intelligence', 'Machine learning In finance.'],
        img: '/timeturner.png'
    },

    {id : 2, degree : 'B.Tech Computer Science and Engineering', university : 'Jaypee University of Engineering and Technology', 
        year:'2016-2020', location:'Guna, India', specialization:'', project: 'Project: Image Captioning','courses' : [],
        img: '/timeturner.png'
    },
    {id : 3, degree : '3 MSc. Data Science', university : 'Friedrich-Alexander-Universität', 
        year:'2022-2025', location:'Erlangen-Nürnberg, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
        project: 'Thesis: Deterministic Classification of Git Commits for Transfer Pricing Functions',
        courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
            'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
            'Artificial Intelligence', 'Machine learning In finance.'],
            img: '/timeturner.png'
    },

    {id : 4, degree : '4 B.Tech Computer Science and Engineering', university : 'Jaypee University of Engineering and Technology', 
        year:'2016-2020', location:'Guna, India', specialization:'', project: 'Project: Image Captioning','courses' : [],
        img: '/timeturner.png'
    }
]


const EduItem = ({ edu,index}) => {
    return (
        <motion.div className="card">
            <motion.div className= "card-container"
                whileHover={{ scale: 0.4, x: "-30%", y: "30%" }}
                transition={{ duration: 0.5 }}
            >
                <img src = {edu.img} className="card-image" />
            </motion.div>
            <div className="card-content">
            <h2>{edu.degree}</h2>
            <h3>{edu.university}</h3>  
            </div>
                
        </motion.div>
    )
};

const EdandExp = () => {
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

        <div className="education-container">
        {edandexp.map((edu,index) => (
            <EduItem key={edu.id} edu={edu} index={index}/>
        ))}
        </div>
    </div>
  );
};

export default EdandExp;
