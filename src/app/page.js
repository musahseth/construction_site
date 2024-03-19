import Aboutus from "@/components/Aboutus";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Services/>
      <Aboutus/>
      <Projects/>
      <Cta/>


    </main>
  );
}
