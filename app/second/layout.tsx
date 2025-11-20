export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Second Layout</h1>
        {children}
      </body>
    </html>
  );
}
