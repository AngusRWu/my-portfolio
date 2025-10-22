import { useParams, useNavigate } from "react-router-dom";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-10 text-center dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-500 capitalize">
        {slug.replace(/-/g, " ")}
      </h2>

      <p className="mt-6 text-gray-600 dark:text-gray-100">
        Details about {slug.replace(/-/g, " ")} will go here.
      </p>

      {/* Back button */}
      <button
        onClick={() => navigate("/#projects")}
        className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
      >
        ← Back to Home
      </button>
    </div>
  );
}
