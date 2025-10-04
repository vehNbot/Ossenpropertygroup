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

export default function HouseLandPackage() {
  return (
    <div className="font-sans">
      <Navbar />
      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-22 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">House and land packages</h2>
          <p className="mt-4 text-muted-foreground">
          Ossen Property Group offers House and Land (H&L) Packages (often referred to as rooming house packages) that are designed purposely to cater to rooming house investors.<br /><br />
          Our H&L packages provide an all-encompassing solution, where we locate a perfectly sized land and construct a pre-planned rooming house that is optimised to match the size/shape of that land. This approach streamlines the process and ensures a fast/efficient development process; ultimately delivering an advantageous turnkey investment that is immediately ready to start generating rental income.<br /><br />

          <b>What’s included in a rooming house package?<br /></b>
          With an Ossen Property Group H&L package, we take care of everything. From sourcing the land to designing and building your rooming house, our comprehensive service means you can move straight to the income-generating phase of your investment. <br /><br />
          <b>Each package includes:<br /><br /></b>
          
          <b>Prime Land Sourcing<br /></b>
          We hand-pick land in high-demand areas, ensuring strong rental yields and capital growth.<br /><br />

          <b>Pre-Planned Rooming House<br /></b>
          Each rooming house is pre-designed and tailored to fit the dimensions of the land, optimising space and functionality for tenants.<br /><br />

          <b>Turnkey Investment<br /></b>
          The property comes fully equipped with furniture, landscaping, fencing, and solar power, providing an immediate return on investment.<br /><br />
          
          <b>Expert Project Management<br /></b>
          Our experienced team handles everything from council approvals to construction, delivering your investment on time and on budget.
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


