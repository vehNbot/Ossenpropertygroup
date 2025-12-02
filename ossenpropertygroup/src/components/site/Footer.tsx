import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ossen Property Group. All rights reserved.<br />
          <br />
          Email: mail@ossenpropertygroup.com.au<br />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="#" className="flex items-center gap-2 hover:underline">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            <span>LinkedIn</span>
          </Link>
          <Link href="https://www.instagram.com" className="flex items-center gap-2 hover:underline">
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            <span>Instagram</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:underline">
          <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            <span>Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}


