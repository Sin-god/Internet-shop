import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "./../index";
import Card from "react-bootstrap/Card";
import "../styles/styles.css";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex gg">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          className="p-3 "
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
