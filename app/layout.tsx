import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { profile } from "@/data/portfolio";

const title = `${profile.name} — Python Full Stack Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description: profile.description,
  openGraph: {
    title,
    description: profile.description,
    type: "website",
    images: [{ url: "/jishnu.jpg", width: 1024, height: 1536, alt: `Portrait of ${profile.firstName}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    images: ["/jishnu.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E9E6E2" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1818" },
  ],
};

// Runs before first paint: enables the animation start states and restores the saved theme.
const initScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")d.setAttribute("data-theme",t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
