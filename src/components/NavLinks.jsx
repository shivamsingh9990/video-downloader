import Link from "next/link";

export default function NavLinks({ links, isActive, variant = "horizontal" }) {
  const baseClasses = "text-sm font-medium text-slate-600 dark:text-slate-300";
  return (
    <ul
      className={
        variant === "horizontal"
          ? "flex flex-wrap items-center justify-center gap-4"
          : "flex flex-col gap-3"
      }
    >
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`rounded-full px-3 py-2 transition ${baseClasses} ${
                active
                  ? "bg-slate-900 text-white shadow-lg dark:bg-slate-200 dark:text-slate-900"
                  : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
