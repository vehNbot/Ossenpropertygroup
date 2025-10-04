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
          <p className="mt-2 text-muted-foreground max-w-2xl">Share your site and objectives. Our development team will respond within 1 business day.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input id="name" className="w-full rounded-md border bg-background px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input id="email" type="email" className="w-full rounded-md border bg-background px-3 py-2" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea id="message" className="w-full rounded-md border bg-background px-3 py-2 min-h-32" placeholder="Tell us about your project..." />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit">Send enquiry</Button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}


