import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <div className="sidebarImg">
          <img src="./images/sidebar.jpg" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          eius perferendis nisi rem assumenda quasi aperiam illo repellat et
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">LIFE</li>
          <li className="sidebarListItems">MUSIC</li>
          <li className="sidebarListItems">STYLE</li>
          <li className="sidebarListItems">SPORT</li>
          <li className="sidebarListItems">TECH</li>
          <li className="sidebarListItems">CINEMA</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
