import LandingNavbar from "@/components/landing-page/LandingNavbar";
import Footer from "@/components/landing-page/Footer";
import WhyUs from "@/components/landing-page/WhyUsSection";
import GetStarted from "@/components/landing-page/GetStarted";
import Header from "@/components/landing-page/Header";
import Shorten from "@/components/landing-page/Shorten";
import Company from "@/components/landing-page/Company";

export default function Home() {
  return (
    <div className="font-outfit">
      {/* import landing page components here, follow semantics */}
      <LandingNavbar />
      <Header />
      <Shorten />
      <Company />
      <WhyUs />
      <GetStarted />
      <Footer />
    </div>
  );
}
