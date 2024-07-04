"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We are here to help with any questions about our courses, programs, or
          event. Reach out and let us know how we can assist you in your musical
          hourney.
        </p>
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-lg text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 px-4 h-[3rem] bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="Your message"
          className="rounded-lg border text-white border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 px-4 pt-2 h-[6rem] bg-neutral-950 placeholder:text-neutral-700"
        />
        <button className="text-white mt-4 bg-green-500 py-2 px-3 cursor-pointer rounded">Send Message</button>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
