import "./App.css";
import Hero from "./components/Hero/Hero";
import Ticket from "./components/Ticket/Ticket";
import Address from "./components/Address/Address";
import Service from "./components/Service/Service";
import Registation from "./components/Registation/Registation";
import Site from "./components/Site/Site";
import Works from "./components/Recent-Work/Works";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  

  return (
    <div className="w-full">
        <SectionWrapper>
        <Hero className="pt-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Ticket className="py-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Registation className="py-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Site className="py-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Works className="py-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Service className="py-10 px-5" />
      </SectionWrapper>

      <SectionWrapper>
        <Address className="py-10 px-5" />
       
      </SectionWrapper>
    </div>
  );
}

export default App