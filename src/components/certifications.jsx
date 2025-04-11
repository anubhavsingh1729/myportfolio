import { motion } from "framer-motion";
import "../css/certifications.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Header from "./heading";

const certificates = [
    {title : 'Machine Learning with TensorFlow', 
        link: 'https://www.coursera.org/account/accomplishments/specialization/LUUUST8RM56P', 
        description: "Google Cloud Platform"},
    {title : 'Image and Video Processing', 
        link: 'https://coursera.org/verify/M3J9XCCWTP5H', 
        description: "Duke University "},
    {title : 'Introduction to Data Analytics for Business', 
        link: 'https://coursera.org/verify/VM4KLJZHAZNC', 
        description: "University of Colorado Boulder"},
    {title : 'Introduction to Data Science in Python', 
        link: 'https://www.coursera.org/account/accomplishments/verify/SQP9NZ53GUNV', 
        description: "University of Michigan"},
    {title : 'Natural Language Processing', 
        link: 'https://coursera.org/verify/6JZLWAVTKGZK', 
        description: "Higher School of Economics"}
];


const Certifications = () => {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="certificate-container">
            <Header heading={"Certifications"} />
            <div className="certificate-content">
            {certificates.map((certificate,index) => (
                <motion.div className="certificate-card">
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                    <div className="certificate-header">
                    <h2>{certificate.title}</h2>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="certificate-icon" />
                    </div>
                    </a>
                    <h3>{certificate.description}</h3>
                </motion.div>
            ))}
            </div>
        </div>
    )
}

export default Certifications;