import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa"
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center
     items-center flex-col overflow-clip
      mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skill/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
