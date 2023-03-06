
export default function Question(props) {
  
  return (
    <div className="border-b-2 border-gray-300 pb-4 max-w-7xl">
      <p className="text-lg">{props.element.question}</p>
      <div className="flex gap-x-6 pt-4">
        {props.element.randomAnswers.map((element, index) => {
          const selected =props.element.chosenAnswer === element;
          const correctAnswer = element === props.element["correct_answer"];
          
          return (
            <button
              key={index}
              className={`px-4 py-2 rounded-xl border cursor-pointer text-sm 
        ${
          props.checkAnswer && correctAnswer
            ? "bg-lightgreen"
            : props.checkAnswer && selected && !correctAnswer
            ? "bg-lightred"
            : !props.checkAnswer && !selected
            ? "border-violet"
            :selected && !props.checkAnswer
            ? "bg-lightblue"
            : props.checkAnswer && !selected && correctAnswer
            ? "border-violet"
            : "border-violet"
        }`}
              disabled={props.checkAnswer}
              onClick={() => props.allAnswer(element)}
            >
              {element}
            </button>
          );
        })}
      </div>
    </div>
  );
}

            
