import { motion } from "framer-motion";
import developer from "../assets/images/developer.png";
import Education from "./Education";
const AboutMe = () => {
  return (
    <>
       <div id="about" className="flex flex-col">
      <div className=" bg-[#F4FAFF] text-[#113264]  lg:h-[80vh]  3xl:px-48 lg:px-24 flex lg:flex-row flex-col lg:justify-between items-center">
        {/* Animation sur l'image */}
        <div className="w-full lg:w-4/12 my-12 p-5 flex justify-center">
          <motion.img
            className="lg:w-10/12 3xl:w-8/10 w-3/4 object-cover block mx-auto"
            src={developer}
            alt="Developer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Animation sur le texte et le titre */}
        <div className="lg:w-1/2 p-4 w-full flex flex-col items-center gap-5 lg:items-start">
          <motion.h1
            className="lg:text-6xl text-4xl gradient-text text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-md p-10 lg:p-0 w-full leading-8 lg:text-start text-[#113264]   font-bold dark:font-normal"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0. }}
          >
          I am a passionate Full-Stack Developer specializing in building dynamic and scalable web applications. Proficient in modern technologies such as React, Laravel, PHP, Python, SQL, and Tailwind, I focus on optimizing performance and delivering seamless user experiences. I leverage Git and GitHub for version control and use Jira for agile project management. Additionally, I ensure code quality with tools like SonarQube.


            <br/>
          Currently working as a Full-Stack Developer at FSCodersHub, I design and implement custom solutions following Agile/Scrum methodologies. Driven by innovation, I continuously seek new challenges to enhance my skills and contribute to impactful projects.
          </motion.p>
        </div>
     
      </div>
       <Education/>
      <div className="blob" style={{ opacity: 1 }}></div>
      <div className="fakeblob"></div>
    </div>

    </>
  );
};

export default AboutMe;
