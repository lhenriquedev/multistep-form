import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./styles.css";

interface ReviewFormProps {
  data: {
    email: string;
    name: string;
    review: string;
    comment: string;
  };
  onUpdateField: (key: string, value: string) => void;
}

export function ReviewForm({ data, onUpdateField }: ReviewFormProps) {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="unsatisfied"
            checked={data.review === "unsatisfied"}
            onChange={(e) => onUpdateField("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="neutral"
            required
            checked={data.review === "neutral"}
            onChange={(e) => onUpdateField("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="review"
            value="satisfied"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => onUpdateField("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" name="review" value="very-satisfied" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiencia"
          required
          value={data.comment || ""}
          onChange={(e) => onUpdateField("comment", e.target.value)}
        />
      </div>
    </div>
  );
}
