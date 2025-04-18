import React from "react";
import { motion } from "framer-motion";
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import javascript from '../assets/images/javascript.svg';
import php from '../assets/images/php.svg';
import python from '../assets/images/python.svg';
import sql from '../assets/images/sql.jpg';
import nosql from '../assets/images/mongo.png';
import Chatbot from '../assets/images/Chatbot.jpg';
import react from '../assets/images/react.svg';
import laravel from '../assets/images/laravel.png';
import tailwind from '../assets/images/tailwind.svg';
import vitejs from '../assets/images/vitejs.svg';
import jquery from '../assets/images/jquery.svg';
import git from '../assets/images/git.png';
import github from '../assets/images/github.svg';
import figma from '../assets/images/figma.svg';
import jira from '../assets/images/jira.svg';
import sonarqube from '../assets/images/sonarqube.png';
import canva from '../assets/images/canva.png';
import ia from '../assets/images/ia.png';
import cloud from '../assets/images/cloud.png';
import agile from '../assets/images/agile.png';
import open from '../assets/images/open.png';
import Wordpress from '../assets/images/Wordpress-Logo.png';
import optmi from '../assets/images/optmi.jpg';
import Bootstrap_logo from '../assets/images/Bootstrap_logo.svg';

const logos = {
  html, css, javascript, php, python, sql, nosql, react, laravel, tailwind,
  vitejs, jquery, git, github, figma, jira, sonarqube, canva, ia, cloud, agile, open, Wordpress, Chatbot, optmi, Bootstrap_logo
};

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "HTML", logo: logos.html },
      { name: "CSS", logo: logos.css },
      { name: "JavaScript", logo: logos.javascript },
      { name: "PHP", logo: logos.php },
      { name: "Python", logo: logos.python },
      { name: "SQL", logo: logos.sql },
      { name: "MongoDB", logo: logos.nosql },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", logo: logos.react },
      { name: "Laravel", logo: logos.laravel },
      { name: "TailwindCSS", logo: logos.tailwind },
      { name: "Bootstrap", logo: logos.Bootstrap_logo },
      { name: "ViteJS", logo: logos.vitejs },
      { name: "jQuery", logo: logos.jquery },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", logo: logos.git },
      { name: "GitHub", logo: logos.github },
      { name: "Figma", logo: logos.figma },
      { name: "Jira", logo: logos.jira },
      { name: "SonarQube", logo: logos.sonarqube },
      { name: "Canva", logo: logos.canva },
      { name: "WordPress", logo: logos.Wordpress },
    ],
  },
  {
    category: "Interests",
    skills: [
      { name: "Cloud Computing", logo: logos.cloud },
      { name: "DevOps", logo: logos.agile },
      { name: "Open Source Contributions", logo: logos.open },
      { name: "AI in Web Development", logo: logos.ia },
      { name: "Chatbots", logo: logos.Chatbot },
      { name: "Web Optimization", logo: logos.optmi },
    ],
  }
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="h-[12rem] min-w-[10rem] p-6 bg-[#FBFDFF] dark:bg-[#2d3748] text-[#113264] dark:text-[#e2e8f0] rounded-xl shadow-lg flex flex-col items-center justify-center"
    initial={{ opacity: 0, rotateY: -180 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    whileHover={{ rotateY: 180 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      type: "spring",
      stiffness: 80,
    }}
    viewport={{ once: true }}
    aria-label={`Skill: ${skill.name}`}
  >
    <motion.img
      src={skill.logo}
      alt={`${skill.name} logo`}
      className="py-5 w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full border-4 border-gray-300 dark:border-[#4a5568] shadow-md object-contain"
      initial={{ rotateY: 180 }}
      whileHover={{ rotateY: 0 }}
      transition={{ duration: 0.3 }}
    />
    <p className="font-medium text-[#113264] dark:text-[#e2e8f0] text-center text-xs sm:text-base">
      {skill.name}
    </p>
  </motion.div>
);

const SkillCategory = ({ category, skills }) => (
  <motion.div
    className="mb-12 md:mx-24"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h3
      className="text-3xl font-semibold text-[#113264] dark:text-[#cbd5e1] text-center mb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {category}
    </motion.h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
      {skills.map((skill, idx) => (
        <SkillCard key={idx} skill={skill} index={idx} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="lg:p-10 px-5 overflow-hidden relative">
      <h2 className="text-4xl font-extrabold text-[#113264] dark:text-[#F4FAFF] bg-transparent text-center mb-12">
        My Skills
      </h2>
      {skillsData.map((category, index) => (
        <SkillCategory key={index} category={category.category} skills={category.skills} />
      ))}
    </section>
  );
};

export default Skills;