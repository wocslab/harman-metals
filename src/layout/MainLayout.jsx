import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header";
import Footer from "./Footer";
import FloatingChat from "../components/FloatingChat";

function MainLayout() {
  return (
    <div>
      <Navbar />

       <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <FloatingChat />
    </div>
  );
}

export default MainLayout;