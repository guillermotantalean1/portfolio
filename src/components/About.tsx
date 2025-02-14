import Image from "next/image";
const About = () => {
    return (
        <section id="about" className="py-16 px-6 flex flex-col items-center text-center gap-8">
          <Image src="/images/profile.jpg" width={300} height={200} alt="Descripción" />
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
 