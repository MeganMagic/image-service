import React from "react";
import { RouterProvider } from "react-router-dom";
import Template from "./components/Template";
import router from "./router";

const App: React.FC = () => {
  return (
    <Template>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Template>
  );
};

export default App;
