import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Context } from "./../index";
import "../styles/styles.css";
import bigStart from "../assets/BigStar.svg";
import Button from "react-bootstrap/Button";

const DevicePage = () => {
  const device = useContext(Context);
  const description = [
    { id: 1, title: "Оперативна память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "intelcore i5" },
    { id: 4, title: "Кілкість ядер", description: "4" },
    { id: 5, title: "Акамулятор", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row className="d-flex justify-content-center align-items-center">
        <Col
          md={4}
          className='d-flex justify-content-center align-items-center"'
        >
          <Image
            width={300}
            height={300}
            src={device.device.devices[0].img}
          ></Image>
        </Col>
        <Col md={4}>
          <div className="wp">
            <h2>{device.device.devices[0].name}</h2>
            <div
              style={{
                background: `url(${bigStart}) no-repeat center`,
                width: 280,
                height: 280,
                backgroundSize: "cover",
                fontSize: 76,
              }}
              className="d-flex justify-content-center align-items-center"
            >
              {device.device.devices[0].rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card className="cardі">
            <h3>Від {device.device.devices[0].price} грн.</h3>
            <Button className="butt" variant="outline-dark">
              Додати в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="stroc">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 5,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
