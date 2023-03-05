
export default function Button (props){
  
  return <button className="py-2 px-16 bg-violet rounded-2xl text-white text-lg font-medium"  onClick={props.handleData} >{props.name}</button>;
}