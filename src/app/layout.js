import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import { Cinzel_Decorative } from "next/font/google";

const magicalFont = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Autora Web",
  description: "Mundo mágico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={magicalFont.className}>

        <AudioProvider>
          {children}
        </AudioProvider>

      </body>
    </html>
  );
}