import Link from "next/link";

export default function Login() {
  return (
    <div className="flex gap-3">
      <Link href="/login">
        <button className=" w-20 h-7 rounded-xl text-md  bg-black text-white border">Login</button>
      </Link>
    </div>
  );
}
