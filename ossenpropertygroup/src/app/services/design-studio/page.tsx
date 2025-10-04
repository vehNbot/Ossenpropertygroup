import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function DesignStudioPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="pt-24 pb-10 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Design Studio</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">Architecture, interiors and landscape design integrated to elevate liveability and ROI.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {["architecture.jpg", "interiors.jpg", "landscape.jpg"].map((src) => (
            <div key={src} className="overflow-hidden rounded-lg border">
              <div className="aspect-[4/3]">
                <img src={`/design/${src}`} alt={src} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="font-medium">{src.replace(".jpg", "").replace("-", " ").toUpperCase()}</div>
                <div className="text-sm text-muted-foreground">Feasibility‑led design with enduring material palettes.</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}


