"use client";

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState("false");
  const [totalPoints, setTotalPoints] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-700">
          {/* Header Component */}
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
