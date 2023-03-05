import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [Data, setData] = useState([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
   const [allSelectedAnswer, setAllSelectedAnswer] = useState(Data);
  useEffect(() => {
    AllQuestion();
  }, []);

  function playAgain() {
    setData([]);
    setCheckAnswer(false);
    AllQuestion();
  }

  function AllQuestion() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((Data) => {
        setData(Data.results);
         setAllSelectedAnswer(
           Data.results.map((obj) => ({ ...obj, isCollect: false }))
         );
      });
  }

  return (
    <div className=" w-full max-w-7xl mx-auto  bg-lightgray">
      <div className="flex flex-col place-content-center items-center py-6 px-12 relative overflow-hidden">
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
                allSelectedAnswer={allSelectedAnswer}
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

        {checkAnswer ? (
          <div className="pt-16 flex gap-4 items-center">
            <div className="text-2xl text-violet">You scored /5 correct answers</div>
            <Button
              name="plain Again"
              handleData={() => {
                playAgain();
              }}
            />
          </div>
        ) : (
          <div className="pt-16 flex gap-2">
            <Button
              
              name="Check Answer"
              handleData={() => {
                setCheckAnswer(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
