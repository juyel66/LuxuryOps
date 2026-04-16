"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import img1 from "../../../../public/images/Main Image.svg";
import img2 from "../../../../public/images/Thumb 1.svg";
import img3 from "../../../../public/images/Main Image.svg";
import img4 from "../../../../public/images/Main Image.svg";
import img5 from "../../../../public/images/Thumb 1.svg";
import img6 from "../../../../public/images/Main Image.svg";
import img7 from "../../../../public/images/Thumb 1.svg";


const images = [img1, img2, img3, img4, img5, img6, img7];

export default function AdminFleetDetailsHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const thumbsRef = useRef<HTMLDivElement | null>(null);
  const wheelTargetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const animateThumbScroll = () => {
    const el = thumbsRef.current;
    if (!el) return;

    const current = el.scrollTop;
    const next = current + (wheelTargetRef.current - current) * 0.16;
    el.scrollTop = next;

    if (Math.abs(wheelTargetRef.current - next) > 0.5) {
      rafRef.current = requestAnimationFrame(animateThumbScroll);
      return;
    }

    el.scrollTop = wheelTargetRef.current;
    rafRef.current = null;
  };

  const handleThumbWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (!showAll || !thumbsRef.current) return;

    event.preventDefault();
    const el = thumbsRef.current;
    const maxScroll = el.scrollHeight - el.clientHeight;

    if (rafRef.current === null) {
      wheelTargetRef.current = el.scrollTop;
    }

    wheelTargetRef.current = Math.min(
      Math.max(wheelTargetRef.current + event.deltaY, 0),
      maxScroll,
    );

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(animateThumbScroll);
    }
  };

  return (
    <section className="px-6 py-20 text-white bg-black sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_280px]">
        <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[500px]">
          <Image
            src={images[activeIndex]}
            alt="Car"
            fill
            className="object-contain transition-all duration-500"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div
            ref={thumbsRef}
            onWheel={handleThumbWheel}
            className={`flex flex-col gap-4 ${
              showAll
                ? "no-scrollbar max-h-[400px] overflow-y-auto pr-2 overscroll-contain"
                : "max-h-[363px] overflow-hidden"
            }`}
          >
            {(showAll ? images : images.slice(0, 4)).map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-[90px] w-full shrink-0 overflow-hidden rounded-md border cursor-pointer transform-gpu transition-all duration-300 ${
                  activeIndex === index
                    ? " border-[#D4AF37] bg-white/4 shadow-[0_0_0_1px_rgba(212,175,55,0.2)]"
                    : "border-white/10 bg-white/2  hover:border-white/40 hover:bg-white/5"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-contain" />
              </div>
            ))}
          </div>

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 text-sm transition text-white/70 hover:text-white"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
