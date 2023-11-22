'use client'

import { motion, useScroll, useSpring } from "framer-motion";
import { Image } from "./Image";

const vertical = "2/3";
const horizontal = "3/2";

const photos: PhotoMetadata[] = [
  { aspectRatio: horizontal, src: "/images2/photo1.jpg" },
  { aspectRatio: vertical, src: "/images2/photo2.jpg" },
  { aspectRatio: vertical, src: "/images2/photo3.jpg" },
  { aspectRatio: horizontal, src: "/images2/photo4.jpg" },
  { aspectRatio: vertical, src: "/images2/photo5.jpg" },
  { aspectRatio: horizontal, src: "/images2/photo6.jpg" },
  { aspectRatio: horizontal, src: "/images2/photo7.jpg" },
  { aspectRatio: vertical, src: "/images/photo1.jpg" },
];

export interface PhotoMetadata {
  aspectRatio: string;
  src: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
}

export function Gallery({ category, alt, title, titleWidth }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.article initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <motion.h1
        style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        {title}
      </motion.h1>
      {photos.map(({ aspectRatio, src }, index) => (
        <Image
          src={src}
          key={`item-${index}`}
          category={category}
          index={index + 1}
          alt={alt}
          aspectRatio={aspectRatio}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </motion.article>
  );
}
