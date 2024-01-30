"use client";
import { ThemeContext } from "@/Component/context/ThemeContext";
import { useState, useEffect } from "react";
import { useContext } from "react";

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);

  // to make sure the toggle button works in other browsers
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}

export default ThemeProvider;
