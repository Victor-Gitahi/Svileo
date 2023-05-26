"use client";
import React from "react";
import useAuth from "../context/useAuth";

export default function page() {
  useAuth();
  return (
    <main>
      <h1>Dash Page</h1>
      <p>Proteced Content</p>
    </main>
  );
}
