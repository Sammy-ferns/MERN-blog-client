import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnail,
  createdAt,
}) => {
  const shortDescription =
    description.length > 145
      ? description.substring(0, 145) + "..."
      : description;
  const postTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={`http://localhost:5000/uploads/${thumbnail}`} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3 className="post__title">{postTitle}</h3>

          <p dangerouslySetInnerHTML={{ __html: shortDescription }} />
        </Link>
        <div className="post__footer">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
