import React, { useEffect, useState } from "react";
import { Carousel, Button, Row, Col } from "react-bootstrap";
import "./Courses.css";


const courses = [
  {
    id: "python-ai",
    title: "Python for AI",
    image: "/images/PythonforAI_poster.png",
    roadmap: "/images/PythonForAI_image.png",
    form: "https://forms.gle/GCqvWiWqxwvDSzoZ6"
  },
  {
    id: "web-dev",
    title: "Web Development",
    image: "/images/webdevelopment_poster.png",
    roadmap: "/images/webdevelopment_roadmap.png",
    form: "https://forms.gle/GCqvWiWqxwvDSzoZ6"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    image: "/images/dataanalytics_poster.png",
    roadmap: "/images/dataanalytics_roadmap.png",
    form: "https://forms.gle/GCqvWiWqxwvDSzoZ6"
  }
];

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % courses.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const selectedCourse = courses[index] || courses[0];

  return (
    <div className="main-container container-fluid">


      <div className="layout-wrapper">

        <Row className="g-3">

          {/* LEFT - CAROUSEL */}
          <Col md={6}>
            <div className="box">

              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
              >
                {courses.map((course) => (
                  <Carousel.Item key={course.id} className="h-100">

                    <div className="carousel-image-container">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="carousel-img"
                      />

                      <div className="carousel-overlay">
                        <h3>{course.title}</h3>
                      </div>
                    </div>

                  </Carousel.Item>
                ))}
              </Carousel>

            </div>
          </Col>

          {/* RIGHT - ROADMAP */}
          <Col md={6}>
            <div className="box roadmap-wrapper">

              <img
                key={selectedCourse.id}
                src={selectedCourse.roadmap}
                alt="Roadmap"
                className="roadmap-img"
                onClick={() => setShowFull(true)}
              />

            </div>
          </Col>

        </Row>

      </div>

      <div className="center-enroll">
        <Button
          className="center-enroll-btn bg-primary"
          onClick={() =>
            window.open(selectedCourse.form, "_blank")
          }
        >
          🚀 Enroll Now
        </Button>
      </div>

      {/* 🔥 CENTER ENROLL BUTTON */}


      {/*</div>*/}

      {/* FULL SCREEN ROADMAP */}
      {showFull && (
        <div
          className="modal-overlay"
          onClick={() => setShowFull(false)}
        >
          <img
            src={selectedCourse.roadmap}
            alt="Full Roadmap"
            className="modal-img"
          />
        </div>
      )}

    </div>
  );
};

export default CarouselComponent;