
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import Headroom from "headroom.js";


import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import { useAuth } from "../../auth-context/auth.context";
import AuthApi from "../../api/auth";
import { useHistory } from "react-router-dom";

const DDNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  const { user, setUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, [])

  const onExiting = () => {
    setCollapseClasses("collapsing-out")
  };

  const onExited = () => {
    setCollapseClasses("")
  };

  const handleLogout = () => {
    AuthApi.Logout(user);
    setUser(null);
    localStorage.removeItem("user");
    return history.push("/login-page");
  }

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                
                <NavLink
                  href="/"
                  target="/"
                >
                
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text" to="/DDlanding-page" tag={Link}>Home</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                
                </NavLink>
                
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Weather</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                
                <NavLink
                  href="/scores-page"
                  target="/scores-page"
                >

                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1"/>
                    <span className="nav-link-inner--text">Scores</span>
                  </DropdownToggle>
                </UncontrolledDropdown>

                </NavLink>
                
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">About us</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
               
               
                <NavItem className="d-none d-lg-block ml-lg-4">
                  {user && user.token ? (
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={handleLogout}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Logout
                      </span>
                    </Button>
                  ) : (
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://appseed.us/product/argon-design-system/api-server-nodejs/react/"
                      target="_blank"
                    >
                      
                      <span className="nav-link-inner--text ml-1">
                        Get started
                      </span>
                    </Button>
                  )}
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default DDNavbar;
