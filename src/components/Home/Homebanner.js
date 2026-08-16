import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Homebanner.css";

export default function Homebanner() {
  const navigate = useNavigate();

  return (
    <section className="skill-universe">
      <div className="grid-overlay"></div>

      <div className="universe-container">
        {/* Center */}

        <div className="nexergy-core">
          <h1>GKNEXERGY</h1>

          <p>Learn • Build • Transform</p>

          <Button
            className="explore-btn"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </Button>
        </div>

        {/* Orbiting Courses */}

        <div className="orbit">
  <div className="planet web">
    <h3>🌐</h3>

    <h4>Web Development</h4>

    <p>React • Node • APIs</p>
  </div>

  <div className="planet marketing">
    <h3>📈</h3>

    <h4>Digital Marketing</h4>

    <p>SEO • Ads • Analytics</p>
  </div>

  <div className="planet ai">
    <h3>🤖</h3>

    <h4>Python for AI</h4>

    <p>Python • ML • AI</p>
  </div>
</div>
      </div>
    </section>
  );
}