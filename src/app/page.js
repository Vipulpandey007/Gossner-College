import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-center mt-52">
      Welcome to homepage
      <Link href="/login" className="mx-10 text-blue-600">
        Login
      </Link>
      <Link href="/profile" className="mx-10 text-blue-600">
        Profile
      </Link>
    </div>
  );
}
