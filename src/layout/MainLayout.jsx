import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header";
import Footer from "./Footer";


function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

    <Footer/>
    </div>
  );
}

export default MainLayout;