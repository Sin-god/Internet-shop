import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(isLogin);
  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto mb-3">
          {isLogin ? "Авторизація" : "Регестрація"}{" "}
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ваш email </Form.Label>
            <Form.Control type="email" placeholder="Введіть email " />
            <Form.Text className="text-muted">
              Ми не будемо нікому давати ваш email адрес
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введіть парольь" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запом'ятати мене" />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            {isLogin ? "Зарегеструватись" : "Увійти"}
          </Button>
        </Form>
        {isLogin ? (
          <div className="mt-3">
            Немає акаунта?{" "}
            <NavLink to={REGISTRATION_ROUTE}>Зарегеструйтесь</NavLink>
          </div>
        ) : (
          <div className="mt-3">
            Є акаунт? <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Auth;
