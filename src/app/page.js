"use client";

import { useRef, useState } from "react";
import { Great_Vibes } from "next/font/google";

const magicFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const featuredBooks = [
  {
    title: "El Bosque de Cristal",
    description:
      "Una niña descubre un bosque que sólo aparece cuando alguien cree en la magia.",
  },
  {
    title: "Cartas para la Reina Dragón",
    description:
      "Historias cortas sobre valentía, amistad y secretos guardados en las montañas.",
  },
  {
    title: "La Ciudad que Flota",
    description:
      "Una aventura fantástica en una metrópolis suspendida entre nubes y estrellas.",
  },
];

const blogPosts = [
  {
    title: "Cómo nacen mis personajes",
    excerpt:
      "Un vistazo al proceso creativo detrás de heroínas, villanos y criaturas fantásticas.",
  },
  {
    title: "5 libros de fantasía que me inspiran",
    excerpt:
      "Lecturas mágicas recomendadas para quienes aman perderse en otros mundos.",
  },
  {
    title: "Detrás de escena de mi próximo cuento",
    excerpt:
      "Bocetos, música y rituales de escritura durante mis mañanas de creación.",
  },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <main className={`site-shell ${entered ? "entered" : ""}`}>
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      <section className={`intro-overlay ${entered ? "open" : ""}`}>
        <div className="mist mist-top" />
        <div className="mist mist-bottom" />

        {!entered && (
          <button
            type="button"
            onClick={handleEnter}
            className={`enter-text ${magicFont.className}`}
          >
            Entra al mundo de fantasía
          </button>
        )}
      </section>

      <div className={`main-content ${entered ? "visible" : ""}`}>
        <header className="hero">
          <nav className="top-nav">
            <a href="#perfil">Perfil</a>
            <a href="#blog">Blog</a>
            <a href="#libros">Libros y cuentos</a>
            <a href="#shopify">Tienda</a>
          </nav>

          <div className="hero-copy">
            <p className="hero-kicker">Autora de fantasía</p>
            <h1>Historias que nacen entre nubes, magia y aventuras.</h1>
            <p>
              Bienvenida a un rincón literario para descubrir nuevos cuentos,
              conocer mi proceso creativo y encontrar mis libros en un solo lugar.
            </p>
          </div>
        </header>

        <section id="perfil" className="content-card">
          <h2>Perfil de la autora</h2>
          <p>
            Soy una escritora apasionada por los mundos imaginarios, los personajes
            valientes y las historias que dejan huella. En esta web comparto mi
            trayectoria, novedades y una ventana directa a cada universo que creo.
          </p>
        </section>

        <section id="blog" className="content-card">
          <h2>Blog</h2>
          <div className="grid-list">
            {blogPosts.map((post) => (
              <article key={post.title} className="item-card">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="libros" className="content-card">
          <h2>Libros y cuentos</h2>
          <div className="grid-list">
            {featuredBooks.map((book) => (
              <article key={book.title} className="item-card">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="shopify" className="content-card shopify-block">
          <h2>Tienda conectada con Shopify</h2>
          <p>
            Aquí puedes integrar tu catálogo, colecciones destacadas y el botón de
            compra directa desde Shopify para vender tus libros impresos o digitales.
          </p>
          <a
            href="https://www.shopify.com/es"
            target="_blank"
            rel="noreferrer"
            className="shop-link"
          >
            Conectar tienda en Shopify
          </a>
        </section>
      </div>
    </main>
  );
}
