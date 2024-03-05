import CatSection from "@/components/CatSection";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div className="bg-zinc-50 w-screen text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <Categories />
      <CatSection />
      <CatSection />
      <CatSection />
      <CatSection />
    </div>
  );
}

export default Home;
