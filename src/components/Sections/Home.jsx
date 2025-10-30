import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen pt-8 md:pt-24 dark:bg-gray-900 dark:text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: -12 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Angus Wu</h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
        A passionate software engineer building modern web experiences.
      </p>
      <motion.a
        href={`#/projects`}
        onClick={(e) => {
          e.preventDefault();
          // Scroll to projects section
          const element = document.getElementById('projects');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        View My Work
      </motion.a>
    </motion.section>
  )
}
