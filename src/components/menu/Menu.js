import React from "react";
import $ from "jquery";

const Menu = () => {
  return (
    <React.Fragment>
      <div className="menu">
        <span />
        <span />
        <span />
      </div>
      <div className="menu-bar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About</a>
          </li>
          <li>
            <a href="#favquotes">Quotes</a>
          </li>
          <li>
            <a href="#myproject">Project and Tools</a>
          </li>
          <li>
            <a href="#mygoal">My Target</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
$(document).ready(function() {
  $(".menu").click(function() {
    $(".menu").toggleClass("active");
    $(".menu-bar").toggleClass("active");
  });
  $(".se-pre-con").fadeOut("slow");
});
export default Menu;
