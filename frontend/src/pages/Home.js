import { Link } from "react-router-dom";
import { FaBookmark, FaChartLine, FaLayerGroup, FaUserPlus } from "react-icons/fa";
import StepCard from "../components/StepCard";
import ContentCard from "../components/ContentCard";

function Home({ user }) {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="text-background">
            Learn english <br />
            <span className="highlight">Your way.</span>
          </h1>

          <p className="second-text">
            Descubra o que estudar, do básico ao avançado, e aprenda no seu ritmo.
          </p>

          {user ? (
            <div className="hero-cta">
              <Link className="btn btn-accent" to="/niveis">
                <FaLayerGroup /> Ir para os níveis
              </Link>
            </div>
          ) : (
            <>
              <div className="hero-cta">
                <Link className="btn btn-accent" to="/cadastro">
                  <FaUserPlus /> Criar minha conta
                </Link>
              </div>
              <p className="hero-login">
                Já tem conta? <Link to="/login">Entrar</Link>
              </p>
            </>
          )}
        </div>
      </section>

      <main>
        <section className="how-it-works">
          <h2 className="section-title">Como funciona</h2>
          <div className="steps">
            <StepCard
              number="1"
              icon={<FaLayerGroup />}
              title="Conheça cada nível"
              text="Veja os assuntos essenciais de A1 a C2, organizados de acordo com o CEFR."
            />
            <StepCard
              number="2"
              icon={<FaBookmark />}
              title="Marque o que você estuda"
              text="Crie uma conta e marque o que você já domina e o que precisa estudar."
            />
            <StepCard
              number="3"
              icon={<FaChartLine />}
              title="Acompanhe seu progresso"
              text="Veja tudo o que você marcou na página Meus estudos."
            />
          </div>
        </section>

        <ContentCard title="O que você vai encontrar" />
      </main>
    </>
  );
}

export default Home;
