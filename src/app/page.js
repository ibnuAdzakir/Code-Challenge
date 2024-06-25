"use client"; 
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CarList from "./components/CarList";
import TeamPage from "./components/TeamPage";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <Services />
        <CarList />
        <Testimonial/>
        <TeamPage />
      </div>
      <Footer />
    </main>
  );
}
