import React from "react";
import { Outlet } from "react-router-dom";
import Trends from "./trends/trends";
import Sidebar from "./sidebar/sidebar";

function Layout({ children }) {
  return (
    <>
      {/* <div className="left-sidebar" />
      {children}
      <div className="right-sidebar" /> */}
      <Sidebar className="left-sidebar" />
      <main className="timeline border-l border-r border-solid border-[#2f3336] grow-0 shrink-0 basis-[500px] md:basis-[800px]">
        <Outlet />
      </main>
      <aside className="right-sidebar">
        <Trends />
      </aside>
    </>
  );
}

export default Layout;
