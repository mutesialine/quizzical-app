export default function LinkButton(props){
  return <a className="py-2 px-16 bg-violet rounded-2xl text-white text-lg font-medium" href={props.link} onClick={props.handleData}>{props.name}</a>;
}