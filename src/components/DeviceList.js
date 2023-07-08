import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./../index";
import "../styles/styles.css";
import DeviceItep from "./DeviceItep";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="d-flex gg">
      {device.devices.map((device) => (
        <DeviceItep key={device.id} devicee={device} />
      ))}
    </div>
  );
});

export default DeviceList;
