import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Lung Nodule Detection",
      desc: "Machine learning model to detect and classify lung nodules in CT scans.",
      slug: "lung-nodule-detection"
    },
    {
      title: "Customer Behavior Analysis",
      desc: "Data science project using Python and ML to analyze customer retention.",
      slug: "customer-behavior-analysis"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 max-w-full mx-auto text-center dark:bg-gray-900"
    >
      <h3 className="text-3xl font-semibold mb-10 text-indigo-600 dark:text-indigo-400">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-8 mx-40">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projects/${p.slug}`}>
            <motion.div
              className="bg-white dark:bg-gray-500 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">{p.title}</h4>
              <p className="text-gray-600 dark:text-gray-100">{p.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
