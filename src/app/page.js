"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const shopItems = [
  {
    title: "El Bosque de la Luna Dorada",
    description: "Edición ilustrada con mapas mágicos y marcapáginas encantado.",
    price: "€24",
    badge: "Más vendido",
  },
  {
    title: "Caja de Hechizos Literarios",
    description: "Pack de 3 cuentos firmados + carta secreta de la autora.",
    price: "€39",
    badge: "Edición limitada",
  },
  {
    title: "Pócima de Escritura Creativa",
    description: "Mini curso para crear tus propios cuentos de hadas.",
    price: "€19",
    badge: "Nuevo",
  },
];

const blogPosts = [
  {
    title: "Cómo nacen mis protagonistas mágicas",
    excerpt: "Un paseo por mi cuaderno de personajes, rituales creativos y secretos de construcción narrativa.",
    category: "Detrás de escena",
    readTime: "6 min",
  },
  {
    title: "5 libros de fantasía suave para leer en otoño",
    excerpt: "Recomendaciones cálidas, bosques con niebla y heroínas que abrazan su destino.",
    category: "Recomendaciones",
    readTime: "4 min",
  },
  {
    title: "Playlist encantada para escribir cuentos",
    excerpt: "Música ambiental, sonidos del bosque y melodías que ayudan a imaginar mundos.",
    category: "Inspiración",
    readTime: "3 min",
  },
];


const authorBio = {
  name: "Lía del Bosque",
  role: "Autora de fantasía y cuentos de hadas",
  description:
    "Escribo historias para niñas, niños y adultos soñadores que creen en puertas secretas, bosques encantados y protagonistas valientes.",
  longDescription:
    "Durante la última década he compartido talleres, clubes de lectura y novelas ilustradas inspiradas en mitología, naturaleza y magia cotidiana. Mi misión es crear relatos que abracen, inspiren y despierten imaginación.",
  highlights: ["12 libros publicados", "+35k lectoras y lectores", "Talleres en 8 países"],
};

const storySamples = [
  {
    title: "La guardiana del reloj de pétalos",
    text: "Cuando el último pétalo cayó, Alma oyó al reloj del jardín susurrar su nombre. Las agujas no marcaban horas: marcaban destinos.",
  },
  {
    title: "El dragón que coleccionaba canciones",
    text: "No escupía fuego, sino notas brillantes que flotaban entre los árboles y enseñaban a los niños a no olvidar sus sueños.",
  },
  {
    title: "Las cartas de la reina de escarcha",
    text: "Llegaban al amanecer, escritas con tinta de aurora. Cada carta abría una puerta distinta en la pared de la biblioteca.",
  },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const twinkles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    top: `${(i * 29) % 100}%`,
    left: `${(i * 17 + 11) % 100}%`,
    delay: `${(i % 6) * 0.4}s`,
    duration: `${2 + (i % 5) * 0.6}s`,
  }));

  const handleEnter = () => {
    setEntered(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }
  };

  return (
    <main className={`fantasy-page ${entered ? "entered" : ""}`}>
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      {!entered && (
        <section className="portal-screen">
          <div className="cloud cloud-left" />
          <div className="cloud cloud-right" />
          <div className="mist-layer" />
          <button onClick={handleEnter} className="enter-text">
            Entrar al mundo mágico
          </button>
        </section>
      )}

      <div className="twinkle-layer" aria-hidden>
        {twinkles.map((twinkle) => (
          <span
            key={twinkle.id}
            className="twinkle"
            style={{
              top: twinkle.top,
              left: twinkle.left,
              animationDelay: twinkle.delay,
              animationDuration: twinkle.duration,
            }}
          />
        ))}
      </div>

      <section className="hero">
        <p className="hero-kicker">Bienvenida al reino de las historias</p>
        <h1>Cuentos, magia y libros que brillan</h1>
        <p>
          Un rincón fantástico para descubrir novelas, leer avances exclusivos y acompañarme
          detrás de cada hechizo literario.
        </p>
      </section>


      <section className="section-card bio-section" id="biografia">
        <div className="bio-portrait-wrap">
          <Image
            src="/images/author-portrait.svg"
            alt="Retrato artístico de la autora"
            width={420}
            height={520}
            className="bio-portrait"
            priority
          />
        </div>

        <div className="bio-content">
          <div className="section-heading">
            <p>Biografía</p>
            <h2>Conoce a la autora</h2>
          </div>
          <h3>{authorBio.name}</h3>
          <p className="bio-role">{authorBio.role}</p>
          <p>{authorBio.description}</p>
          <p>{authorBio.longDescription}</p>

          <ul className="bio-highlights">
            {authorBio.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card" id="shop">
        <div className="section-heading">
          <p>Tienda encantada</p>
          <h2>Shop de autora con espíritu Shopify</h2>
        </div>
        <div className="grid-cards">
          {shopItems.map((item) => (
            <article key={item.title} className="fantasy-card shop-card">
              <span className="badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="card-footer">
                <strong>{item.price}</strong>
                <button>Agregar al carrito</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" id="blog">
        <div className="section-heading">
          <p>Blog literario</p>
          <h2>Posteos mágicos y novedades</h2>
        </div>
        <div className="grid-cards">
          {blogPosts.map((post) => (
            <article key={post.title} className="fantasy-card">
              <div className="meta-row">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" aria-label={`Leer ${post.title}`}>
                Leer post completo →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" id="muestras">
        <div className="section-heading">
          <p>Lecturas de muestra</p>
          <h2>Lee fragmentos de mis cuentos</h2>
        </div>
        <div className="sample-list">
          {storySamples.map((sample) => (
            <article key={sample.title} className="sample-item">
              <h3 className="sample-title">{sample.title}</h3>
              <p>{sample.text}</p>
              <button>Continuar leyendo</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
