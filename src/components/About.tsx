const About = () => {
    return (
        <section id="about" className="py-16 px-6 flex flex-col items-center text-center gap-8">
        <img src="/images/profile.jpg" alt="Guillermo" className="w-40 h-40 rounded-full shadow-lg" />
        <div>
          <h2 className="text-2xl font-semibold">Sobre mí</h2>
          <p className="text-muted mt-2 max-w-md">
            Desarrollador de software con experiencia en Swift, Python y JavaScript. Me apasiona construir productos digitales con impacto.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;