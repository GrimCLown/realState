import Image from "next/image";
import MainImg2 from "/public/images/main2.jpg";
import AboutUs from "./about/page";
import Projects from "./projects/page";
import WeGuarantee from "./weGuarantee/page";
import Contact from "./contacts/page";
import Dashboard from "./dashboard/page";
import Services from "./services/page";
import Mortgage from "./mortgage/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold mx-2">BLUE </h1>
      <h1 className="text-6xl font-bold mx-2 indent-8">BEYOND</h1>
      <Image
        className="w-full h-[300px] object-cover "
        src={MainImg2}
        alt="Picture of the author"
        priority={true}
      />
      <div
        id="cssportal-grid"
        className="grid  grid-cols-6 gap-0 w-full h-full flex my-4 p-4"
      >
        <div
          id="div1"
          className="col-span-6 row-span-1 flex justify-around gap-2 items-baseline border-b-2 p-2 "
        >
          <h1 className="text-6xl font-bold">2024</h1>
          <p className="text-xl">Year of Foundation</p>
        </div>
        <div
          className="text-[#6c6c6c] col-span-4 row-span-1 flex items-end  align-center p-2 border-b-2 border-r-2 p-2 "
        >
          <h1 className="flex items-end text-4xl flex">20</h1>
          <p className="inline-block align-baseline indent-2"> Years of Experience</p>
        </div>
        <div
          className="text-[#6c6c6c] col-span-2 row-span-1 border-b-2 items-center justify-center p-2"
        >
          <h1 className="text-4xl">15+</h1>
          <p>Experience</p>
        </div>
        <div
          className="text-[#6c6c6c] col-span-2 row-span-1 border-r-2 justify-center p-2 "
        >
          <h1 className="text-4xl">3</h1>
          <p>Experience</p>
        </div>
        <div id="div5" className=" text-[#6c6c6c] col-span-2 row-span-1 border-r-2 p-2">
          <h1 className="text-4xl">30+</h1>
          <p>Experience</p>
        </div>
        <div className="text-[#6c6c6c] col-span-2 row-span-1 p-2">
          <h1 className="text-4xl">100%</h1>
          <p>Experience</p>
        </div>
      </div>
      <AboutUs />
      <Projects />
      <WeGuarantee />
      <Services />
      <Mortgage />
      <Contact />
      <Footer />
    </div>
  );
}
