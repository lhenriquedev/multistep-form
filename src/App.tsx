import { useState } from "react";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import { ReviewForm } from "./components/ReviewForm";
import { UserForm } from "./components/UserForm";
import { ThanksForm } from "./components/ThanksForm";

import { useForm } from "./hooks/useForm";
import { Steps } from "./components/Steps";

type FormDataProps = {
  email: string;
  name: string;
  review: string;
  comment: string;
};

const formTemplate = {
  email: "",
  name: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState<FormDataProps>(formTemplate);

  function updateFieldHandler(key: string, value: string) {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  }

  const formComponents: any = [
    <UserForm data={data} onUpdateField={updateFieldHandler} />,
    <ReviewForm data={data} onUpdateField={updateFieldHandler} />,
    <ThanksForm data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="form">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <span>Voltar</span>
                <GrFormPrevious />
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
