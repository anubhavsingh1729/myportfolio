import { motion } from "framer-motion";
import "../css/edandexp.css"

const projects = [
    {id : 1, title : 'ScriptureLM', 
        description : ' AI-powered semantic search and text summarisation using FastAPI, FAISS, and Google LongT5 LLM'
    },
    {id: 2, title : 'GitHub Commit Data Analysis',
        description : 'PySpark pipeline for processing GitHub commits and visualizing trends.'
    },
    {id: 3, title : 'Road Scene Understanding ',
        description : 'Sidewalk detection using DeepLabV3+ for visually impaired navigation.'
    },
]


const Project = ({ edu,index}) => {
    return (
        <motion.div className="card">
            <motion.div className= "card-container"
                whileHover={{ scale: 0.4, x:"-30%",y:"30%"}}
                transition={{ duration: 0.5 }}
            >
            </motion.div>
            <div className="card-content">
            <h2>{edu.degree}</h2>
            <h3>{edu.university}</h3>
            <p>{edu.year}</p>
            </div>
        </motion.div>
    )
};

const EdandExp = () => {
  return (
    <div className="education">
        <div class="heading-container">
            <span className="line"></span> 
            <span className="diamond"></span>
            <span>◆</span>
            {/* <div class="round-icon">
                <img src="/timeturner.gif" alt="Time Turner" />
            </div> */}
            <span class="title">Education and Work Experience</span>
            <span>◆</span>
            <span className="diamond"></span>
            <span className="line"></span>
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
