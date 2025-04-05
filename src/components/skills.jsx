import React from "react";
import Header from "./heading";
import "../css/skills.css";
import elderwand from "/elderwand.png";
import stone from "/stone.png";
import cloak from "/cloak.png";

const skills = [
    { id: 1,
      title: "Elder Wand",
      description: "Power, mastery and advanced technical prowess — the most powerful tools in my arsenal.",
      items: [
        "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy",
        "HuggingFace Transformers", "Pattern Recognition",,
        "DeepLabV3+", "CNN", "RNN", "LSTM",
        "Spacy", "BERT", "LongT5", "SentenceTransformers",
        "ReactJS", "HTML", "CSS", "NLP"
      ],
      image:elderwand
    }, 
    { id :2,
      title: "Resurrection Stone",
      description: "Bringing ideas to life, revealing patterns and visualizing the unseen.",
      items: [
        "SQL", "Matplotlib", "Seaborn","PowerBI", "Tableau",
        "Office365","Latex"
      ],
        image:stone
    },
    { id: 3,
      title: "Cloak of Invisibility",
      description: "Subtle yet powerful — the interpersonal and collaborative skills that make things flow effortlessly.",
      items: [
        "Project Presentation", "Requirement Gathering", 
        "Client & Stakeholder Communication",
        "Cross-functional Team Collaboration",
        "Git & GitHub"
      ],
      image:cloak
  }
];

const Skills = () => {
    return  (
        <div className="skills">
            <Header heading="Skills" />
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">
                        <img src={skill.image} alt={skill.title} className="skill-image" />
                      </div>
                        <p>{skill.description}</p> 
                        <ul className="skill-list">
                            {skill.items.map((item, index) => (
                                <li className="skill-pill" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Skills;