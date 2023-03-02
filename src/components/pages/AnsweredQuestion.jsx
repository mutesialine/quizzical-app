
export default function AnsweredQuestion(props){
  
  return (
    <p className={`px-4 py-2 rounded-xl border-2 border-violet text-sm ${props.styles}`} onClick={props.handleSelection}>
      {props.element}
    </p>
  );
}