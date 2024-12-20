"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../assets/photo.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full overflow-hidden "
        >
          <Image
            src={photo}
            priority
            quality={100}
            fill
            alt="Gautam Arora"
            className="object-cover"
          />
        </motion.div>

        {/* CIRCLE */}
        <motion.svg
          className="w-[202px] xl:w-[300px] h-[202px] xl:h-[300px] absolute top-0 left-0 opacity-50 "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
