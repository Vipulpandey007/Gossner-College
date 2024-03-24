"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div>
        Profile Page
        <hr />
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default page;
