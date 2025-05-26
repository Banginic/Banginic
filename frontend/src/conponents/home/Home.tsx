
import {
  ContactUs,
  Skills,
  Testimonials,
  Services,
  RecentWorks,
  AboutUs,
  Partners,
  Counter,
  ColorLines,
   Hero
   
} from "./exportHomeComp";
import { useTitle } from '../../conponents/exportComp'


function Home() {
  useTitle({title: 'Home'})

  return (
    <section
   
    >
      
      <Hero />
      <div className="md:pt-7 lg:px-1">
        <ColorLines />
        <AboutUs />
        <button>{}</button>
      </div>
      <Counter />
      <Services />
      <RecentWorks />
      <Partners />
      <Skills />
      <Testimonials />
      <ContactUs />
    </section>
  );
}

export default Home;
