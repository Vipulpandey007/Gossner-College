"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const [userData, setUserData] = useState("nothing");
  const [verified, setVerified] = useState("nothing");
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
  useEffect(() => {
    const getUsers = async () => {
      const user = await axios.get("/api/users/user");
      console.log(user);
      setUserData(user.data.data.username);
      setVerified(user.data.data.isVerified);
    };
    getUsers();
  }, []);
  console.log(verified);
  return (
    <>
      {verified === true ? (
        <div className="text-amber-700">
          Welcome to your profile
          <hr />
          <h2>
            {userData === "Nothing" ? (
              "No user"
            ) : (
              <Link href={`/profile/${userData}`}>{userData}</Link>
            )}
          </h2>
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <div>Verify your email first</div>{" "}
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default page;
