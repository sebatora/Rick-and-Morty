import style from "./About.module.css"
import { Link } from "react-router-dom";
import rymabout from "../../assets/rymabout.jpg"
import {BsGithub, BsLinkedin, BsInstagram} from "react-icons/bs"
import rymhtml5 from "../../assets/rymhtml5.jpg"
import rymcss3 from "../../assets/rymcss3.jpg"
import rymjavascript from "../../assets/rymjavascript.jpg"
import rymreact from "../../assets/rymreact.jpg"
import rymredux from "../../assets/rymredux.jpg"
import rymnodejs from "../../assets/rymnodejs.jpg"
import rymexpressjs from "../../assets/rymexpressjs.jpg"


function About() {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutDetail}>
        <div className={style.aboutSpec}>
          <h2>NAME</h2>
          <h3>Sebastian A. Toranzo</h3>
          <h2>STATUS</h2>
          <h3>Alive</h3>
          <h2>SPECIES</h2>
          <h3>Human</h3>
          <h2>GENDER</h2>
          <h3>Male</h3>
          <h2>ORIGIN</h2>
          <h3>Earth (West Dimension)</h3>
        </div>
        <div className={style.aboutImg}>
          <img src={rymabout} alt='Mi foto' />
        </div>
      </div>
      <div className={style.aboutInfo}>
        <p>
        Hi! My name is Sebastian Ariel Toranzo and I'm studying to be a FullStack Developer at SoyHenry.
        </p>
        <p>
        I was born on January 11, 1990 in Buenos Aires, Argentina. I'm passionate about technology and music and I'm always open to face challenges, visualizing my goals and striving to achieve my purposes.
        </p>
        <p>
          The Rick and Morty project was made as an integration part of the Bootcamp.
        </p>
        <p className={style.aboutTech}>
          <img src={rymhtml5} alt="HTML5"/>
          <img src={rymcss3} alt="CSS3"/>
          <img src={rymjavascript} alt="JavaScript"/>
          <img src={rymreact} alt="React"/>
          <img src={rymredux} alt="Redux"/>
          <img src={rymnodejs} alt="NodeJS"/>
          <img src={rymexpressjs} alt="ExpressJS"/>
        </p>
        <p>Contact Me</p>
        <p className={style.aboutContact}>
          <a href="http://github.com/sebatora" target="_blank"> <BsGithub size={50}/> </a>
          <a href="http://www.linkedin.com/in/sebatora/" target="_blank"> <BsLinkedin size={50}/> </a>
          <a href="http://www.instagram.com/sebatora/" target="_blank"> <BsInstagram size={50}/> </a>
        </p>
      </div>
    </div>
  );
}

export default About;
