import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./images/blog.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor.</span>
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut,
        est quae, sed minus nisi cupiditate reprehenderit quibusdam quod
        adipisci, repudiandae suscipit rem voluptate.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut,
        est quae, sed minus nisi cupiditate reprehenderit quibusdam quod
        adipisci, repudiandae suscipit rem voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut,
        est quae, sed minus nisi cupiditate reprehenderit quibusdam quod
        adipisci, repudiandae suscipit rem voluptate.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aut,
        est quae, sed minus nisi cupiditate reprehenderit quibusdam quod
        adipisci, repudiandae suscipit rem voluptate.
      </p>
    </div>
  );
}
