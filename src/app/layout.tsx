import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Guillermo T.",
  description: "Guillermo Tantaleán - Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto p-6 mt-24">{children}</main>
        <footer className="p-6 text-center bg-footerBg text-white">
          <p>© {new Date().getFullYear()} Guillermo Tantaleán. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}