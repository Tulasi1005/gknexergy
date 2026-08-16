import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import nexergyLogo from "../../GK_NEXERGY_4.png";
import "./subgroup.css";

const services = [
  { number: "01", title: "Web Development", label: "Digital foundations", description: "Websites and web platforms that look sharp, load quickly, and give your business room to grow.", tags: ["Websites", "Platforms", "E-commerce"], color: "#63d8e9" },
  { number: "02", title: "Mobile Development", label: "Products in motion", description: "Mobile apps made for reliable, intuitive experiences wherever your customers need you.", tags: ["Android", "iOS", "Cross-platform"], color: "#759cf4" },
  { number: "03", title: "Digital Marketing", label: "Visibility with purpose", description: "Campaigns and content systems that bring the right people closer to your brand.", tags: ["SEO", "Campaigns", "Content"], color: "#e9c36d" },
  { number: "04", title: "Training", label: "Skills that stick", description: "Hands-on technology training that turns learning into confident, practical ability.", tags: ["Workshops", "Projects", "Upskilling"], color: "#c49bf1" },
  { number: "05", title: "Python for AI", label: "Intelligence in practice", description: "Practical Python, machine learning, and AI skills for building modern intelligent applications.", tags: ["Python", "ML", "AI"], color: "#78d6a8" },
];

const getServiceSlug = (title) => (
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
);

export default function StartHere() {
  const { service } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextIndex = services.findIndex((item) => getServiceSlug(item.title) === service);
    setActiveIndex(nextIndex >= 0 ? nextIndex : 0);
  }, [service]);

  const selected = services[activeIndex] || services[0];

  return (
    <main className="start-here-page">
      
      <section className="service-atlas" aria-labelledby="atlas-title">
        <div className="atlas-heading">
          <div className="atlas-brand"><img src={nexergyLogo} alt="GK Nexergy" /><span>GK NEXERGY / SERVICES</span></div>
          <p>ONE PARTNER. FOUR POSSIBILITIES.</p>
          <h1 id="atlas-title">Select a path<br />and build forward.</h1>
        </div>

        <div className="atlas-layout">
          <article className="active-service" style={{ "--service-color": selected.color }} key={selected.title}>
            <div className="service-visual" aria-hidden="true">
              <span className="visual-ring ring-one" /><span className="visual-ring ring-two" /><span className="visual-mark">{selected.number}</span>
              <span className="visual-point point-one" /><span className="visual-point point-two" />
            </div>
            <p className="active-label">{selected.label}</p>
            <h2>{selected.title}</h2>
            <p className="active-description">{selected.description}</p>
            <div className="active-footer">
              <div className="active-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href="/Contact">Explore service <span aria-hidden="true">&#8594;</span></a>
            </div>
          </article>

          <div className="service-selector" role="tablist" aria-label="Service selection">
            {services.map((service, index) => (
              <button key={service.title} className={index === activeIndex ? "is-selected" : ""} style={{ "--service-color": service.color }} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)} onMouseEnter={() => setActiveIndex(index)}>
                <span className="selector-number">{service.number}</span>
                <span className="selector-copy"><small>{service.label}</small><strong>{service.title}</strong></span>
                <span className="selector-arrow" aria-hidden="true">&#8594;</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
