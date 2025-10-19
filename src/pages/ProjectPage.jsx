import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = {
  "lung-nodule-detection": {
    title: "Lung Nodule Detection",
    description:
      "A deep learning project using CNNs to detect and classify lung nodules in CT scans.",
  },
  "customer-behavior": {
    title: "Customer Behavior Analysis",
    description:
      "Analyzing user retention and purchase trends using Python, Pandas, and scikit-learn.",
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) return <p>Project not found</p>;

  return (
    <motion.div
      className="min-h-screen px-6 py-20 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="max-w-2xl mx-auto text-lg">{project.description}</p>
    </motion.div>
  );
}
