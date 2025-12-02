import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="pt-24 pb-10 section-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-card max-w-2xl">Share your site and objectives. Our development team will respond within 1 business day.</p>
        </div>
      </section>
      <section id="contact" className="section-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 grid gap-4 sm:grid-cols-2 text-muted-foreground">
          <input type="hidden" name="access_key" value="d972bf82-3dd6-4168-b782-24603a5a32f3"/>
            <div className="sm:col-span-1">
              
              <label htmlFor="name" className="block text-sm mb-1 text-foreground">Name</label>
              <input
                id="name"
                type="name"
                name="name"
                className="w-full rounded-md border bg-background px-3 py-2 text-muted-foreground"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm mb-1 text-muted-foreground">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border bg-background px-3 py-2 text-muted-foreground"
                placeholder="jane@email.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm mb-1 text-muted-foreground">Project brief</label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded-md border bg-background px-3 py-2 min-h-28 text-muted-foreground"
                placeholder="Tell us about your site, objectives, and budget..."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" value="Submit" className="cursor-pointer">Send enquiry</Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}


