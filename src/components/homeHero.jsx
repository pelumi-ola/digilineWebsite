"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MovingBorderCard } from "./movingborder";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // smooth easeOutExpo
    },
  },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  heroImages = [],
  showButtons = false,
}) {
  return (
    <section className="relative bg-white md:py-20 py-10 px-4 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-5 items-center">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <motion.h1
              variants={fadeUp}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            >
              <span className="animated-gradient-text">{title}</span>
            </motion.h1>

            {description && (
              <motion.p
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base md:text-lg max-w-xl mb-8"
              >
                {description}
              </motion.p>
            )}

            {showButtons && (
              <motion.div
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                {primaryCTA && (
                  <Link href={primaryCTA.href}>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-white px-13 py-9 rounded-xl font-semibold uppercase text-sm">
                        {primaryCTA.text}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </Link>
                )}

                {secondaryCTA && (
                  <Link href={secondaryCTA.href}>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-primary text-primary px-10 py-8 rounded-xl font-semibold uppercase text-sm"
                      >
                        {secondaryCTA.text}
                      </Button>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT SIDE - 3 IMAGES SIDE BY SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-85 md:w-120 h-115 flex justify-center items-center">
              <div className="flex gap-3 items-start">
                {/* LEFT - heroImages[0] (TALLER) */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  animate="animate"
                >
                  <motion.div variants={float} animate="animate">
                    <MovingBorderCard>
                      <div className="bg-purple-300 rounded-[40px] p-3">
                        <div className="relative w-40 h-80 md:w-56 md:h-96 rounded-[30px] overflow-hidden">
                          <Image
                            src={heroImages[0]}
                            alt="Hero 1"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </MovingBorderCard>
                  </motion.div>
                </motion.div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-3">
                  {/* heroImages[1] (Top Right) */}
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                  >
                    <motion.div variants={float} animate="animate">
                      <MovingBorderCard>
                        <div className="bg-primary rounded-[40px] p-3">
                          <div className="relative w-40 h-36 md:w-52 md:h-44 rounded-[30px] overflow-hidden">
                            <Image
                              src={heroImages[1]}
                              alt="Hero 2"
                              fill
                              className="object-cover object-top"
                            />
                          </div>
                        </div>
                      </MovingBorderCard>
                    </motion.div>
                  </motion.div>

                  {/* heroImages[2] (Bottom Right) */}
                  <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
                    <motion.div variants={float} animate="animate">
                      <MovingBorderCard>
                        <div className="bg-white rounded-[40px] p-3 border shadow-lg">
                          <div className="relative w-40 h-36 md:w-52 md:h-44 rounded-[30px] overflow-hidden">
                            <Image
                              src={heroImages[2]}
                              alt="Hero 3"
                              fill
                              className="object-cover object-top"
                            />
                          </div>
                        </div>
                      </MovingBorderCard>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
