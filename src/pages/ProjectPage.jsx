import { useParams, useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Project details data
  const projectDetails = {
    "lung-nodule-detection": {
      title: "Lung Cancer Detection and Classification in Chest CT Images",
      category: "Machine Learning",
      tech: ["Python", "YOLOv11", "PyTorch", "OpenCV", "LIDC-IDRI Dataset", "Multi-Dilation Attention"],
      description: "Research on lung cancer detection and classification using enhanced YOLO architecture with deep learning techniques for pulmonary nodule detection in chest CT images.",
      overview: "This Master's thesis research explores the application of YOLO (You Only Look Once) architecture and deep learning techniques for the detection and classification of pulmonary nodules in chest CT images. The study leverages the LIDC-IDRI dataset, which includes annotated CT scans reviewed by multiple radiologists, and proposes an enhanced YOLOv11 model incorporating multi-dilation attention mechanisms and reparameterized backbone blocks (RepC3, C2PSA) to improve feature extraction and nodule localization.",
      features: [
        "Enhanced YOLOv11 architecture with multi-dilation attention mechanisms",
        "Reparameterized backbone blocks (RepC3, C2PSA) for improved feature extraction",
        "Multi-scale spatial feature capture using dilated convolutions",
        "Classification of nodules into benign, ambiguous, and malignant categories",
        "Integration with LIDC-IDRI dataset with multi-radiologist annotations"
      ],
      challenges: [
        "Small nodule detection in complex CT images",
        "Handling ambiguous cases between benign and malignant nodules",
        "Multi-scale feature extraction for varying nodule sizes",
        "Reducing false positives while maintaining high sensitivity",
        "Processing large 3D medical imaging datasets efficiently"
      ],
      results: "The proposed YOLO model achieves superior performance with an mAP@0.5 of 81.34% and a balanced F1-score of 79.12%, outperforming baseline YOLOv8 and YOLOv11 architectures. The model excels in classifying nodules into benign, ambiguous, and malignant categories, offering a robust tool for reducing false positives and missed diagnoses.",
      research: {
        institution: "Master's Program, Department of Computer Science and Information Engineering, Tamkang University",
        supervisor: "Dr. Chii-Jen Chen",
        graduation: "June 2025",
        degree: "Master's Degree",
        keywords: ["Lung cancer detection", "Deep Learning", "CT imaging", "pulmonary nodules", "attention mechanism"]
      }
    },
    "customer-behavior-analysis": {
      title: "KTV Customer Behavior Analysis",
      category: "Data Science",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter", "Linear Regression", "Random Forest"],
      description: "In-depth analysis of customer behavior at KTV venues using machine learning to understand revenue trends, demographics, preferences, and spending patterns.",
      overview: "This comprehensive data science project analyzes customer behavior at KTV (Karaoke TV) venues using the 'Customerbehavior_Final.csv' dataset. The analysis focuses on understanding revenue trends, customer demographics, preferences, and visit patterns while exploring predictive modeling to assess spending behavior. The project includes extensive data preprocessing, feature engineering, and machine learning model implementation.",
      features: [
        "Revenue trend analysis and customer demographic profiling",
        "Predictive modeling for spending behavior using Linear Regression and Random Forest",
        "Comprehensive data preprocessing and feature engineering",
        "Time-based analysis of customer visit patterns and duration",
        "Store performance comparison and customer segmentation",
        "Interactive visualizations of spending patterns and demographics"
      ],
      challenges: [
        "Data cleaning and standardization of store codes and timestamps",
        "Feature engineering from raw transaction data (time spent, total spending)",
        "Handling categorical variables through label encoding",
        "Model selection and hyperparameter tuning for spending prediction",
        "Interpreting results for business stakeholders in entertainment industry"
      ],
      results: "Successfully analyzed KTV customer behavior patterns and developed predictive models for spending behavior. The analysis provided insights into customer demographics, visit patterns, and spending trends across different store locations, enabling data-driven business decisions for KTV venue management.",
      dataset: {
        name: "Customerbehavior_Final.csv",
        features: ["StoreCode", "BillCode", "EnterTime", "LeaveTime", "BoxSize", "MealType", "MealSpending", "BoxSpending", "CustomerNumber", "MaleNumber", "FemaleNumber", "Age", "Membership"],
        models: ["Linear Regression", "Random Forest Regressor"],
        metrics: ["R-squared (R2)", "RMSE (Root Mean Square Error)"]
      }
    },
    "otsu-image-processing": {
      title: "Otsu Image Processing",
      category: "Computer Vision",
      tech: ["C++", "OpenCV", "CMake", "Python"],
      description: "Digital image processing technique implementation using Otsu's method for automatic thresholding in grayscale images.",
      overview: "This project implements Otsu's method, a popular image segmentation technique that automatically determines the optimal threshold value to separate foreground and background pixels in grayscale images. The implementation includes both C++ and Python versions with OpenCV integration.",
      features: [
        "Automatic threshold calculation using Otsu's method",
        "C++ implementation with OpenCV integration",
        "Python implementation for rapid prototyping",
        "CMake build system for cross-platform compilation",
        "Image preprocessing and post-processing utilities"
      ],
      challenges: [
        "Understanding the mathematical foundation of Otsu's method",
        "Optimizing performance for large images",
        "Cross-platform compatibility with CMake",
        "Integration with OpenCV library"
      ],
      results: "Successfully implemented Otsu's thresholding with accurate segmentation results on various test images, demonstrating proficiency in computer vision algorithms.",
      github: "https://github.com/AngusRWu/Otsu",
      demo: "https://github.com/AngusRWu/Otsu"
    },
    "simple-yugioh-card-database": {
      title: "Simple Yugioh Card Database",
      category: "Web Development",
      tech: ["HTML", "CSS", "JavaScript", "Web APIs"],
      description: "Web application for browsing and searching Yu-Gi-Oh! trading card game database with interactive features.",
      overview: "A web-based application that provides an interface for users to browse, search, and explore Yu-Gi-Oh! trading cards. The application fetches card data from external APIs and presents it in an organized, user-friendly format with filtering and search capabilities.",
      features: [
        "Card browsing with pagination",
        "Advanced search and filtering options",
        "Card detail views with images and statistics",
        "Responsive design for mobile and desktop",
        "Integration with Yu-Gi-Oh! card APIs"
      ],
      challenges: [
        "Handling large datasets from external APIs",
        "Creating efficient search and filter mechanisms",
        "Optimizing image loading and caching",
        "Ensuring responsive design across devices"
      ],
      results: "Created a functional card database that efficiently handles thousands of Yu-Gi-Oh! cards with fast search and filtering capabilities.",
      github: "https://github.com/AngusRWu/SimpleYugiohCardDatabaseWebsite",
      demo: "https://github.com/AngusRWu/SimpleYugiohCardDatabaseWebsite"
    },
    "badapple-terminal-animation": {
      title: "BadApple Terminal Animation",
      category: "Graphics Programming",
      tech: ["C++", "OpenCV", "CMake", "Terminal Graphics"],
      description: "C++ program that renders the famous Bad Apple animation in terminal using OpenCV for image processing.",
      overview: "This project converts the iconic Bad Apple animation into ASCII art and displays it in the terminal window. The program uses OpenCV to process PNG frames, converts them to ASCII characters, and renders them in real-time in the terminal, creating a unique command-line animation experience.",
      features: [
        "Real-time ASCII art conversion from PNG frames",
        "Terminal-based animation rendering",
        "OpenCV integration for image processing",
        "CMake build system for easy compilation",
        "Frame synchronization for smooth playback"
      ],
      challenges: [
        "Converting images to ASCII characters efficiently",
        "Managing frame timing for smooth animation",
        "Handling terminal size variations",
        "Optimizing performance for real-time rendering"
      ],
      results: "Successfully created a terminal-based Bad Apple animation that runs smoothly with proper frame timing and ASCII conversion, showcasing creative use of terminal graphics.",
      github: "https://github.com/AngusRWu/BadApple-CL",
      demo: "https://github.com/AngusRWu/BadApple-CL"
    },
  };

  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="p-10 text-center dark:bg-gray-900 min-h-screen">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Project Not Found</h2>
        <p className="text-gray-600 dark:text-gray-100 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/#projects")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
        >
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-3 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Challenges & Solutions</h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">⚡</span>
                <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Results & Impact</h2>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        {/* Research Information */}
        {project.research && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Research Information</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Academic Details</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Institution:</span> {project.research.institution}</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Supervisor:</span> {project.research.supervisor}</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Degree:</span> {project.research.degree}</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Graduation:</span> {project.research.graduation}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.research.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dataset Information */}
        {project.dataset && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Dataset & Methodology</h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Dataset Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Dataset:</span> {project.dataset.name}</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Features:</span> {project.dataset.features.length} variables</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Models Used:</span> {project.dataset.models.join(", ")}</li>
                    <li className="text-gray-600 dark:text-gray-300"><span className="font-medium dark:text-white">Evaluation Metrics:</span> {project.dataset.metrics.join(", ")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.dataset.features.slice(0, 8).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.dataset.features.length > 8 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
                        +{project.dataset.features.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Links */}
        {(project.github || project.demo) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/#projects")}
            className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}
