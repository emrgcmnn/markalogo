import React from 'react';


const projects = [
  {
    title: 'Akıllı Tarım Sistemi',
    description: 'IoT destekli, uzaktan izlenebilir tarım projesi.',
    tech: 'React, Node.js, Firebase',
  },
  {
    title: 'Kariyer Takip Sistemi',
    description: 'Öğrencilerin gelişim sürecini izleyebileceği sistem.',
    tech: 'Java, PostgreSQL, Spring',
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolyo</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span>{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;