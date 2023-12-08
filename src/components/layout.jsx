import React from 'react';
import { Outlet } from 'react-router-dom';
import Trends from './trends/trends';
import Sidebar from './sidebar/sidebar';

function Layout({ children }) {
  return (
    <>
      {/* <div className="left-sidebar" />
      {children}
      <div className="right-sidebar" /> */}
      <Sidebar className="left-sidebar"/>
      <main>
        <Outlet />
      </main>
      <aside className="right-sidebar">
        <Trends />
      </aside>
    </>
  );
}

export default Layout;
