export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nested layout example</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
