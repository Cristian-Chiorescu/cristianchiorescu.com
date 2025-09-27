"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="hover:cursor-pointer hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background scale-100"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="scale-150 dark:scale-0"></Sun>
      <Moon className="absolute scale-0 dark:scale-150"></Moon>
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
