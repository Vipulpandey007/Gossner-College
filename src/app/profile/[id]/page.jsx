import React from "react";

const page = ({ params }) => {
  return (
    <div className="bg-black text-white text-center min-h-screen">
      Profile of this user:-{params.id}
    </div>
  );
};

export default page;
