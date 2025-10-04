"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bold } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero with autoplay video */}
      <section className="relative pt-16" aria-label="Hero">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video src="/ossenmedia.mp4" className="h-full w-full aspect-video object-cover" disablePictureInPicture loop autoPlay muted>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
            Design. Develop. Deliver.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-foreground">
            Property development with precision. Premium residences and communities crafted end‑to‑end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="#build-with-us">Build with us</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/portfolio">Explore services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Expertise</h2>
          <p className="mt-4 text-muted-foreground">
          <b>Site Identification<br /></b>
          We can help you in locating the most appropriate land for subdivision, this ensures market viability and future growth potential.<br /><br />          
          <b>Feasibility and Due Diligence<br /></b>
          Our team can conduct comprehensive financial feasibility assessments and due diligence to ensure your rooming house subdivision will provide strong rental returns.<br /><br />
          <b>Vendor Negotiation<br /></b>
          We can be involved in vendor discussions and negotiations to obtain the best price for your investment (all by leveraging our experience and site analysis).<br /><br />
          <b>Funding Solutions<br /></b>
          We can offer support for funding solutions to successfully development your rooming house, ensuring your investment is financially feasible from start to finish.<br /><br />
          <b>Demolition and Planning Support<br /></b>
          When it comes to demolishing an existing building or dealing with complex planning/approval processes, our experience team can provide investors with the right support; this allows you to focus your attention on your rooming house profitability.<br /><br />
          <b>Sales and Marketing Support<br /></b>
          If you decide to sell any of your subdivided lots, our sales team and extensive list of industry partners can help to enhance the market value of your land by collectively supplying a full real estate service to meet your demands.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="#contact">About Us</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Investment Opportunities</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Land & Build Packages</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="aspect-video w-full overflow-hidden rounded-lg border">
            <img src="/OPGLogo.png" alt="About Ossen" className="h-full w-full object-cover bg-foreground" />
          </div>
        </motion.div>
      </section>

      {/* Build with us */}
      <section id="build-with-us" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Build with us</h2>
            <p className="mt-4 text-muted-foreground">
              Explore land and build packages with curated home design templates. Select, customise, and deliver with our in‑house team.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <Link href="/portfolio">Investment Opportunities</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Request a proposal</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["plan-a.jpg", "plan-b.jpg", "plan-c.jpg", "plan-d.jpg"].map((src) => (
              <div key={src} className="aspect-square overflow-hidden rounded-lg border">
                <img src={`/plans/${src}`} alt={src} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Brad to do */}
      <section id="contact" className="section-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact & Enquiries</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Share your site, goals, and timeline. Our development team will respond within 1 business day.</p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input id="name" className="w-full rounded-md border bg-background px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input id="email" type="email" className="w-full rounded-md border bg-background px-3 py-2" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm mb-1">Project brief</label>
              <textarea id="message" className="w-full rounded-md border bg-background px-3 py-2 min-h-28" placeholder="Tell us about your site, objectives, and budget..." />
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
