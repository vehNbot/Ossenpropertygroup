import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { PreviewableImage } from "@/components/media/PreviewableImage";

export default function LandBuildPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="pt-24 pb-10 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Land & Build Packages</h1>
          <p className="mt-2 text-card max-w-2xl">Explore packages, inclusions and timelines tailored to your site.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Plan A.webp", "Plan B.webp", "Plan C.webp", "Plan D.webp"].map((src) => (
            <div key={src} className="overflow-hidden rounded-lg border">
              <div className="aspect-[4/3]">
                <PreviewableImage
                  src={`/${src}`}
                  alt={src}
                  className="h-full w-full object-cover"/>
              </div>
              <div className="p-4">
                <div className="font-medium">{src.replace(".webp", "").toUpperCase()}</div>
                <div className="text-sm text-muted-foreground">
                  Turn‑key inclusions • 3–4 bed • Energy‑efficient
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}


