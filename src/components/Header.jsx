import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-rose-100 p-2 mb-2 w-full text-slate-900  flex items-center justify-center px-4">
      <Link href="/" className="font-bold text-4xl mb-4">
        My Products
      </Link>
    </div>
  );
}
