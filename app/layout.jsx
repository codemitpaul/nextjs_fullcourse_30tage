import Link from "next/link";
import { GiSkills } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import Header from "./Header";
import "./styles/globals.css";

export const metadata = {
  title: "Starter",
  description: "Starter Projekt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
