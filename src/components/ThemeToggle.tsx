"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDarkMode = theme === "dark";

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="dark-mode-switch" className="sr-only">Toggle Dark Mode</Label>
      <Switch
        id="dark-mode-switch"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-brand-primary-500 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
      />
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </div>
  );
};

export default ThemeToggle;