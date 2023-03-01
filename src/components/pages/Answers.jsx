import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";

export default function Answers() {
  return (
    <div className=" w-full max-w-xl mx-auto mt-28 bg-lightgray">
      <div className="flex flex-col place-content-center items-center  pt-54.5 pb-46 relative overflow-hidden">
        <img
          src="/icons/blob 5 (1).svg"
          alt="buble"
          className="w-58.57 absolute -top-8 -right-14"
        />
        <h2 className="font-bold text-lg text-violet  pb-4 px-8">
          How would one say goodbye in Spanish?
        </h2>
        <div className="flex gap-x-2">
          <Button text="Hola" />
          <Button text="Adiós" />
          <Button text="Au Revoir" />
          <Button text="Adiós" />
        </div>
        <img
          src="/icons/blob 5.svg"
          alt="buble"
          className="w-58.57 absolute -bottom-10 -left-28"
        />
        <div className="pt-16 flex gap-2">
          <LinkButton link="/" name="Start Again" />
          
        </div>
      </div>
    </div>
  );
}
