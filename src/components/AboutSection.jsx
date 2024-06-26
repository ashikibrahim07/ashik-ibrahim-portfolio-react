import React from "react";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";

function AboutSection() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="abt-title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3 className="exp-edu">Experience</h3>
              <p>11 Months </p>
              <p>Frontend Development </p>
              <p>Freelancer</p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3 className="exp-edu">Education</h3>
              <p>B.Sc. Computer Science ,</p>
              <p> M.Sc. Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a recent graduate with a Master's degree in Computer Science,
              specializing in{" "}
              <strong className="strong">front-end development</strong> and the{" "}
              <strong className="strong">PERN stack.</strong>
              Throughout my academic journey, I've delved deep into the
              intricacies of modern web development, honing my skills in{" "}
              <strong className="strong">
                HTML, CSS, JavaScript, React.js,
              </strong>{" "}
              and <strong className="strong">Node.js.</strong> My experience
              extends to working with{" "}
              <strong className="strong">PostgreSQL databases</strong>, where
              I've implemented complex data models and utilized{" "}
              <strong className="strong">Express.js</strong> for server-side
              development. With a strong foundation in computer science
              principles and a passion for crafting intuitive user interfaces, I
              am eager to contribute my expertise to innovative projects that
              push the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
}

export default AboutSection;
