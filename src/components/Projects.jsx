import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = ({ darkMode }) => {

  const projects = [
    {
      id: 1,
      title: "Life-Coaching",
      desc: "A professional life-coaching website built with WordPress.",
      image: project1,
      tags: ["WordPress"],
      code: "https://github.com/farzana2005",
      demo: "https://lightpink-sheep-138410.hostingersite.com/",
    },
    {
      id: 2,
      title: "Health Platform",
      desc: "Modern healthcare platform with booking and CMS features.",
      image: project2,
      tags: ["WordPress"],
      code: "https://github.com/farzana2005",
      demo: "https://quantummhwc.com/",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      desc: "Full-featured e-commerce solution with secure checkout.",
      image: project3,
      tags: ["WordPress"],
      code: "https://github.com/farzana2005",
      demo: "https://stashtoonz.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: darkMode ? "#111827" : "#f9fafb" }}
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "#fff" : "#1f2937" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border overflow-hidden transition-all
              ${
                darkMode
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/40"
                  : "bg-white border-gray-200 hover:border-orange-500/40"
              }`}
            >

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "#fff" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-4"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-xs rounded-full
                      ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  {/* Code Button */}
                  <a
                    href={project.code}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2
                    text-sm rounded-lg transition
                    ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <FaGithub />
                    Code
                  </a>

                  {/* Demo Button (CONDITIONAL STYLE) */}
                  <a
                    href={project.demo}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2
                    text-sm rounded-lg transition-all
                    ${
                      darkMode
                        ? "border border-orange-500/40 bg-transparent"
                        : "bg-gradient-to-r from-orange-500 to-amber-500"
                    }
                    hover:shadow-lg hover:shadow-orange-500/30`}
                  >
                    <FaExternalLinkAlt
                      className={
                        darkMode
                          ? "text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text"
                          : "text-white"
                      }
                    />
                    <span
                      className={
                        darkMode
                          ? "font-medium text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text"
                          : "text-white font-medium"
                      }
                    >
                      Demo
                    </span>
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
