import Link from "next/link";

const footerLinks = [
  { href: "/downloaders", label: "Downloaders" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl dark:text-white  font-semibold">
            Website Downloader
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Make downloads easy, safe, and fast from all your favorite sites.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3 lg:grid-cols-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
        © 2026 Website Downloader. Built to help users find, download, and
        manage media effortlessly.
      </p>
    </footer>
  );
}
