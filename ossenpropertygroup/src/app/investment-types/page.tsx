import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PreviewableImage } from "@/components/media/PreviewableImage";

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

export default function InvestmentTypes() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="pt-24 pb-10 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Investment Types</h1>
          <p className="mt-2 text-card max-w-2xl">Completed property developments showcasing invested capital, realised ROI, and a short project summary.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                <div className="absolute left-3 top-3 flex gap-2">
                  <Badge variant="secondary">{p.location}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Invested</span>
                  <span>{p.invested}</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">ROI</span>
                  <span className="text-emerald-600">{p.roi}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="designs" className="py-16 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Land & Building Packages</h2>
          <p className="mt-2 text-card max-w-2xl">Browse template home designs ready to be adapted to your site and council requirements.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Plan A.webp", "Plan B.webp", "Plan C.webp"].map((src) => (
              <div key={src} className="overflow-hidden rounded-lg border">
                <div className="aspect-[4/3]">
                  <PreviewableImage src={`/${src}`} alt={src} className="h-full w-full object-cover"/>
                </div>
                <div className="p-4">
                  <div className="font-medium">{src.replace(".webp", "").toUpperCase()}</div>
                  <div className="text-sm text-card">3–4 bed options • Double garage • Energy efficient</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


