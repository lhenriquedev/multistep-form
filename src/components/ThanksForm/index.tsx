import "./styles.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

interface ThanksFormProps {
  data: {
    email: string;
    name: string;
    review: string;
    comment: string;
  };
}

export function ThanksForm({ data }: ThanksFormProps) {
  const emojiData: any = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    "very-satisfied": <BsFillEmojiHeartEyesFill />,
  };
  return (
    <div className="thanks-container">
      <h2>Falta pouco</h2>
      <p>
        A sua opinião é muito importante, em breve voce receberá um de 10% de
        desconto para a sua proxima compra
      </p>
      <p>Para concluir sua avaliação, clique no botao de enviar abaixo</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>

      <p className="review-data">
        <span>Satisfação com o produto:{emojiData[data.review]} </span>
      </p>
      <p className="review-data">
        <span>Cometário: {data.comment}</span>
      </p>
    </div>
  );
}
