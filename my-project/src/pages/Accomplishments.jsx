import React from "react";
import git from "../certification/git.png";
import aws from "../certification/aws.png";
import google from "../certification/google.png";
import IBM from "../certification/IBM.png";
import FI from "../certification/FI.png";
import usa from '../certification/USA-sql.png'
import cyber from '../certification/cyber.png'
import sky from '../certification/SKY.png'
import python  from '../certification/python.png'
import react  from '../certification/react.png'
import orange from '../certification/orange.png'
import ford from '../certification/ford.png'
import geo from '../certification/GEO.png'
import alc from '../certification/alc.png'
import tcf from '../certification/tcf.png'
import ia from '../certification/IA.png'
import Hire from "@/components/Hire";
import laravel from "../certification/laravel.jpg";
import wordpress from "../certification/wordpress.png";  
const Accomplishments = () => {
  const accomplishments = [
  
    {
      title: "Advanced React",
      subtitle: "Meta Certification",
      image: react,
      link: "https://coursera.org/share/09adda9c3a8343cc82eac0879ad38403",
      issued: "Dec 2024",
      credentialID: "09adda9c3a8343cc82eac0879ad38403",
      description: "Ce certificat atteste de ma maîtrise avancée de React, incluant la gestion d'état avec useState et useEffect, l'utilisation de React Router, et l'optimisation des performances.",
    },
    {
      title: "Agile Development and Scrum",
      subtitle: "IBM Certification",
      image: IBM,
      link: "https://www.coursera.org/account/accomplishments/verify/2QACWENIEHV6",
      issued: "Dec 2024",
      credentialID: "2QACWENIEHV6",
      description: "Compétences en méthodologies Agile, gestion de projets flexibles, et collaboration d'équipe.",
    },
    {
      title: "Version Control",
      subtitle: "Meta Certification",
      image: git,
      link: "https://www.coursera.org/account/accomplishments/verify/Y3A6MCBSIWK1",
      issued: "Dec 2024",
      credentialID: "Y3A6MCBSIWK1",
      description: "Acquisition des fondamentaux de la gestion de versions, avec une exploration des meilleures pratiques et outils pour le travail collaboratif.",
    },
    {
      title: "Certification Laravel",
      subtitle: "Orange Maroc",
      issued: "Dec 2024",
      image: laravel,
      skills: [
        "Laravel", "Authentication Systems", "Model-View-Controller (MVC)", 
        "Eloquent ORM", "MVC (Modèle-Vue-Contrôleur)", "Authentification et Sécurité"
      ],
      description: "Formation approfondie sur le framework Laravel, comprenant :\n\n- Développement d'applications web performantes et évolutives.\n- Gestion avancée des bases de données avec Eloquent ORM.\n- Création et sécurisation d’API RESTful.\n- Utilisation des fonctionnalités modernes : middleware, notifications, tâches planifiées.\n- Mise en œuvre de systèmes d'authentification et de gestion des rôles utilisateur.",
    },
   

    {
      title: "Structured Query Language",
      subtitle: "SQL Certification",
      image: usa,
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/GE%20Aerospace/fjk7MFbQbedPXb3ws_GE%20Aerospace_64397x2t3ZZASuuye_1727633435059_completion_certificate.pdf",
      issued: "Dec 2024",
      credentialID: "fjd7MFbQbedPXb3ws_GE",
      description: "Mastery of core database technologies: SQL, queries, database design, and optimization techniques.",
    },
    {
      title: "DevOps on AWS",
      subtitle: "AWS Certification",
      image: aws,
      link: "https://example.com/devops-certification",
      issued: "Dec 2024",
      credentialID: "AWS12345",
      description: "Gestion de code source, CI/CD, et tests automatisés avec AWS CodeSuite.",
    },
    {
      title: "UX/UI Design",
      subtitle: "Orange Certification",
      image: orange,
      link: "https://example.com/uxui-certification",
      issued: "Dec 2024",
      credentialID: "UXUID1234",
      description: "Maîtrise des principes fondamentaux UX/UI avec des outils comme Figma.",
    },
    {
      title: "Foundations of Project Management",
      subtitle: "Google Certification",
      image: google,
      link: "https://example.com/project-management-certification",
      issued: "Dec 2024",
      credentialID: "GooglePM123",
      description: "Planification, exécution, et suivi de projets en utilisant Agile et Waterfall.",
    },
    {
      title: "Digital Intro Job",
      subtitle: "Ford Certification",
      image: ford,
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Ford/kepAuhuGGuyc5guoh_Ford_64397x2t3ZZASuuye_1727257458728_completion_certificate.pdf",
      issued: "Dec 2024",
      credentialID: "kepAuhuGGuyc5guoh_Ford_64397x2t3ZZASuuye_1727257458728",
      description: "During this simulation, I completed various practical tasks, including: \n\n- Working with an existing codebase\n- Making changes to improve functionality and efficiency of projects\n\nThis experience helped me enhance my technical programming skills, problem-solving abilities, and adaptability to real-world project requirements, preparing me for challenges in the professional world.",
    },
  
    {
      title: "Explore Digital Technology",
      subtitle: "Geaerospace Certification",
      image: geo,
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/GE%20Aerospace/fjk7MFbQbedPXb3ws_GE%20Aerospace_64397x2t3ZZASuuye_1727633435059_completion_certificate.pdf",
      issued: "Dec 2024",
      credentialID: "fjd7MFbQbedPXb3ws_GE_1727633435059",
      description: "I completed a simulation focused on developing skills in digital technology. I gained experience in designing intuitive user interfaces and writing clear technical specifications. This certificate reflects my commitment to continuous learning and my preparedness to take on challenges in the tech field.",
    },
    {
      title: "Front-End Software Engineering",
      subtitle: "Skyscanner Certification",
      image: sky,
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_64397x2t3ZZASuuye_1727196004204_completion_certificate.pdf",
      issued: "Dec 2024",
      credentialID: "km4rw7dihDr3etqom_Skyscanner",
      description: "Completed the Front-End Software Engineering Job Simulation, demonstrating proficiency in React, HTML, CSS, and JavaScript, with real-world job simulation scenarios.",
    },
    {
      title: "Certificate of Achievement",
      subtitle: "English Language Program",
      image: alc,
      link: "https://alcrabat.org",
      issued: "Dec 2024",
      credentialID: "ALC12345",
      description: "This certificate confirms that Aymane Rachid successfully completed an English language learning program at the American Language Center (ALC) in Rabat. Through this program, Aymane developed strong skills in reading comprehension, oral expression, grammar, and vocabulary, demonstrating proficiency in English beyond the beginner level. He is now capable of communicating effectively in various situations and understanding intermediate-level texts.",
    },
    {
      title: "Front-End Development",
      subtitle: "Meta Certification",
      image: FI,
      link: "https://www.coursera.org/account/accomplishments/verify/LG9L68QPP3W8",
      issued: "Dec 2024",
      credentialID: "LG9L68QPP3W8",
      description: "Maîtrise des technologies fondamentales : HTML, CSS, JavaScript, et React, incluant des principes UX/UI.",
    },
    {
      title: "Python",
      subtitle: "Cisco Certification",
      image: python,
      link: "https://example.com/python-cisco-certification",
      issued: "Dec 2024",
      credentialID: "CiscoPython123",
      description: "Master the fundamentals of Python programming, including syntax, data structures, and object-oriented programming, as well as practical applications in automation and cybersecurity.",
    },
    {
      title: "Cybersecurity",
      subtitle: "Cisco Certification",
      image: cyber,
      link: "https://example.com/cybersecurity-certification",
      issued: "Dec 2024",
      credentialID: "CiscoCyberSec123",
      description: "Fundamentals of cybersecurity, including network security, risk management, and defense techniques.",
    },
    {
      title: "TCF",
      subtitle: "Europe Certification-2019",
      image: tcf,
      link: "https://example.com/tcf-certificate",
      issued: "2019",
      credentialID: "TCF2019",
      description: "I achieved Level B2 in the Test de Connaissance du Français (TCF), demonstrating my ability to communicate fluently and accurately in diverse contexts, both orally and in writing. This level certifies my capacity to understand complex texts, express ideas clearly, and engage in discussions on professional and technical topics.",
    },
    {
      title: "Créer un site Web gratuit avec WordPress",
      subtitle: "Coursera Course Certificates",
      image:wordpress,
            issued: "Dec 2024",
      credentialID: "GG7DXWS2GSFO",
      link: "https://coursera.org/share/09adda9c3a8343cc82eac0879ad38403",
      description: "J'ai créé un site web gratuit avec WordPress dans le cadre d'un projet en ligne autorisé par Coursera Project Network, terminé le 22 décembre 2024.",
    },
    {
      title: "L’IA pour tous",
      subtitle: "DeepLearning.AI Certification",
      image: ia,
      link: "https://www.coursera.org/account/accomplishments/certificate/R6QU8TTF3F76",
      issued: "Dec 2024",
      credentialID: "R6QU8TTF3F76",
      description: "Aymane Rachid completed 'L’IA pour tous,' a non-credit online course authorized by DeepLearning.AI. This course provided an introduction to artificial intelligence concepts, making AI accessible to everyone and emphasizing its applications in various fields.",
    }
  ];
  


  

  return (

    <div className="py-6 sm:py-8 lg:py-12 bg-[#F4FAFF] dark:bg-transparent">
    <Hire />
    <section className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
      {accomplishments.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-white border border-[#113264] rounded-lg shadow-md group transition-all duration-300 hover:bg-[#113264] hover:text-white"
        >
          {/* Conteneur pour l'image */}
          <div className="w-full h-[200px] sm:h-[220px] lg:h-[250px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
  
          {/* Conteneur pour le contenu */}
          <div className="p-4 text-center flex flex-col h-full">
  <h4 className="text-base sm:text-lg font-semibold text-[#113264] group-hover:text-[#F4FAFF] transition-colors text-nowrap lg:text-md">
    {item.title}
  </h4>
  <p className="text-sm sm:text-base text-[#5C8EB9] italic group-hover:text-[#F4FAFF] transition-colors">
    {item.subtitle}
  </p>

  {/* Date and Credential ID (if available) */}
  {item.issued && (
    <p className="mt-2 text-xs sm:text-sm text-[#5C8EB9] group-hover:text-[#F4FAFF] transition-colors">
      Issued: {item.issued}
    </p>
  )}

  {item.credentialID ? (
    <p className="mt-2 text-nowrap py-4 text-xs sm:text-sm text-[#5C8EB9] group-hover:text-[#F4FAFF] transition-colors">
      Credential ID:   {item.credentialID}
    </p>
  ) : (
    <p className="mt-2 text-nowrap py-4 text-xs sm:text-sm text-[#5C8EB9] group-hover:text-[#F4FAFF] transition-colors">
      Credential ID:UID1234
    </p>
  )}

  {/* View Credential Link */}


  <a
              href={item.link}
              className="mt-4 inline-block px-4 py-2 bg-[#113264] text-white text-sm sm:text-base rounded-md group-hover:bg-[#F4FAFF] group-hover:text-[#113264] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
</div>

        </div>
      ))}
    </section>
  </div>
  
  );
};

export default Accomplishments;
