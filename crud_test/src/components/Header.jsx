import { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/logo192.png";
import { handleLogoutRedux } from "../redux/actions/authAction";
Header.propTypes = {};

function Header(props) {
  const auth = useSelector((state) => state.isLogged);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
  };
  // console.log("");
  useEffect(() => {
    if (auth && auth !== true && !window.location.pathname !== "/login") {
      navigate("/");
      toast.success("Log out success!");
    }
  }, [auth]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> Kuan ハンサム</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* {((auth && auth === true) || window.location.pathname === "/") && ( */}
          <>
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Category-List
              </NavLink>
              <NavLink to="/tutorials" className="nav-link">
                Manage-Tutorial
              </NavLink>
              <NavLink to="/productUnit" className="nav-link">
                Product-Unit
              </NavLink>
              <NavLink to="/fetchAllUnit" className="nav-link">
                Unit-List
              </NavLink>
              <NavLink to="/productUnitById" className="nav-link">
                ProductUnit-ById IDDDDDD
              </NavLink>
            </Nav>
            <Nav>
              {auth && auth === true && (
                <span className="nav-link">Welcome Uer check log 3212132131212312321</span>
              )}
              <NavDropdown title="Setting">
                {auth && auth === true ? (
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <NavLink to="/login" className="nav-link">
                    <i className="fa-solid fa-user"></i> Login
                  </NavLink>
                )}
              </NavDropdown>
            </Nav>
          </>
          {/* )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
