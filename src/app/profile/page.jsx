"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const page = () => {
  const [verified, setVerified] = useState("nothing");

  const getUsers = async () => {
    const user = await axios.get("/api/users/user");
    setVerified(user.data.data.isVerified);
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log(verified);
  return (
    <>
      {verified === true ? (
        <div className="text-amber-700">{/* write component here */}</div>
      ) : (
        <>
          <div>Verify your email first</div>{" "}
        </>
      )}
    </>
  );
};

export default page;
