import React, { useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { authRouts, publicRouts } from "./../routes";
import { Context } from "./../index";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRouts.map(({ path, Comment }) => (
          <Route key={path} exact path={path} element={<Comment />}></Route>
        ))}

      {publicRouts.map(({ path, Comment }) => (
        <Route key={path} exact path={path} element={<Comment />}></Route>
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
