import { HiOutlineCalendar } from "react-icons/hi2";
import { IoLinkOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import qrcode from "../../../public/qrCode.png";
import land from "../../../public/land.png";
import Image from "next/image";
import peter from "../../../public/peter.jpeg";
import paul from "../../../public/paul.jpeg";

const Header = () => {
  return (
    <header className="bg-white text-black w-full mt-36 max-lg:mt-[90px]">
      <div className="max-w-[85%] max-lg:max-w-full max-lg:px-3 mx-auto">
        <div className="mt-[50px] max-lg:mt-[20px] flex flex-row max-lg:flex-col gap-14">
          <div className="flex flex-col gap-[40px]">
            <span className="p-3 text-[black] font-medium align-middle bg-[#D6D6D6] rounded-3xl text-center w-[28rem] max-lg:w-full max-lg:text-center max-lg:rounded-full max-lg:text-[13px]">
              Let&apos;s make links accessible to all with simply one click. 👈
            </span>
            <h1 className="max-lg:text-5xl max-lg:text-center text-7xl font-bold uppercase">
              Bio link & link shortener <span></span> for business needs
            </h1>
            <p className="text-[#7a7a7a] font-medium text-base max-lg:text-center lg:w-[40rem] max-lg:text-sm">
              On a single platform, you&apos;ll find all the tools you need to
              connect audiences worldwide, manage links and QR codes, and create
              brand relationships.
            </p>
            <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:w-full">
              <button className="text-white bg-[#8039DF] h-12 w-52 rounded-lg text-lg font-medium max-lg:rounded-2xl max-lg:h-14 max-lg:text-base max-lg:font-normal">
                Get started for free
              </button>
            </div>
            <div className="flex flex-row gap-2 max-lg:flex max-lg:items-center justify-start items-center max-lg:justify-center max-lg:w-full">
              <div className="relative h-20 w-28 flex flex-row items-center max-lg:w-24">
                <div className="absolute z-[25] rounded-full">
                  <Image
                    src={paul}
                    alt="An image of Paul Graham"
                    className="rounded-full h-10 w-10"
                  />
                </div>
                <div className="absolute z-20 rounded-full left-6">
                  <Image
                    src={peter}
                    alt="An image of Peter Thiel"
                    className="rounded-full h-10 w-10"
                  />
                </div>
                <div className="absolute z-10 rounded-full left-14">
                  <Image
                    src={paul}
                    alt="An image of Paul Graham"
                    className="rounded-full h-10 w-10"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start w-40">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <ul className="flex flex-row gap-[2px]">
                    <li>
                      <IoIosStar className="text-orange-400" />
                    </li>
                    <li>
                      <IoIosStar className="text-orange-400" />
                    </li>
                    <li>
                      <IoIosStar className="text-orange-400" />
                    </li>
                    <li>
                      <IoIosStar className="text-orange-400" />
                    </li>
                    <li>
                      <IoIosStar className="" />
                    </li>
                  </ul>
                  <h5 className="text-base font-bold">4.0</h5>
                </div>
                <h5 className="text-base font-normal text-[#7a7a7a]">
                  from 500+ reviews
                </h5>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="border-[2px] border[#D6D6D6] w-[460px] max-lg:w-full px-5 py-6 rounded-2xl flex flex-col gap-5 max-lg:gap-3">
              <span className="flex flex-row max-lg:flex-col justify-between items-center max-lg:gap-4">
                <h5 className="font-bold text-base">QR CODE</h5>
                <button className="bg-[#8039DF] h-[43px] w-[150px] text-white rounded-lg text-sm font-medium">
                  Download PNG
                </button>
              </span>
              <div className="flex flex-row justify-between max-lg:w-full items-center gap-4 max-lg:gap-6">
                <div>
                  <Image
                    src={qrcode}
                    alt="this is a qrcode"
                    width={110}
                    height={120}
                  />
                </div>
                <div className="w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="flex flex-row gap-5 items-center">
                      <IoLinkOutline size={25} className="text-[#8039DF]" />
                      <h5 className="text-base text-[#4d4d4d] font-medium">
                        https://chopper-be/mailtumator
                      </h5>
                    </li>
                    <li className="flex flex-row gap-5 items-center">
                      <HiOutlineCalendar
                        size={25}
                        className="text-[#8039DF] max-lg:h-[20px] max-lg:w-[20px]"
                      />
                      <h5 className="text-base text-[#4d4d4d] font-medium">
                        22 December 2024
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[70px] w-[70px] max-lg:w-[50px] max-lg:h-[50px] bg-[#8039DF] rounded-full flex justify-center items-center z-10 absolute top-[190px] max-lg:top-[210px] right-5">
              <IoLinkOutline
                size={30}
                className="text-white max-lg:w-[20px] max-lg:h-[20px]"
              />
            </div>
            <div className="border-[2px] border[#D6D6D6] w-[460px] px-5 py-6 rounded-2xl flex flex-col gap-5 max-lg:w-full">
              <h5 className="uppercase text-black text-lg font-bold max-lg:text-center">
                Customize your link
              </h5>
              <div>
                <Image src={land} alt="random image" />
              </div>
              <div className="flex flex-row gap-2 border-[1px] rounded-xl p-4 border[#D6D6D6]">
                <IoLinkOutline size={25} className="text-[#8039DF]" />
                <h6 className="font-medium text-base">
                  <span className="text-[#8039DF]">short.</span>link/mailtumator
                  <span className="text-[#8039DF]">|</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
  