"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-7 items-center justify-center p-5 py-28 bg-[#ededed]">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-3xl md:text-3xl font-bold">
          <h1 className="inline">
            You <span className="inline bg-clip-text">Speak</span> <br />
          </h1>{" "}
          We{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 text-transparent bg-clip-text">
              Accurately
            </span>{" "}
            <br />
            Transcribe
          </h2>
        </main>

        <p className="text-2xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Taking{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Transcription",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Editing",
              1000,
              "Subtitling",
              1000,
              "Captioning",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 text-transparent bg-clip-text w-[145px] inline-block"
            repeat={Infinity}
          />
          to another level
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-blue-500 hover:bg-blue-500/90">
            Get Started
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="Mountains"
          src="/hero.svg"
          width={626}
          height={417}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
