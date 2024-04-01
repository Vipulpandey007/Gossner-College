"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function GetResetPasswordLinkPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkButtonState = async () => {
    if (!buttondisabled) {
      const resetPassword = async () => {
        try {
          setLoading(true);
          await axios.post("/api/users/resetpassword", user);
          setSuccess(true);
          setError(false);
          console.log(user);
        } catch (error) {
          setError(true);
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };
      resetPassword();
    }
  };

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center  min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col text-left w-full sm:w-[500px]  mx-4 sm:mx-0  text-lg font-medium p-8 text-black rounded-xl  bg-white">
        {!success && (
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[18px] font-semibold">
              {loading ? "Sending..." : "Enter email to reset password"}
            </label>
            <input
              className="text-gray-600 p-2 border border-gray-300 rounded-lg mt-4 h-12 focus:outline-none focus:border-gray-600"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
          </div>
        )}

        {success && (
          <div>
            <p className="text-[20px] font-semibold mt-2 text-sky-500">
              Password reset link has been sent to your email
            </p>
            <Link href="/login">
              <button className="flex my-5 justify-center rounded-md px-3 py-2 w-full text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-white">
                Go to Login
              </button>
            </Link>
          </div>
        )}

        {!success && (
          <button
            type="submit"
            className={`flex my-5 justify-center rounded-md px-3 py-2 w-full text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-white ${
              buttonDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Send Email link
          </button>
        )}

        {error && (
          <div className="flex items-center gap-2 font-bold text-red-500">
            <p className="text-sm">Email not found</p>
          </div>
        )}
      </div>
    </div>
  );
}
