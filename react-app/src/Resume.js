import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Fernando McKenzie</h1>
        <p>
          11212 217TH ST CT E, Graham, WA, 98338| (916) 660-3509 | mckenziegoodenfern@cityuniversity.edu
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, WA | Expected June 2025</p>
          <p>GPA: 3.4/4.0</p>

          <h3>Bachelor of Science in Information Technology</h3>
          <p>City University of Seattle, WA | June 2023</p>
          <p>GPA: 3.4/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Programming languages: Python, Java, SQL</li>
          <li>Frameworks and libraries: React, Node.js</li>
          <li>Database systems: MySQL, MongoDB</li>
          <li>Operating systems: Linux, Windows</li>
          <li>Version control: Git</li>
        </ul>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="work-experience">
          <h3>Inventory Systems Coordinator</h3>
          <p>TopLine Counters, Sumner, WA | 2019 - 2020</p>
          <p>
            Managed inventory systems and supported the integration of 
            supply chain technology.
          </p>

          <h3>Supply Specialist (92Y)</h3>
          <p>US Army, Global Locations | 2010 - 2018</p>
          <p>
            Improved supply chain efficiency by 20% and transitioned 
            systems to GCSS-Army.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Meal-generator</h3>
          <p>
            Meal-generator is a web application that generates meal plans
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/fmckenzie05/meal-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/fmckenzie05/meal-generator
            </a>
          </p>

          <h3>Discrete Math Auto-Completion Tool</h3>
          <p>
            Implemented a search and auto-completion tool using Tries, 
            enhancing performance.
          </p>
          <p>
            Source code:{" "}
            <a
              href="https://github.com/fmckenzie05/Discrete-Math-Logic"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/fmckenzie05/Discrete-Math-Logic
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
