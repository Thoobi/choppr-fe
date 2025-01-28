export default function Footer() {
  return (
    <footer className="px-4 py-4 md:px-20 md:py-14">
      <div className="flex gap-1 items-center mb-8">
        <span className="text-2xl">Logo</span>
        <h2 className="text-2xl font-semibold uppercase">Chooper</h2>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-y-12">
        <FooterNav attr={["Menu", "Home", "Product", "Pricing", "Resources"]} />
        <FooterNav
          attr={[
            "Company",
            "About Us",
            "Help Center",
            "The Community",
            "Partner Program",
          ]}
        />
        <FooterNav
          attr={[
            "Services",
            "Link Shortner",
            "Microsite Builder",
            "Subscription",
          ]}
        />
        <Subscription />
      </div>

      <hr className="mt-12 mb-8" />

      <Legal />
    </footer>
  );
}

function FooterNav({ attr }: { attr: string[] }) {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <h4 className="font-semibold uppercase">{attr[0]}</h4>
      <ul className="flex flex-col gap-4">
        {attr.slice(1).map((att) => (
          <li key={att} className="text-[#555]">
            <a href="#">{att}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Subscription() {
  return (
    <div className="flex-[2] flex flex-col gap-8 items-start">
      <h4 className="font-semibold uppercase">Subscribe to newsletter</h4>
      <form
        action="#"
        className="border-2 px-2 py-1 rounded-lg w-full flex justify-between"
      >
        <input type="text" placeholder="youremail@gmail.com" className="grow" />
        <button className="bg-[#8039DF] text-[#f8fafc] px-4 py-1.5 rounded-md">
          Subscribe &rarr;
        </button>
      </form>

      <div className="flex gap-8">
        <p className="flex flex-col gap-2">
          <span className="uppercase font-semibold">Call us</span>
          <span className="text-[#555]">+234-8030919112</span>
        </p>

        <p className="flex flex-col gap-2">
          <span className="uppercase font-semibold">Email us</span>
          <span className="text-[#555]">hello@chopper.com</span>
        </p>
      </div>
    </div>
  );
}

function Legal() {
  return (
    <div className="flex max-lg:flex-col w-full px-6 justify-between items-center flex-wrap gap-4">
      <p>&copy; Copyright {new Date().getFullYear()}, all rights reserved</p>
      <div className="flex max-lg:w-full justify-center max-lg:items-center gap-4">
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy</a>
      </div>
    </div>
  );
}
