import NavBar from "../components/nav";
import Services from "./services/page"
import Team from "../components/team"
import About from "../components/about"
import Hero from "../components/hero"
import WhyChooseUs from "../components/whycliniera"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhyChooseUs/>
      <Services />
      <About />
      <Team />
      <Footer/>
    </div>
  );
}
