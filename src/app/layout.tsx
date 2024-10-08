import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoryblokBridgeLoader, storyblokInit } from "@storyblok/react/rsc";
import { storyblokSettings } from "@/lib/cms/storyblok/settings";
import Footer from "@/components/molecules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "✨ DreamBuild | The magic stack.",
  description:
    "Build your next vision with DreamBuild. Created by Dominik Rubröder.",
};

storyblokInit(storyblokSettings);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bridgeOptions = { resolveRelations: ["article.author"] };

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
      <StoryblokBridgeLoader options={bridgeOptions} />
    </html>
  );
}
