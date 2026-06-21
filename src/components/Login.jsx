import Link from "next/link";

export default function Login() {
  return (
    <div className="flex">
      <Link href="/login">
        <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
          Login
        </button>
      </Link>
    </div>
  );
}
