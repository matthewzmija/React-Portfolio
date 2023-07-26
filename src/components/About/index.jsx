import React from "react";
import avatar from "../../assets/small/portraits/3.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img src={avatar} alt="avatar"></img>
        </div>
        <p>
          Hello everyone, I'm Matthew Zmija! I am currently employed as an
          Account Manager at a startup software company. While I've enjoyed my
          time in this role, I've recently graduated from Toronto Metropolitan
          University in 2022 with a Bachelor of Commerce degree. Having just
          started my career, I discovered a deep passion for coding and web
          development, which has led me to make an exciting decision to shift my
          career path and explore this new territory further.
        </p>
        <p>
          Currently, I'm pursuing my coding aspirations by enrolling in the
          prestigious coding bootcamp at the University of Toronto. This
          experience has been nothing short of transformative as I immerse
          myself in the world of coding, learning the latest technologies and
          programming languages to create captivating web experiences.
        </p>
        <p>
          I am eager to take my newly acquired skills and knowledge and apply
          them to the real world, transforming my passion for coding into a
          fulfilling and successful career!
        </p>
      </div>
    </section>
  );
}

export default About;
