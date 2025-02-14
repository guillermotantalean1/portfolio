const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-end space-x-6 text-sm text-muted backdrop-blur-md">
        <a href="#projects" className="hover:text-white">Proyectos</a>
        <a href="#about" className="hover:text-white">Sobre mí</a>
        <a href="#contact" className="hover:text-white">Contacto</a>
      </nav>
    );
  };
  
  export default Navbar;