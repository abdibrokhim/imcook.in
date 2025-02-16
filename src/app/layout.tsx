import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "welcome to ibrohim abdivokhidov's startup kitchen",
  description: "welcome to ibrohim abdivokhidov's startup kitchen. let's make something cool.",
  metadataBase: new URL("https://imcook.in/"),
  keywords: ["ai builder", "youtube creator", "open-source builder", "open-source"],
  
  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: "Ibrohim Abdivokhidov",
      url: "https://github.com/abdibrokhim",
    },
  ],

  openGraph: {
    title: "welcome to ibrohim abdivokhidov's startup kitchen",
    description: "welcome to ibrohim abdivokhidov's startup kitchen. let's make something cool.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/assets/oc-logo.png",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  },
  
  icons: {
    icon: '/favicon.ico',
  },

  twitter: {
    card: 'summary_large_image',
    title: "welcome to ibrohim abdivokhidov's startup kitchen",
    description: "welcome to ibrohim abdivokhidov's startup kitchen. let's make something cool.",
    images: ['/assets/oc-logo.png'],
    site: '@abdibrokhim',
    creator: '@abdibrokhim',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  appleWebApp: {
    title: 'abee',
    statusBarStyle: 'black-translucent',
  },
  
  appLinks: {
    web: {
      url: 'https://imcook.in',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
