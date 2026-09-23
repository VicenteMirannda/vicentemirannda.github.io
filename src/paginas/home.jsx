
import React from 'react';
import TerminalHeader from '../componentes/TerminalHeader';
import ProjectCard from '../componentes/ProjectCard';

export default function Home() {
  return (
    <div className="container">
      <TerminalHeader />

      <section>
        <h2><span className="text-green">~</span>/projetos</h2>
        
        {/* Usamos o componente ProjectCard passando as "Props" */}
        <ProjectCard 
          titulo="CalorieAI — Aplicação móvel de
reconhecimento de alimentos com IA"
          tecnologias="[Flutter, FastAPI, Python, MobileNetV2, YOLOv8, Google Cloud Run]"
          descricao="Desenvolvimento de uma aplicação móvel para reconhecimento de alimentos
e estimativa calórica através de imagens, recorrendo a Inteligência Artificial
e Visão Computacional. Implementação de uma pipeline com YOLOv8 e
MobileNetV2, utilizando Transfer Learning, e desenvolvimento da API de
inferência em Python/FastAPI, alojada no Google Cloud Run através de
Docker. Desenvolvimento da aplicação em Flutter (Dart), com integração de
Firebase Authentication e Cloud Firestore para autenticação e persistência
de dados."
          repoLink="https://github.com/teu-username/calorie-ai"
        />

      </section>
    </div>
  );
}