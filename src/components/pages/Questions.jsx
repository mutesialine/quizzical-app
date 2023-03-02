import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";
import { useEffect, useState } from "react";
 import AnsweredQuestion from "./AnsweredQuestion";




export default function Questions() {
  //for fetching data and diplay it to the page
  const [Data, setData] = useState();
  //function for handling selection
  const [selected, setSelection] = useState(false);
  function getSelection() {
    setSelection((prev) => !prev);
  }

  const Question = Data?.map((eachQuestion, key) => {
    const allAnswer = [];
    allAnswer.push(eachQuestion.correct_answer);
    allAnswer.push(eachQuestion.incorrect_answers);
    console.log(allAnswer);

    return (
      <div className="border-b-2 border-gray-300 pb-4">
        <p key={key} className="text-lg">
          {key + 1}.{eachQuestion.question}{" "}
        </p>
        <div className="flex gap-x-6 pt-4">
          {allAnswer.map((element, key) => (
            <AnsweredQuestion
             key={key}
             element={element}
            />
          
          ))}
        </div>
      </div>
    );
  });
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((Data) => {
        setData(Data.results);
      });
  }, []);

  return (
    <div className=" w-full max-w-xl mx-auto mt-28 bg-lightgray">
      <div className="flex flex-col place-content-center items-center py-6 px-12 relative overflow-hidden">
        <img
          src="/icons/blob 5 (1).svg"
          alt="buble"
          className="w-58.57 absolute -top-8 -right-14"
        />
        <div className="font-bold  text-violet pb-4 space-y-8 pt-4">
          {Question}
        </div>
        <p>{Data ? "" : "Please wait"}</p>

        <img
          src="/icons/blob 5.svg"
          alt="buble"
          className="w-58.57 absolute -bottom-10 -left-28"
        />
        <div className="pt-16 flex gap-2">
          <LinkButton link="/answer" name="Check Answer" />
        </div>
      </div>
    </div>
  );
}
