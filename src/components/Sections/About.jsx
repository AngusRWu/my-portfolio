import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import profilePic from '../../assets/me.png';


export default function About() {
  const MotionDiv = useScrollAnimation();

  return (
    <MotionDiv className="max-w-2xl mx-auto text-center py-20 px-4">
      <img
        src={profilePic}
        alt="Angus Wu"
        className="w-64 h-64 rounded-full mx-auto shadow-lg object-cover mb-4"
      />
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-black-300">
        I’m an AI graduate who developed a lung cancer detection and classification model using YOLOv11 and PyTorch. 🚀
      </p>
    </MotionDiv>
  );
}
