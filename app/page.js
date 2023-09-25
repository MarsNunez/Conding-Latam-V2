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
      <div className="min-h-screen absolute z-10 w-full top-0 backdrop-blur-md duration-200">
        <div
          className={`w-3/4 bg-white min-h-screen border-r-2 drop-shadow-lg absolute duration-200 border border-red-600 ${
            first ? "-left-full" : "-left-0"
          }`}
        >
          Sidebar
        </div>
      </div>
      <div className="relative">
        <Navbar />
        <div className="p-6">
          <Topics />
          <CardsWrapper />
        </div>
        <Footer />
      </div>
    </main>
  );
}
