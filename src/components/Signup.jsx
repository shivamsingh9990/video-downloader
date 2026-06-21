import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex">
      <Link href="/signup">
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
