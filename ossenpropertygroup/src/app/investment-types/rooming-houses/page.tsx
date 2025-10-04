import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


type Project = {
  id: string;
  title: string;
  location: string;
  invested: string;
  roi: string;
  summary: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "willow-terraces",
    title: "Willow Terraces",
    location: "Hampton, VIC",
    invested: "$3.1M",
    roi: "21%",
    summary: "Twelve architecturally designed townhomes with premium landscaping and community laneways.",
    image: "/projects/1.jpg",
  },
  {
    id: "parklands-quarter",
    title: "Parklands Quarter",
    location: "Brunswick, VIC",
    invested: "$2.6M",
    roi: "17%",
    summary: "Boutique apartments adjacent to parklands with sustainable materials and efficient layouts.",
    image: "/projects/2.jpg",
  },
  {
    id: "harbor-villas",
    title: "Harbor Villas",
    location: "Williamstown, VIC",
    invested: "$4.4M",
    roi: "19%",
    summary: "Waterfront villas maximising outlook and privacy with refined coastal palette.",
    image: "/projects/3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Navbar />
      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-22 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What are Rooming Houses?</h2>
          <p className="mt-4 text-muted-foreground">
          A rooming house is a single property divided into multiple private units/rooms, each with its own bathroom, kitchenette, and outdoor space, while sharing communal facilities such as a kitchen and laundry.<br /><br />
          This type of property is purpose-built to specifically meet the demand for affordable, high-quality accommodation; ultimately making these homes a lucrative investment opportunity for investors.<br /><br />
          With rooming houses, investors can create multiple rental streams all under the one roof; this offers consistent cash flow and higher returns than traditional investment properties.<br /><br />

          <b>Did you know?<br /></b>
          Rooming Houses are often referred to as micro-apartments, co-living spaces share houses or houses in multiple occupation (HMO)s. The correct terminology under the Brisbane town planning code is 'Rooming Accommodation'.<br /><br />
          
          When you invest with us, you get more than just a property, you get a competitive edge with designs and experience that performs year after year.<br /><br />

          We ensure that our rooming houses are only designed by our team of talented architects and designers who are specialists in creating efficient and attractive living spaces. 
          With this approach, this ensure that every project we build maximises its potential, from optimum use of space to compliance with all building regulations.
          </p>
          <div className="mt-6">
          </div>
        </div>
        <div >
          <div className="aspect-video w-full overflow-hidden rounded-lg border">
            <img src="/OPGLogo.png" alt="About Ossen" className="h-full w-full object-cover bg-foreground" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


