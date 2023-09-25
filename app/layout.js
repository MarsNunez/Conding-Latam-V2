import "./globals.css";

export const metadata = {
  title: "Coding Latam",
  description: "Coding Latam, courses and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="True"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/4.0/lineicons.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
