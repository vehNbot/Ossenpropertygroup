import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="pt-24 pb-10 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">End‑to‑end development, from site acquisition through design, approvals, construction and delivery.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          <Link href="/services/land-build" className="rounded-lg border p-6 hover:bg-muted/40 transition-colors">
            <div className="text-xl font-medium">Land + Build Packages</div>
            <div className="mt-1 text-sm text-muted-foreground">Fixed‑price packages tailored to your site and objectives.</div>
          </Link>
          <Link href="/services/design-studio" className="rounded-lg border p-6 hover:bg-muted/40 transition-colors">
            <div className="text-xl font-medium">Design Studio</div>
            <div className="mt-1 text-sm text-muted-foreground">Architecture, interiors, and landscape design under one roof.</div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}


