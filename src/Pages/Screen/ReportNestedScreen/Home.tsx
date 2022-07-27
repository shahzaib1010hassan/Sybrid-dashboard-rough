import React from "react";

import { useAuth } from "../../ContextApi/authContext";
function Home() {
  const { user } = useAuth();
  return (
    <div>
      {user.name == "" ? "Home Page" : <h1> Welcome to Home Page {user.name}</h1>}

      {user.email == "" ? "" : <p>Your email Address is {user.email}</p>}
    </div>
  );
}

export default Home;
