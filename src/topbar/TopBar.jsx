import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">{user && "WRITE"}</Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link className="link" to="/settings"><img className="topImg" src="./images/profile.jpg" alt="" /></Link>
           
            
          ) : (
              <ul className="topList">
                <li className="topListItem"> <Link className="link" to="/login">LOGIN</Link></li>
                 <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
            
          )
        }
        <i  className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
