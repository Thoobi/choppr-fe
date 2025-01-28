import { CiUser } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi";
import { WiCloud } from "react-icons/wi";
import { CiLock } from "react-icons/ci";

import { JSX } from "react";

export default function WhyUs() {
  return (
    <section className="px-4 md:px-20 py-16">
      <div className="flex justify-between mb-14 flex-col md:flex-row gap-4">
        <h2 className="text-[2.5rem] font-bold basis-full uppercase">
          Why Use Our Services
        </h2>
        <p className="md:pl-40 text-[1.1rem] text-[#777]">
          Our platform was built to make every point of connection between your
          content and your audience ignite action.
        </p>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4">
        <Stat data={["100k", "Active Users", <CiUser key="ci-user" />]} />

        <Stat
          data={[
            "50k",
            "Link created monthly",
            <IoLinkOutline key="io-link-outline" />,
          ]}
        />

        <div className="order-last md:order-none row-span-2 border-2 bg-[#8039DF] flex flex-col justify-between py-6 px-10 rounded-3xl">
          <i className="bg-[#fff] self-start text-[1.6rem] text-[#8039DF] rounded-full p-2">
            <CiLock />
          </i>
          <p className="text-[1.8rem] text-[#f9f9f9] font-bold leading-tight">
            SSL and redirection url with no worries
          </p>
        </div>

        <Stat
          data={[
            "500+",
            "Integration",
            <HiOutlineCube key="hi-outline-cube" />,
          ]}
        />

        <Stat data={["99%", "Uptime", <WiCloud key="wi-cloud" />]} />
      </div>
    </section>
  );
}

type StatProps = {
  data: [string, string, JSX.Element];
};

function Stat({ data }: StatProps) {
  return (
    <div className="bg-[#eee] py-6 px-10 flex justify-between rounded-3xl">
      <p className="flex flex-col gap-2">
        <span className="font-bold text-[1.8rem]">{data[0]}</span>
        <span className="text-[1.2rem] text-[#555]">{data[1]}</span>
      </p>

      <i className="bg-[#8039DF] self-start text-[1.6rem] text-white rounded-full p-2">
        {data[2]}
      </i>
    </div>
  );
}
