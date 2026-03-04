"use client";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import GridDistortion from "./gridDistortion";

export function Hero({
  title,
  subtitle,
  backgroundImage,
  textLinkLeft,
  textLinkRight,
  divider,
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-48 text-center text-white flex align-center justify-center  md:min-h-[100px]">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, ease: "easeInOut" }}
      >
        <div className="relative w-full h-[600px]">
          <GridDistortion
            imageSrc={backgroundImage?.src || backgroundImage}
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="custom-class"
          />
          <div className="absolute inset-0 bg-purple-900/40 pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 px-4 sm:px-6 lg:px-20"
      >
        <h1 className="text-white text-xl md:text-xl lg:text-[35px] font-bold text-balance leading-tight">
          {title}
        </h1>

        <h1 className="text-white text-xl md:text-xl lg:text-[35px] font-bold mb-4 md:mb-6 text-balance leading-tight">
          {subtitle}
        </h1>

        <div className="flex flex-row items-center justify-center">
          {textLinkLeft && (
            <Link href={textLinkLeft.href}>
              <span className="text-left">{textLinkLeft.label}</span>
            </Link>
          )}

          <div className="flex items-center">
            {divider || <BiChevronRight className="w-8 h-8" />}
          </div>

          {textLinkRight && (
            <Link href={textLinkRight.href}>
              <span className="text-right">{textLinkRight.label}</span>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
