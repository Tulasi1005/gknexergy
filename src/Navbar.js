import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import "./Navbar.css";

const menuItems = [
  { label: "Start Here", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "FAQ", path: "/faq" },
  { label: "Projects", path: "/projects" },
  { label: "Join Us", path: "/join-us" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" }
];

function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-center"
        >
          <Nav className="navbar-links">
            {menuItems.map((item) => {
              const isStartHere =
                item.path === "/" &&
                (location.pathname === "/" ||
                  location.pathname === "/start-here");

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={
                    isStartHere ||
                    location.pathname === item.path
                      ? "nav-item-link active-link"
                      : "nav-item-link"
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;