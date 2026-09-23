import "./App.css";
import Navbar from "./components/Navbar";
import Niveis from "./components/Niveis";
import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="background">
           <h1 className="text-background">
            Learn english <br />
            Your way.
          </h1>

            <p className="second-text">
            Descubra o que estudar, do básico ao avançado, <br />
            e aprenda no seu ritmo.
          </p>
        </div>

        <Niveis />
      </section>

      <main>
        <ContentCard />
      </main>

      <Footer />
    </>
  );
}

export default App;