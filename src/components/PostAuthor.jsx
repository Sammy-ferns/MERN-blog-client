import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

// Component to display post author information
const PostAuthor = ({ createdAt, authorID }) => {
  // State to hold fetched author data
  const [author, setAuthor] = useState({});
  useEffect(() => {
    // Function to fetch author data on component mount
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${authorID}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAuthor();
  }, []); // Empty dependency array to run effect only once

  return (
    <Link to={`/posts/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img src={`http://localhost:5000/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: {author?.name}</h5>
        <small>
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
