import { motion } from "framer-motion";
import Header from "./heading";
import "../css/projects.css";
import { link } from "motion/react-client";

const projects = [
    {id : 1, title : 'ScriptureLM',  image: '/scripturelm.webp',
        description : ' AI-powered semantic search and text summarisation using FastAPI, FAISS, and Google LongT5 LLM',
        tags : ['Python', 'FastAPI', 'LLM', 'FAISS', 'Google LongT5'],
        link:'https://medium.com/@anubhavsingh1729/building-scripturelm-ai-powered-bible-study-with-semantic-search-and-summarization-b0b40e27daf3'
    },
    {id: 2, title : 'GitHub Commit Data Analysis', image:'/pyspark.png',
        description : 'PySpark pipeline for processing GitHub commits and visualizing trends.',
        tags : ['Python', 'PySpark', 'Data Analysis'],
        link:'https://medium.com/@anubhavsingh1729/aggregating-github-commit-data-using-a-pyspark-pipeline-0b3011a74017'
    },
    {id: 3, title : 'Road Scene Understanding for Visually Impaired', 
        image:'/deeplabv3.jpg',
        description : 'Sidewalk detection using DeepLabV3+ for visually impaired navigation.',
        tags : ['Python', 'DeepLabV3+', 'Computer Vision'],
        link:'https://github.com/anubhavsingh1729/RSU-VI'
    },
    {id: 4, title : 'Deterministic Classification of Git Commits', 
        image:'/bert.jpg',
        description : 'a machine learning-based framework for classifying GitHub commits according to the OECD\'s DEMPE functions, focusing on transfer pricing compliance.',
        tags : ['Python', 'Machine Learning', 'GitHub','Transfer Pricing','BERT','transfer learning'],
        link:'https://github.com/anubhavsingh1729/dempe-classification'
    },
    {id: 5, title : 'Correlation analysis: R&D investment and HDI', 
        image:'/made.png',
        description : 'analyze how government spending on research and development activity affects the trend in human development index.',
        tags : ['Python', 'Data Analysis', 'Correlation Analysis'],
        link:'https://github.com/anubhavsingh1729/MADE/blob/main/project/report.ipynb'
    }
]


const ProjectItem = ({ project,index}) => {
    return (
        <a className="card-link" href={project.link} target="_blank" rel="noopener noreferrer">
            <motion.div className="card"
                initial={{ opacity: 0, scale: 0, z: -500 }}
                whileInView={{ opacity: 1, scale: 1, z: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut"}}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.05, z: 0 }}
            >
                <div className="card-header">
                    <img src = {project.image} />
                </div>
                <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                    {project.tags.map((tag,index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                </div>
            </motion.div>
        </a>
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
