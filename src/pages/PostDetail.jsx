import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut fuga
          quidem aspernatur ad ab, odio dolores, neque, culpa et placeat?
          Dolorem necessitatibus delectus quis, obcaecati ratione reprehenderit
          ab nulla fugiat voluptatum quam in, expedita animi tenetur quibusdam.
          In, possimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum
          accusamus alias nisi recusandae. Voluptatum facilis dolorem, modi
          doloribus incidunt dignissimos laudantium iure, saepe ullam voluptas
          accusamus. Nihil a autem totam, amet sequi laudantium. Quae harum
          consequuntur aperiam officiis aliquid ad ut similique explicabo
          repellendus, consequatur nobis pariatur ea vero corporis architecto
          cum? Doloremque, ad?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsum
          eligendi consequatur unde fugit, eaque, quasi ad temporibus error
          illum voluptatem facilis asperiores reprehenderit perferendis suscipit
          recusandae amet quam quod deserunt dignissimos quisquam quas tempora,
          ea explicabo? Dicta id dignissimos tempora eligendi fugiat, ad saepe
          autem culpa dolor architecto nulla, numquam asperiores inventore et
          nemo atque ea accusamus! Molestias modi recusandae, eveniet corrupti
          natus dolores, sequi voluptates repellat error animi exercitationem
          perspiciatis magnam tempore sapiente ex? Ullam, inventore consequatur?
          Veniam numquam deleniti ratione. Officia dolore deserunt porro! Illo,
          ad quis aliquam nobis fuga culpa unde, veritatis maxime quaerat
          excepturi sunt, reprehenderit at facilis laboriosam provident ducimus
          cumque ullam distinctio ex. Pariatur.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          sunt, exercitationem animi aliquam assumenda fuga. Illum tempora cum
          porro tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          voluptatem cum similique quam labore reiciendis! Recusandae mollitia
          ab dignissimos consequatur quos unde ex eos sint totam nostrum
          incidunt, rerum veniam, vero animi ipsum iste veritatis velit a quasi.
          Recusandae hic deserunt animi! Tenetur eaque nemo illo perspiciatis
          asperiores ex magnam minus sed sunt blanditiis. Dolores aut quisquam,
          sint laboriosam distinctio quasi quaerat sunt eligendi magni
          repellendus dicta odio ipsam non! Eaque eius, libero tempora molestiae
          atque blanditiis fugiat adipisci laboriosam veritatis explicabo vitae
          laborum suscipit provident nesciunt necessitatibus quo quibusdam
          asperiores quod ea. Impedit veritatis voluptas, corrupti cum
          necessitatibus ex quasi ducimus rem sed nesciunt facilis ipsum! Odit
          reiciendis labore perferendis dolores fugiat corrupti. Placeat,
          laborum vero, maiores similique sint quasi quos dolorem, reiciendis
          adipisci illo ut. Earum placeat dicta rerum. Nisi incidunt ut
          praesentium laborum obcaecati, odit, sed perspiciatis vitae saepe
          excepturi rem nulla veniam magnam impedit nihil culpa, eveniet quis
          fugit fugiat provident dolores non ea voluptatibus. Accusamus cumque
          ducimus labore amet, esse autem commodi totam voluptates, id
          repellendus et ad mollitia consectetur dicta voluptatum in hic quaerat
          modi iste! Laborum, pariatur dolore consequatur quis alias itaque
          assumenda neque voluptatum. Culpa accusantium eveniet quibusdam natus
          voluptas. Dicta, cum.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
