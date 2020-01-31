import React from "react";
import donyImg from "../../img/fotogw.png";
import { LazyGroup } from "react-lazy";

const Content = () => {
  return (
    <div class="content">
      <div class="heading-secondary txtcenter" id="aboutme">
        about me
      </div>

      <div class="content__inside">
        <div class="content__picture">
          <img src={donyImg} alt="Dony" class="content__img" />
        </div>

        <div class="content__desc">
          <p>
            Hello, I'm M. Khairi Usman, I found my passion and started learning
            programming since 2013. this year I started learning programming whe
            I was in first grade at a vocational school and while taking an online
            programming course
          </p>
          <p>
          I am interested in programming, because I think the program is exciting.. 
          I just took time off from college just to take part in the bootcamp at Arkademy,
          because in my opinion, when I study the program on my campus, the knowledge that
          I want is not there.. at Arkademy, I get new knowledge about programming, as long
          as at Arkademy I learned about react native, redux, and framework adonisjs, and I
          was required to deploy applications using AWS EC2..
          </p>
          <p>
          When I'm not coding, I enjoy drinking coffee with friends...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
