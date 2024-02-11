import React, { useState } from "react";
import Thumbnail1 from "../images/blog1.png";
import Thumbnail2 from "../images/blog2.png";
import Thumbnail3 from "../images/blog3.png";
import Thumbnail4 from "../images/blog4.png";

import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusantium assumenda magnam deserunt dolore vitae exercitationem, cupiditate consequuntur, tenetur deleniti, veniam ut beatae esse dolor! Dignissimos voluptas minima distinctio! Illum libero voluptatem dolor consequatur quis accusantium, ex harum tempora, ipsum ducimus laboriosam delectus aperiam laborum eum explicabo totam cum ut!",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "Post 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusantium assumenda magnam deserunt dolore vitae exercitationem, cupiditate consequuntur, tenetur deleniti, veniam ut beatae esse dolor! Dignissimos voluptas minima distinctio! Illum libero voluptatem dolor consequatur quis accusantium, ex harum tempora, ipsum ducimus laboriosam delectus aperiam laborum eum explicabo totam cum ut!",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "Post 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusantium assumenda magnam deserunt dolore vitae exercitationem, cupiditate consequuntur, tenetur deleniti, veniam ut beatae esse dolor! Dignissimos voluptas minima distinctio! Illum libero voluptatem dolor consequatur quis accusantium, ex harum tempora, ipsum ducimus laboriosam delectus aperiam laborum eum explicabo totam cum ut!",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "Post 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo accusantium assumenda magnam deserunt dolore vitae exercitationem, cupiditate consequuntur, tenetur deleniti, veniam ut beatae esse dolor! Dignissimos voluptas minima distinctio! Illum libero voluptatem dolor consequatur quis accusantium, ex harum tempora, ipsum ducimus laboriosam delectus aperiam laborum eum explicabo totam cum ut!",
    authorID: 11,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(
          ({ id, thumbnail, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={description}
              authorID={authorID}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Posts;
