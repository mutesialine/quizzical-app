import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";
import { useEffect, useState } from "react";




export default function Questions() {
  const[Data,setData]=useState()

  const Question = Data?.map((eachQuestion, key) => {
   return (
     <div>
       <p key={key}>{eachQuestion.question}</p>
       <p>{eachQuestion.incorrect_answers}</p>
     </div>
   );
    
  });
useEffect(()=>{
  fetch("https://opentdb.com/api.php?amount=5")
  .then(res=>res.json())
  .then(Data=>{
    setData(Data.results)
  })
},[])
  return (
    <div className=" w-full max-w-xl mx-auto mt-28 bg-lightgray">
      <div className="flex flex-col place-content-center items-center py-6 px-12 relative overflow-hidden">
        <img
          src="/icons/blob 5 (1).svg"
          alt="buble"
          className="w-58.57 absolute -top-8 -right-14"
        />
        <div className="font-bold text-lg text-violet pb-4 space-y-4"> {Question}</div>
        <p>{Data? "":"Please wait"}</p>
        
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
