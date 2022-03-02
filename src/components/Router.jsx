import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Friends } from "./Friends";
import { Watch } from "./Watch";
import { Marketplace } from "./Marketplace";
import { Groups } from "./Groups";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
      </Routes>
    </div>
  );
};
