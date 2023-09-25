import CardsWrapper from "./components/CardsWrapper";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6">
        <Topics />
        <CardsWrapper />
      </div>
    </main>
  );
}
