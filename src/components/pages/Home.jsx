import Link from "../ui/Link";

export default function Home() {
  return (
    <div className=" w-full max-w-7xl mx-auto mt-28 bg-lightgray">
      <div className="text-violet flex flex-col place-content-center items-center pt-54.5 pb-46 relative overflow-hidden">
        <img
          src="/icons/blob.svg"
          alt="buble"
          className="w-58.57 absolute -top-8 -right-14"
        />
        <h2 className="font-bold text-3xl">Quizzical</h2>
        <p className="text-lg font-normal pt-2 pb-7">
          Some description if needed
        </p>
        <Link name="Start Quiz" link="/questions" />
        <img
          src="/icons/blob2.svg"
          alt="buble"
          className="w-58.57 absolute -bottom-10 -left-28"
        />
      </div>
    </div>
  );
}
