import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

import { FiSend } from "react-icons/fi";

import "./style.css";

interface StepsProps {
  currentStep: number;
}

export function Steps({ currentStep }: StepsProps) {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
}
