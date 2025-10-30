import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Lung Cancer Detection and Classification",
      desc: "Master's research using enhanced YOLOv11 with multi-dilation attention for pulmonary nodule detection in CT images.",
      slug: "lung-nodule-detection",
      tech: ["Python", "YOLOv11", "PyTorch", "LIDC-IDRI"],
      category: "Machine Learning"
    },
    {
      title: "KTV Customer Behavior Analysis",
      desc: "Comprehensive analysis of KTV customer behavior using machine learning to predict spending patterns and demographics.",
      slug: "customer-behavior-analysis",
      tech: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
      category: "Data Science"
    },
    {
      title: "Otsu Image Processing",
      desc: "Digital image processing technique implementation using Otsu's method for automatic thresholding.",
      slug: "otsu-image-processing",
      tech: ["C++", "OpenCV", "CMake", "Python"],
      category: "Computer Vision"
    },
    {
      title: "Simple Yugioh Card Database",
      desc: "Web application for browsing and searching Yu-Gi-Oh! trading card game database.",
      slug: "simple-yugioh-card-database",
      tech: ["HTML", "CSS", "JavaScript", "Web APIs"],
      category: "Web Development"
    },
    {
      title: "BadApple Terminal Animation",
      desc: "C++ program that renders the Bad Apple animation in terminal using OpenCV for image processing.",
      slug: "badapple-terminal-animation",
      tech: ["C++", "OpenCV", "CMake", "Terminal Graphics"],
      category: "Graphics Programming"
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 max-w-full mx-auto text-center dark:bg-gray-900"
    >
      <h3 className="text-3xl font-semibold mb-10 text-indigo-600 dark:text-indigo-400">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projects/${p.slug}`}>
            <motion.div
              className="bg-white dark:bg-gray-500 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-left">{p.title}</h4>
              <p className="text-gray-600 dark:text-gray-100 text-left mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
