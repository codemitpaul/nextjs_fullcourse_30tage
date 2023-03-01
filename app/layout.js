import "./globals.css";
import Header from "./Header";
import Provider from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
