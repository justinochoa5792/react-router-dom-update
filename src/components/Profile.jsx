import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>Profile {username}'s Page</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Back to about Page
      </button>
    </div>
  );
};

export default Profile;
