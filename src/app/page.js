import React from "react";
import Hero from "@/components/Hero";
import Reminder from "@/components/Reminder";
import { getCurrentUser } from "@/libs/session";
import { redirect } from "next/navigation";

export default async function Home() {

  return (
    <section className="">
      <Hero />
      <Reminder />
    </section>
  );
}
