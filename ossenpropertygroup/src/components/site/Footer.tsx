import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ossen Property Group. All rights reserved.<br />
          <br />
          Email: mail@ossenpropertygroup.com.au
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#" className="hover:underline">LinkedIn</Link>
          <Link href="#" className="hover:underline">Instagram</Link>
          <Link href="#" className="hover:underline">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}


