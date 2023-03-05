import { useState } from "react";
export default function OneQuestion(props) {
  const [selected, setSelection] = useState('');
  const getSelection = (element) => {
    setSelection(element);
  };
  const allAnswer = [
    ...props.element.incorrect_answers,
    props.element.correct_answer,
  ];



  return (
    <div className="border-b-2 border-gray-300 pb-4 max-w-7xl">
      <p className="text-lg">{props.element.question}</p>
      <div className="flex gap-x-6 pt-4">
        {allAnswer.map((element, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-xl border cursor-pointer text-sm ${
              element === selected && !props.checkAnswer
                ? "bg-lightblue" :
                 element == props.element.incorrect_answers && props.checkAnswer 
                ? "bg-lightred"
                :  element=== selected &&   element === props.element.correct_answer &&
                  props.checkAnswer 
                ? "bg-lightgreen"
                : "border-violet"
            }`}
            // onClick={!props.checkAnswer && (() => getSelection(element))}
              onClick={() => {
              !props.checkAnswer && getSelection(element);
              props.getAllSelectedAnswer((prev) => {
                prev[props.id] = {
                  ...prev[props.id],
                  isCollect:
                    element === props.element.correct_answer ? true : false,
                };
                return prev;
              });
            }}
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
}

            
