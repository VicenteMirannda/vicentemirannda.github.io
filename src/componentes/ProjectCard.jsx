
import React from 'react';

// O componente recebe "props" (parâmetros) 
export default function ProjectCard({ titulo, tecnologias, descricao, repoLink }) {
  return (
    <div style={{
      border: '1px solid #30363d',
      borderRadius: '6px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#161b22'
    }}>
      <h3 className="text-blue" style={{ marginTop: 0 }}>{titulo}</h3>
      <p className="text-yellow" style={{ fontSize: '0.9em' }}>{tecnologias}</p>
      <p>{descricao}</p>
      
      <a href={repoLink} target="_blank" rel="noreferrer" 
         style={{ color: '#2ea043', textDecoration: 'none', fontWeight: 'bold' }}>
        [ Ver Código Fonte ]
      </a>
    </div>
  );
}