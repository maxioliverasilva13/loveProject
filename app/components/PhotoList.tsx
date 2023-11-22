import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Props {
  image: any;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash md:w-1/2 w-full bg-cover" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <div className="w-[230px] h-[300px] relative">
          <Image layout="fill" objectFit="cover" className="rounded-md" src={image} alt="Alt" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["/images/photo1.jpg", 340, 10],
  ["/images/photo2.jpg", 20, 40],
  ["/images/photo3.jpg", 60, 90],
  ["/images/photo4.jpg", 80, 120],
  ["/images/photo5.jpg", 100, 140],
];

export default function PhotoList() {
  return food.map(([image, hueA, hueB]) => <Card image={image} hueA={hueA} hueB={hueB} key={image} />);
}
