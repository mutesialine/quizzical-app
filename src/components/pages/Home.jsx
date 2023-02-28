import LinkButton from "../ui/LinkButton";

export default function Home (){

  return (
    <div className=" w-full max-w-xl mx-auto mt-32 bg-lightgray">
      <div className="text-violet flex flex-col place-content-center items-center  pt-54.5 pb-46 relative overflow-hidden">
        <img
          src="/icons/blob 5 (1).svg"
          alt="buble"
          className="w-58.57 absolute -top-8 -right-14"
        />
        <h2 className="font-bold text-3xl">Quizzical</h2>
        <p className="text-lg font-normal pt-2 pb-7">
          Some description if needed
        </p>
        <LinkButton name="Start Quiz" />
        <img
          src="/icons/blob 5.svg"
          alt="buble"
          className="w-58.57 absolute -bottom-10 -left-28"
        />
      </div>
    </div>
  );
}