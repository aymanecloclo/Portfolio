import { useState } from "react";

import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { useShowContext } from "./ShowProvider";
import { AllProject } from "@/Data/allProject";
const Project = () => {
     const show= useShowContext();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <div id="project" className="mt-10 lg:mb-24 lg:mt-32 sm:mt-20 px-4 sm:px-8 md:px-16 lg:px-48">
      <ul
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        role="list"
      >
        {AllProject.slice(0, visibleProjects).map((project) => (
          <li
            key={project.id}
            className="group relative flex flex-col items-start"
          >
            <div className="overflow-hidden relative z-10 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:ring-0">
              <img
                alt={show.language=='fr'?project.title.fr:project.title.en}
                className="w-full h-full object-cover"
                src={project.src}
                loading="lazy"
                decoding="async"
                onError={(e) => (e.target.src = "fallback-image-path.jpg")} // Fallback for image error
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-neutral-800 dark:text-neutral-100">
              <div className="border border-[#113264] absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-[#0588F0]/70 sm:-inset-x-6 sm:rounded-2xl shadow-lg "></div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
              >
                {project.title[show.language]}              </a>
            </h2>
            <p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {show.language=='fr'?project.content.fr:project.content.en}
            </p>

            {/* Display technologies used (ecs) */}
            <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-sm text-neutral-500 dark:text-neutral-300">
  {project.ecs.map((tech, index) => (
    <span
      key={index}
      className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 px-2 py-1 rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
    >
      {tech}
    </span>
  ))}
</div>


            <p className=" group-hover:text-[#113264] relative z-10 mt-6 flex text-sm font-medium text-neutral-400 transition group-hover:text-primary-500 dark:text-neutral-300 gap-4 items-center">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <span className="flex items-center gap-1 ">
                  live demo <HiMiniArrowTopRightOnSquare size={20} />
                </span>
              </a>

              {/* Tech Stack icons */}
              <span className=" cursor-pointer flex space-x-2 items-center gap-1 group-hover:text-[#113264]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2 items-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-[#113264] transition-colors duration-300 ease-in-out"
                    aria-label="Open project demo"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.74c-2.74.6-3.3-1.32-3.3-1.32-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.57 1.01 1.57 1.01.87 1.5 2.29 1.07 2.87.82.09-.63.34-1.07.62-1.32-2.33-.26-4.77-1.16-4.77-5.17 0-1.14.41-2.08 1.09-2.81-.11-.26-.47-1.31.1-2.72 0 0 .87-.28 2.85 1.06 1.35-.38 2.8-.57 4.22-.58s2.87.2 4.22.58c1.98-1.34 2.85-1.06 2.85-1.06.57 1.41.21 2.46.1 2.72.68.73 1.09 1.67 1.09 2.81 0 4.02-2.44 4.91-4.77 5.17.28.26.54.77.54 1.58v2.34c0 .26.18.57.68.48C21.12 20.16 24 16.42 24 12c0-5.52-4.48-10-10-10z"
                    />
                  </svg>
                  view on GitHub
                </a>
               
              </span>
            </p>
          </li>
        ))}
      </ul>

      {visibleProjects < AllProject .length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreProjects}
            className="my-7 flex items-center justify-center h-9 px-4 py-2 rounded-md bg-[#0D74CE] text-white font-medium text-sm transition-all duration-300 ease-out hover:bg-[#0D74CE]/90"
          >
            <span>More Projects</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
