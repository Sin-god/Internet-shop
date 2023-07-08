import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { Context } from "./../index";
import { observer } from "mobx-react-lite";

const DeviceItep = observer(({ devicee }) => {
  const history = useNavigate();
  const { device } = useContext(Context);
  console.log(device.selectedType.name === devicee.type);

  return (
    <Col
      md={3}
      onClick={() =>
        history(DEVICE_ROUTE + "/" + devicee.id, { replace: true })
      }
    >
      {device.selectedType.name === devicee.type ? (
        <Card style={{ width: 150, cursor: "pointer", border: "light" }}>
          <Image width={150} height={150} src={devicee.img} />
          <div className="text-black-50 d-flex justify-content-between align-items-center">
            <div>Brand</div>

            <div className="d-flex align-items-center">
              <div>{devicee.rating}</div>
              <Image width={17} height={17} src={star} />
            </div>
          </div>
          <div>{devicee.name}</div>
        </Card>
      ) : (
        <div></div>
      )}
    </Col>
  );
});

export default DeviceItep;
