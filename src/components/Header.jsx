import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import { UserContext } from "../context/userContext";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const { currentUser } = useContext(UserContext);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };
  return (
    <nav>
      <div className=" container nav__conatiner">
        <Link
          to="/"
          onClick={closeNavHandler}
          className="nav__logo py-2 px-4 rounded"
        >
          <span className="flex items-center hover:bg-pink-500 hover:text-white">
            <PiTelevisionBold />
            <h2 className="ml-2 showbizz">SHOWBIZZ</h2>
          </span>
        </Link>

        {currentUser?.id && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link
                to={`/profile/${currentUser.id}`}
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                {currentUser?.name}
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                Create Post
              </Link>
            </li>
            <li>
              <Link
                to="/authors"
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                Authors
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
        {!currentUser?.id && isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link
                to="/authors"
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                Authors
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={closeNavHandler}
                className="hover:bg-pink-500 hover:text-white py-2 px-4 rounded"
              >
                Login
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
