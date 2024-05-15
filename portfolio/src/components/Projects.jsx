import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Arqentina.gu',
      imageUrl: 'https://i.postimg.cc/T32xjc6G/aqentina.jpg',
      websiteUrl: 'https://arqentinagu.ar/',
    },
    {
      title: 'Sein y Cia',
      imageUrl: 'https://i.postimg.cc/T32xjc6G/aqentina.jpg',
      websiteUrl: 'https://arqentinagu.ar/',
    }
  ];

  return (
    <div className="bg-cover">
      <div className="mx-auto px-8 md:px-54 lg:px-80">
        <h2 className="text-center w-44 h-10 text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 rounded">
          Portfolio:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md mb-4"> {/* Agregar mb-4 para el margen inferior */}
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
              </a>
              <div className="p-4">
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold text-center">{project.title}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
