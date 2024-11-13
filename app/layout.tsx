import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "../styles/globals.css";
import {
  Inter as FontSans,
  Source_Code_Pro as FontMono,
} from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Max Boucher",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen max-w-full overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute inset-0 -z-50 h-[50vh] w-full bg-gradient-to-br from-muted/10 to-transparent"></div>
          <div className="absolute inset-0 -z-40 h-[50vh] w-full bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:25px_25px]"></div>
          <div className="absolute inset-0 -z-30 h-[50vh] w-full bg-gradient-to-t from-background to-transparent to-50%"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
