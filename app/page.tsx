"use client";
import Image from "next/image";

export default function Home() {
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
            <button className="preferences__buttons hover-scale current-preference">
              Light
            </button>
            <button className="preferences__buttons hover-scale">Dark</button>
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
    </div>
  );
}
