import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "./../components/modals/CreateDevice";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-3"
      >
        Додати тип
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-3"
      >
        Додати бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"}
        className="mt-3"
      >
        Додати пристрій
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
