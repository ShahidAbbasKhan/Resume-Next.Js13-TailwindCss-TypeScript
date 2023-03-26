import "./globals.css";

export const metadata = {
  title: "Shahid Niazi Resume",
  description: "Developed by Shahid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
