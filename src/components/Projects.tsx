const Projects = () => {
    return (
      <section id="projects" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-medium">Mi Podcast</h3>
          <p className="text-muted mt-2 max-w-md">
            Un espacio donde visitamos cafeterías y discutimos sobre lo último de café, negocios, tecnología y más.
          </p>
          <iframe
            src="https://open.spotify.com/embed/episode/6eff1rjaC7ZOi6fSqrxvSO?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="encrypted-media"
            className="mt-4"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default Projects;