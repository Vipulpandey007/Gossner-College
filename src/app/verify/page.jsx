import Link from "next/link";

export default function Verifypage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">
        Please check your email and verify your account
      </h1>

      <Link
        href="/login"
        className="py-2 px-4 text-2xl text-white bg-sky-500 hover:bg-sky-600 mt-10"
      >
        Login
      </Link>
    </div>
  );
}
