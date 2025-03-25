"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "yeehaw",
      "creator of random awesomeness",
      "curiosity killed me",
      "limbus company"
    ],
    loop: 0,
    delaySpeed: 2500,
    typeSpeed: 50,
    deleteSpeed: 50
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      {/* pfp */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-3 border-gray">
        <Image
          src="/pfp.jpg"
          alt="My Profile Picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* typewriter */}
      <h1 className="text-3xl text-center text-black-100 m-0" style={{ fontFamily: '"Maple Font Mono", monospace' }}>
        <span>{text}</span>
        <Cursor cursorColor="black" />
      </h1>
    </div>
  );
}
