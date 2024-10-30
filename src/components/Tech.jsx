import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants"; // Ensure your technologies are organized as shown earlier
import { styles } from "../styles";
import azureIcon from "../assets/tech/azure.png"; // Ensure you have an Azure icon or relevant placeholder image
import "./Techcard.css";

const Tech = () => {
  const TechCard = ({ index, icon, name }) => {
    return (
      <Tilt className="w-28 h-28">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full fireball-gradient shadow-fireball select-none"
        >
          <div
            options={{ max: 45, scale: 1, speed: 1500 }}
            className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={`${name} icon`} className="w-16 h-16 object-contain" />
            <p className="text-white text-center">{name}</p> {/* Added name display */}
          </div>
        </motion.div>
      </Tilt>
    );
  };

  const CertificationCard = () => (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="certification-card bg-tertiary shadow-card rounded-[20px] p-6 mb-10 flex flex-col items-center"
    >
      <img src={azureIcon} alt="Azure Certification" className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-white text-[24px] font-bold text-center">
        Microsoft Certified: Azure AI Fundamentals (AI-102)
      </h3>
      <p className="text-secondary text-center mt-2">
        This certification showcases my skills in designing and implementing AI solutions on Azure, focusing on computer vision, NLP, and conversational AI.
      </p>
      <div className="mt-4">
        <a
          href="https://learn.microsoft.com/api/credentials/share/en-us/Arsathmohamed-8886/A799B0DE94F0E95C?sharingId=D3EE77C919919C11" // Link to AI-102 certification details
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:underline"
        >
          View Certification Details
        </a>
      </div>
    </motion.div>
  );

  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}>
          Technologies.
        </h2>
      </div>

      {/* Certification Section */}
      <CertificationCard />

      {/* Technologies Section */}
      <div className="relative w-full h-auto flex flex-col gap-10 mt-20">
        {Object.keys(technologies).map((role) => (
          <div key={role} className="flex flex-col items-center">
            <h3 className="text-2xl text-white mb-4">{role.replace(/([A-Z])/g, ' $1').trim()}</h3> {/* Role title */}
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {technologies[role].map((technology, index) => (
                <TechCard icon={technology.icon} key={technology.name} index={index} name={technology.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
