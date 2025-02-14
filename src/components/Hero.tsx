const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Hola, soy Guillermo Tantaleán 👋</h1>
        <p className="text-lg text-muted max-w-md">
          Software Engineer enfocado en desarrollo móvil y web.
        </p>
        <a 
          href="#projects" 
          className="px-4 py-2 border border-gray-500 rounded-lg text-sm hover:bg-white hover:text-black transition-all"
        >
          Ver Proyectos
        </a>
      </section>
    );
  };
  
  export default Hero;