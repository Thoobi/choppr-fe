import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href={"/"} className="">
      <p className="text-[36px]/[45px] font-extrabold bg-[radial-gradient(#EB568E_0%,#144EE3_100%)] bg-clip-text text-transparent">Choppr</p>
    </Link>
  );
};

export default BrandLogo;