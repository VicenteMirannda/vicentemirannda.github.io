
import React from 'react';

export default function TerminalHeader() {
  return (
    <div style={{ borderLeft: '3px solid #2ea043', paddingLeft: '15px', marginBottom: '40px' }}>
      <p>
        <span className="text-green">vicente@portfolio</span>:
        <span className="text-blue">~/inicio</span>$ ./apresentacao.sh
      </p>
      <h1 style={{ margin: '10px 0' }}>
        <span className="text-yellow">{">"}</span> Vicente Miranda
      </h1>
      <p style={{ color: '#8b949e' }}>
        /* Engenheiro Informático | Full-Stack | Inteligência Artificial */
      </p>
    </div>
  );
}