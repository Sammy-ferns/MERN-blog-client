import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="posts/categories/Agriculture">Agriculture</Link>
          <Link to="posts/categories/Business">Business</Link>
          <Link to="posts/categories/Education">Education</Link>
          <Link to="posts/categories/Entertainment">Entertainment</Link>
          <Link to="posts/categories/Art">Art</Link>
          <Link to="posts/categories/Investment">Investment</Link>
          <Link to="posts/categories/Uncategorized">Uncategorized</Link>
          <Link to="posts/categories/Weather">Weather</Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved $copy; Copyright, Samara Fernandes</small>
      </div>
    </footer>
  );
};

export default Footer;
