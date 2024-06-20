"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Form from "../../components/Form/Form";
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
        <div className="text-amber-700">
          <Breadcrumb pageName="Profile" />
          <Form />
        </div>
      ) : (
        <>
          <div>Verify your email first</div>{" "}
        </>
      )}
    </>
  );
};

export default page;
