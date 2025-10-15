import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function About() {
  const MotionDiv = useScrollAnimation();

  return (
    <MotionDiv className="max-w-2xl mx-auto text-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-black-300">
        I’m AI graduate and software engineer passionate about building beautiful, fast, and meaningful products. 🚀
      </p>
    </MotionDiv>
  );
}
