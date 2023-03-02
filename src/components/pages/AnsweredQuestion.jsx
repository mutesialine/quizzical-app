import { useState } from "react";

export default function AnsweredQuestion(props){
  const[selected, setSelection]=useState(false)
  function getSelection(){
    setSelection(prev =>! prev)
  }
  return (
    <p className={`px-4 py-2 rounded-xl border-2 border-violet text-sm ${ selected ? "bg-none" : "bg-green-500" }`} onClick={getSelection}>
      {props.element}
    </p>
  );
}