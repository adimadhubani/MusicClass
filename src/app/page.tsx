import { main } from "motion/react-client";
import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestemonials from "@/components/TestemonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home(){
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Chai aur Code</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestemonials/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  )
}
