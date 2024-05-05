import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/detail.png" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Esheet</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          laboriosam eaque assumenda accusamus eum voluptatibus ipsa doloribus
          recusandae eveniet cum architecto saepe molestiae repellendus quidem
          deserunt odit, est accusantium. Aut voluptatum, repellendus numquam
          atque, ipsa blanditiis rem sunt labore maxime, eveniet asperiores
          accusantium optio et vel praesentium ducimus voluptate doloremque
          ullam omnis sint explicabo! Vitae voluptatibus minima sequi delectus
          pariatur praesentium quae culpa. Inventore animi suscipit at earum
          veniam, obcaecati voluptatibus molestiae fugiat quas non assumenda nam
          autem nulla tempore. Omnis tempore voluptatibus mollitia autem
          excepturi delectus labore eos neque, perferendis consequatur
          reiciendis nam amet rem recusandae ab ducimus dolorum, provident eius
          quod architecto maiores quidem eligendi. Dolore quisquam eos
          doloremque tenetur deserunt ipsa ab qui? Blanditiis quam labore magnam
          inventore veritatis soluta. Provident rem eaque asperiores voluptates.
          Voluptatum, a reprehenderit cupiditate illo ullam aliquam nulla
          quibusdam nihil eum officia, obcaecati et. Dignissimos quasi illo,
          perferendis dolores recusandae esse. Harum, accusamus non. Doloremque
          quod ipsam minus mollitia error fugiat distinctio est ipsa dicta
          veniam assumenda asperiores labore illo laborum excepturi natus
          corrupti cumque eos accusantium aliquid dolor odit voluptatem, quo
          sequi! Unde, voluptates? Necessitatibus eos alias possimus porro,
          recusandae, ea accusantium voluptates, aliquid eaque voluptatibus
          cupiditate minima dicta molestiae eius.{" "}
        </p>
      </div>
    </div>
  );
}
