import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";

export const metadata = {
  title: "Autora Web",
  description: "Mundo mágico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
