
import { useState } from "react";
export default function OneQuestion(props) {
  const [selected, setSelection] = useState(null);
  const getSelection = (element) => {
    setSelection(element);
  };
  const allAnswer = [
    ...props.eachQuestion.incorrect_answers,
    props.eachQuestion.correct_answer
  ];
  return (
    <div className="border-b-2 border-gray-300 pb-4">
      <p className="text-lg">{props.eachQuestion.question}</p>
      <div className="flex gap-x-6 pt-4">
        {allAnswer.map((element, key) => (
          <p
            key={key}
            className={`px-4 py-2 rounded-xl border-2 cursor-pointer border-violet text-sm ${
              selected === element ? "bg-green-500" : ""
            }`}
            onClick={() => getSelection(element)}
          >
            {element}
          </p>
        
        ))}
      </div>
    </div>
  );
}
