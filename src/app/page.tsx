import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      {/* import landing page components here, follow semantics */}
      <LandingNavbar />
      <Header />
      <WhyUs />
      <Footer />
    </div>
  );
}
