import { motion } from "framer-motion";
import "../css/timeline.css";

const education = [
    {id : 1, degree : 'MSc. Data Science', University : 'Friedrich-Alexander-Universität Erlangen-Nürnberg', 
        year:'2022-2025', location:'Erlangen, Germany', specialization: 'Machine Learning / Artificial Intelligence', 
        project: 'Deterministic Classification of Git Commits for Transfer Pricing Functions',
        courses : ['Deep Learning', 'Patten Recognition', 'Methods of Advanced Data Engineering', 
            'Knowledge Discovery in Databases', 'AI in Medical Robotics', 'Biomedical Signal Analysis', 
            'Artificial Intelligence', 'Machine learning In finance.']
    },

    {id : 2, degree : 'B.Tech Computer Science and Engineering', University : 'Jaypee University of Engineering and Technology', 
        year:'2016-2020', location:'Guna, India', project: 'Image Captioning','courses' : []
    }
]

const TimelineItem = ({ title, description }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const TimeTurnerTimeline = () => {
  return (
    <div className="timeline">
        <div class="heading-container">
            <span class="line"></span> 
            <span class="diamond">◆</span>
            <div class="round-icon">
                <img src="/timeturner.gif" alt="Time Turner" />
            </div>
            <span class="diamond">◆</span>
            <span class="line"></span>
        </div>
        {education.map((edu) => (
            <TimelineItem key={edu.id} title={edu.degree} description={`${edu.University} ${edu.specialization}
            ${edu.year} - ${edu.location}`} />
        ))}

    </div>
  );
};

export default TimeTurnerTimeline;