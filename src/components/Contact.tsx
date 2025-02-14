const Contact = () => {
    return (
      <section id="contact" className="py-16 px-6 text-center bg-background text-foreground">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-muted">¿Trabajamos juntos? ¡Hablemos! 🚀</p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <a href="mailto:guillermotantalean1@icloud.com" className="text-lg text-buttonText hover:underline">
              📩 guillermotantalean1@icloud.com
            </a>
            <a href="https://www.linkedin.com/in/guillermotantalean1" className="text-lg text-buttonText hover:underline">
              💼 LinkedIn
            </a>
            <a href="https://github.com/guillermotantalean1" className="text-lg text-buttonText hover:underline">
              🔗 GitHub
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;