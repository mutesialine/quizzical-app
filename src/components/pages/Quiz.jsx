import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [Data, setData] = useState([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const Allcorrectanswer = Data.filter(
    (el) => el["correct_answer"] === el.chosenAnswer
  );

  function AllQuestion() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then(saveData);
  }

  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5")
        .then((res) => res.json())
        .then(saveData);
  }, []);

  function saveData(Data) {
    const newData = Data.results.map((el) => ({
      ...el,
      chosenAnswer: null,
      randomAnswers: [el["correct_answer"], ...el["incorrect_answers"]].sort(),
    }));
    setData(newData);
  }

  function playAgain() {
    setData([]);
    setCheckAnswer(false);
    AllQuestion();
  }

  function allAnswer(index) {
    return (element) =>
      setData((prevData) => {
        return prevData.map((value, k) =>
          index === k ? { ...value, chosenAnswer: element } : { ...value }
        );
      });
  }

  return (
    Data.length && (
      <div className=" w-full max-w-7xl mx-auto  bg-lightgray">
        <div className="flex flex-col place-content-center items-center pt-12 pb-6 px-12 relative overflow-hidden">
          <img
            src="/icons/blob 5 (1).svg"
            alt="buble"
            className="w-58.57 absolute -top-8 -right-14"
          />
          <div className="font-bold  text-violet pb-4 space-y-8 pt-4">
            {Data?.map((element, index) => {
              return (
                <Question
                  element={element}
                  key={index}
                  allAnswer={allAnswer(index)}
                  checkAnswer={checkAnswer}
                />
              );
            })}
          </div>
          <p>{Data ? "" : "Loading..."}</p>
          <img
            src="/icons/blob 5.svg"
            alt="buble"
            className="w-58.57 absolute -bottom-10 -left-28"
          />
          {!checkAnswer && (
            <div className="pt-8 flex gap-2">
              <Button
                name="Check Answer"
                handleData={() => setCheckAnswer(true)}
              />
            </div>
          )}
          {checkAnswer && (
            <div className="pt-16 flex gap-4 items-center">
              <div className="text-2xl text-violet">
                You scored {Allcorrectanswer.length} /{Data.length} correct
                answers
              </div>
              <Button name="plain Again" handleData={playAgain} />
            </div>
          )}
        </div>
      </div>
    )
  );
}
