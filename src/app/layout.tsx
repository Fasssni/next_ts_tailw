import { Inter, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js",
  description: "NEXT APP!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("min-h-screen font- antialiased", roboto)}>
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
