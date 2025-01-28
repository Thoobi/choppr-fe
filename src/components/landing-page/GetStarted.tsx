import chart from "../../../public/chart.png";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="bg-[#101010] px-4 py-16 md:px-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-8 items-start">
          <p className="text-white text-md">
            🔥 Growth Hack your way to the top
          </p>
          <h2 className="text-white text-[2.2rem] font-extrabold uppercase leading-snug md:text-[2.0rem] max-lg:text-center">
            Get closer to your customer today
          </h2>
          <button className="text-white bg-[#8039DF] p-4 rounded-lg uppercase text-sm max-lg:w-full max-lg:px-5">
            Get started for free
          </button>
        </div>

        <div>
          <Image src={chart} alt="chart" />
        </div>
      </div>
    </section>
  );
}
