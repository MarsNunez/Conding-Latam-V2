"use client";
import { useState } from "react";
import CardsWrapper from "./components/CardsWrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";

export default function Home() {
  const [first, setFirst] = useState(false);

  return (
    <main className="relative">
      <div className="border border-red-600 z-10 w-full absolute h-full">
        <div className="fixed w-3/4 h-screen bg-white border border-green-600">
          sidevar
        </div>
      </div>
      <div className="relative">
        <Navbar setFirst={setFirst} />
        <div className="p-6">
          <Topics />
          <CardsWrapper />
        </div>
        <Footer />
      </div>
    </main>
  );
}
