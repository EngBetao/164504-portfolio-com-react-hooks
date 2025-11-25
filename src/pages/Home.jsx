import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  // HOOK 1: useState para guardar a lista de projetos
  const [projects, setProjects] = useState([]);

  // HOOK 2: useEffect para carregar os dados ao abrir a página
  useEffect(() => {
    // Simulando uma API com dados fictícios
    const data = [
      { id: 1, title: "E-commerce React", desc: "Aplicação completa de loja virtual com carrinho de compras e checkout." },
      { id: 2, title: "Dashboard Financeiro", desc: "Sistema para controle de gastos pessoais com gráficos interativos." },
      { id: 3, title: "Landing Page SaaS", desc: "Página de alta conversão para produtos digitais responsiva." },
      { id: 4, title: "Task Manager", desc: "Aplicativo de gerenciamento de tarefas com drag-and-drop." },
    ];
    setProjects(data);
  }, []);

  return (
    <div>
      {/* SEÇÃO HERO */}
      <section className="hero container">
        <h1>Criando experiências<br />digitais únicas.</h1>
        <p>Desenvolvedor Front-end especializado em React. Transformo ideias em código limpo, performático e acessível.</p>
        <button className="btn">Ver Projetos</button>
      </section>

      {/* SEÇÃO PROJETOS (GRID) */}
      <section className="projects container">
        <h2>Projetos Selecionados</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="card-img">Preview do Projeto</div>
              <div className="card-body">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <button className="btn" style={{padding: '8px 20px', fontSize: '0.8rem'}}>Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO SOBRE (TIMELINE) */}
      <section className="about container" style={{paddingBottom: '100px'}}>
        <h2>Minha Jornada</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>
            <span className="year">2023</span>
            <p>Início dos estudos em Lógica de Programação e Git.</p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <span className="year">2024</span>
            <p>Primeiros projetos com HTML, CSS e JavaScript Vanilla.</p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <span className="year">2025</span>
            <p>Especialização em React, Hooks e Ecossistema Vite.</p>
          </div>
          <div className="timeline-item">
            <div className="dot"></div>
            <span className="year">Futuro</span>
            <p>Foco em desenvolvimento Full Stack e Arquitetura.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;