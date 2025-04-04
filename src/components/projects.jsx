import { motion } from "framer-motion";
import Header from "./heading";
import "../css/projects.css";
import { link } from "motion/react-client";

const projects = [
    {id : 1, title : 'ScriptureLM',  image: '/pensieve.webp',
        description : ' AI-powered semantic search and text summarisation using FastAPI, FAISS, and Google LongT5 LLM',
        tags : ['Python', 'FastAPI', 'LLM', 'FAISS', 'Google LongT5'],
        link:'https://github.com/anubhavsingh1729/scriptureLM'
    },
    {id: 2, title : 'GitHub Commit Data Analysis', image:'',
        description : 'PySpark pipeline for processing GitHub commits and visualizing trends.',
        tags : ['Python', 'PySpark', 'Data Analysis'],
        link:''
    },
    {id: 3, title : 'Road Scene Understanding for Visually Impaired', image:'',
        description : 'Sidewalk detection using DeepLabV3+ for visually impaired navigation.',
        tags : ['Python', 'DeepLabV3+', 'Computer Vision'],
        link:''
    },
    {id: 4, title : 'Road Scene Understanding for Visually Impaired', image:'',
        description : 'Sidewalk detection using DeepLabV3+ for visually impaired navigation.',
        tags : ['Python', 'DeepLabV3+', 'Computer Vision'],
        link:''
    },
    {id: 5, title : 'Road Scene Understanding for Visually Impaired', image:'',
        description : 'Sidewalk detection using DeepLabV3+ for visually impaired navigation.',
        tags : ['Python', 'DeepLabV3+', 'Computer Vision'],
        link:''
    }
]


const ProjectItem = ({ project,index}) => {
    return (
        <motion.div className="card"
            initial={{ opacity: 0, scale: 0, z: -500 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut"}}
            viewport={{ amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="card-header">
                <img src = {project.image} />
            </div>
            <div className="card-content">
            <div className="card-title">
                <a href = {project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </div>
            <p>{project.description}</p>
            <div className="tags">
                {project.tags.map((tag,index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            </div>
        </motion.div>
    )
};

const Projects = () => {
  return (
    <div className="project-container">
        <Header heading={"Projects"} />
        <div className="projects">
        {projects.map((project,index) => (
            <ProjectItem key={project.id} project={project} index={index}/>
        ))}
        </div>
    </div>
  );
};

export default Projects;
