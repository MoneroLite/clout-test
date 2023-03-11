import React from "react";
import "./App.scss";
import { PageIndex } from "./pages/index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<PageIndex />} />
  //       <Route path="/?chat_id=:id" element={<PageIndex />} />
  //       {/*<Route path="/*" element={<Navigate to={"/chatId=1"} />} /> */}
  //     </Route>
  //   )
  // );
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/?id=:id" element={<PageIndex />} />
        </Routes>
      </div>
      <div className="mobile__overlap">
        <p className="mobile__text">
          ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </p>
      </div>
    </>
  );
}

export default App;
