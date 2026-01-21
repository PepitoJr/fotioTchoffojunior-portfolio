import AProposDeMoi from "./AProposDeMoi";
import Hero from "./Hero";
import MesProjets from "./MesProjets";
import ContactPage from "./ContactPage";
import Skills from "./Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <MesProjets />
      <Skills />
      <AProposDeMoi />
      <ContactPage />
    </div>
  );
}
