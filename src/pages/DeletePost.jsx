// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../context/userContext";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { response } from "express";

// const DeletePost = ({ id }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { currentUser } = useContext(UserContext);
//   const token = currentUser?.token;

//   //redirect to login page if user is not logged in

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, []);

//   const removePost = async () => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/api/posts/${id}`,
//         {
//           withCredentials: true,
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       if (response.status === 200) {
//         if (location.pathname === `/myposts/${currentUser.id}`) {
//           navigate(0);
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       console.log("Could not delete post");
//     }
//   };

//   return (
//     <Link className="btn sm danger" onClick={() => removePost(id)}>
//       Delete
//     </Link>
//   );
// };

// export default DeletePost;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const DeletePost = ({ postId: id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  //redirect to login page if user is not logged in

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const removePost = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/posts/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Could not delete post");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <button className="btn sm danger" onClick={removePost}>
      Delete
    </button>
  );
};

export default DeletePost;
