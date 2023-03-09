"use client";
import Card from "@/client/components/teste/Card";
import { useState } from "react";

export default function Pricing() {
  const [onCard, setOnCard] = useState(false);

  function mouseEnter(t: string) {
    console.log(t);
    setOnCard(true);
  }
  function mouseLeave() {
    setOnCard(false);
  }

  return (
    <div className={`h-screen ${onCard ? "bg-blue-500" : "bg-lime-500"}`}>
      <Card mouseEnter={mouseEnter} mouseLeave={mouseLeave}></Card>
    </div>
  );
}
