"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CloudTransition({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // iniciar animación después de cargar
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* CONTENIDO REAL */}
      <div className={`content ${open ? "visible" : "hidden"}`}>
        {children}
      </div>

      {/* NUBE OVERLAY */}
      <div className={`cloud-overlay ${open ? "open" : ""}`}>
        <Image
          src="/images/clouds.png"
          className="cloud-image"
          alt="clouds"
          width={1200}
          height={800}
        />
      </div>
    </>
  );
}
