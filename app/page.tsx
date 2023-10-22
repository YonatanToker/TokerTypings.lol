"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
type ThemeType = "light" | "dark" | null;
export default function Home() {
  const applyDarkTheme = () => {
    document.documentElement.style.setProperty("--bg-white", "#131313");
    document.documentElement.style.setProperty("--bg-light", "#313131");
    document.documentElement.style.setProperty("--bg-darker", "#ffffff");
    document.documentElement.style.setProperty("--bg-dark", "#e7e7e7");
    document.documentElement.style.setProperty("--text-darker", "#ffffff");
    document.documentElement.style.setProperty("--text-dark", "#e7e7e7");
    document.documentElement.style.setProperty("--text-lighter", "#313131");
    document.documentElement.style.setProperty("--text-white", "#131313");
    //... add or update other necessary variables
  };
  const applyLightTheme = () => {
    document.documentElement.style.setProperty("--bg-white", "#ffffff");
    document.documentElement.style.setProperty("--bg-light", "#e7e7e7");
    document.documentElement.style.setProperty("--bg-dark", "#313131");
    document.documentElement.style.setProperty("--bg-darker", "#131313");
    document.documentElement.style.setProperty("--text-darker", "#131313");
    document.documentElement.style.setProperty("--text-white", "#ffffff");
    document.documentElement.style.setProperty("--text-lighter", "#e7e7e7");
    document.documentElement.style.setProperty("--text-dark", "#313131");
    //... revert other variables back to their light theme values
  };

  const getDefaultTheme = (): ThemeType => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as ThemeType;
      const validThemes: ThemeType[] = ["light", "dark"];

      if (validThemes.includes(storedTheme)) {
        return storedTheme;
      }
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light"; // default value if none of the above conditions meet
  };

  const [theme, setTheme] = useState<ThemeType>(null);
  useEffect(() => {
    const chosenTheme = getDefaultTheme(); // get theme from localStorage or user preference
    setTheme(chosenTheme);

    if (chosenTheme === "dark") {
      applyDarkTheme();
    } else if (chosenTheme === "light") {
      applyLightTheme();
    }
  }, []);
  const handleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      applyDarkTheme();
    } else if (newTheme === "light") {
      applyLightTheme();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return (
    <div className="p-4 relative">
      <h1 className="text-4xl text-center tracking-wider">
        Welcome to TokerTypings.lol 👋
      </h1>
      <h2 className="text-2xl text-center my-4">
        Be ready to play typing tests with your set of preferences and track
        your progress!
      </h2>
      <div className="preferences">
        <div className="preferences__title">
          <h1>Choose your preferences</h1>
        </div>
        <div className="preference-container">
          <div className="preference__item">
            <h1 className="text-2xl underline">Theme:</h1>
            <button
              className={`preferences__buttons hover-scale ${
                theme && theme === "light" ? "current-preference" : ""
              }`}
              onClick={() => handleTheme("light")}
            >
              surprise 1
            </button>
            <button
              className={`preferences__buttons hover-scale ${
                theme && theme === "dark" ? "current-preference" : ""
              }`}
              onClick={() => handleTheme("dark")}
            >
              surprise 2
            </button>
          </div>
          <div className="preference__item">
            <h1 className="text-2xl underline">Font Family:</h1>
            <button className="preferences__buttons hover-scale current-preference">
              sans-serif
            </button>
            <button className="preferences__buttons hover-scale">
              monospace
            </button>
            <button className="preferences__buttons hover-scale">
              cursive
            </button>
          </div>
          <div className="preference__item">
            <h1 className="text-2xl underline">Punctuation:</h1>
            <button className="preferences__buttons hover-scale current-preference">
              without
            </button>
            <button className="preferences__buttons hover-scale">with</button>
          </div>
        </div>
      </div>
      <button className="reset-default-btn hover-scale">Reset Default</button>
    </div>
  );
}
