import UtilityBar from "./components/UtilityBar";
import DrNavbar from "./components/DrNavbar";
import DrHero from "./components/DrHero";
import TrustStats from "./components/TrustStats";
import AboutDoctor from "./components/AboutDoctor";
import ServicesGrid from "./components/ServicesGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import TreatmentsCarousel from "./components/TreatmentsCarousel";
import DoctorMessage from "./components/DoctorMessage";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import AppointmentContact from "./components/AppointmentContact";
import MainFooter from "./components/MainFooter";
import ScrollAnimate from "./components/ScrollAnimate";

export default function Home() {
  return (
    <>
      <ScrollAnimate />
      <UtilityBar />
      <DrNavbar />
      <main>
        <DrHero />
        <TrustStats />
        <AboutDoctor />
        <ServicesGrid />
        <WhyChooseUs />
        <TreatmentsCarousel />
        <DoctorMessage />
        <Testimonials />
        <FaqSection />
        <AppointmentContact />
      </main>
      <MainFooter />
    </>
  );
}
