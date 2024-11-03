"use client";
import React, { useState } from "react";
import Image from "next/image";
import result_carro1 from "./../image/result_carro1.webp";
import result_carro3 from "./../image/result_carro3.webp";
import result_carro4 from "./../image/result_carro4.webp";
import result_carro5 from "./../image/result_carro5.webp";
import result_carro6 from "./../image/result_carro6.webp";
import result_carro10 from "./../image/result_carro10.webp";
import result_carro11 from "./../image/result_carro11.webp";

const slides = [
  result_carro1,
  result_carro3,
  result_carro4,
  result_carro5,
  result_carro6,
  result_carro10,
  result_carro11,
];

export default function Carrosel() {
  const [atual, setAtual] = useState(0);

  const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1);
  const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1);

  return (
    <div className="max-w-lg ml-20 mt-20">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translatex(-${atual * 100}%)` }}
        >
          {slides.map((s, i) => (
            <Image key={i} src={s} alt="" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 ">
          <button
            className="text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={prev}
          >
            {"<"}
          </button>
          <button
            className="text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={next}
          >
            {">"}
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setAtual(i)}
                className={`transition-all w-3 h-3 bg-green-700 rounded-full ${
                  atual === i ? "p-2" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
