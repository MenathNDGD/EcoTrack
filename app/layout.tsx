"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { metadata } from "./metadata";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title) || "EcoTrack"}</title>
        <meta
          name="description"
          content={
            metadata.description || "AI-powered Waste Management Platform"
          }
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white">
          {/* Header Component */}
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            totalPoints={totalPoints}
          />
          <div className="flex flex-1">
            {/* Sidebar Component */}
            <main className="flex-1 p-4 ml-0 transition-all duration-300 lg:p-8 lg:ml-64">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
