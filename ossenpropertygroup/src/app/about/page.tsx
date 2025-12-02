import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PreviewableImage } from "@/components/media/PreviewableImage";

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Navbar />
      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-22 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
          At Ossen Property Group our journey began from a young and and with a simple but powerful vision: to push the boundaries with property and development, but ensuring that we lead by example ourselves. From our humble start, we have grown into a trusted leader in property development, driven by a passion for innovation, quality, and longevity.<br /><br />
          What sets us apart? It’s our relentless commitment to excellence and our ability to turn ambitious ideas into reality. Over the years, we've successfully delivered more than $250m in  high profit projects from small residential subdivisions to high end properties, each one a testament to our dedication and expertise.<br /><br />
          We provide a full turn-key process for clients, ensuring that all responsibilities, scope of works and delivery are effectively delivered. Our team specialises in subdivisions and high yield investment strategies across South East Queensland.<br /><br />
          Our team of industry specialists combines decades of experience with a forward-thinking approach. We leverage the latest technology, sustainable practices, and market insights to create developments that not only meet today’s needs but also anticipate tomorrow’s trends.<br /><br />
          We believe that great spaces improve lives. That’s why every project we undertake is grounded in a deep understanding of our clients’ visions, the community’s needs, and longterm growth for investors. Our reputation is built on trust, transparency, and a proven track record of delivering projects on time and within budget.
          </p>
          <div className="mt-6">
          </div>
        </div>
        <div>
          <PreviewableImage
            src="/About us.webp"
            alt="About Ossen"
            className="aspect-video w-full"
            imgClassName="bg-foreground"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}


