import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const nanumGothicCodingRegular = Nanum_Gothic_Coding({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${nanumGothicCodingRegular.className}`}>
        {children}
      </body>
    </html>
  );
}
