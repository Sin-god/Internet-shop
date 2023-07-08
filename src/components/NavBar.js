import React, { useContext } from "react";
import { Context } from "./../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "./../utils/consts";

const NavBar = observer(() => {
  const history = useNavigate();
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Купити девайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history(ADMIN_ROUTE, { replace: true })}
            >
              Адмін панель
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              variant={"outline-light"}
              onClick={() => history(LOGIN_ROUTE, { replace: true })}
            >
              Вийти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => {
                user.setIsAuth(true);
              }}
            >
              {}
              Авторизація
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
