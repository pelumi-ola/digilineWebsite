"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function PremiumCTA() {
  const pathname = usePathname();

  // Show CTA only on product or service pages
  const showCTA =
    pathname.startsWith("/products") || pathname.startsWith("/solutions");

  if (!showCTA) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-[#9D66F1] via-[#7B3EF8] to-[#9D66F1] text-white py-16 px-4 sm:px-6 lg:px-20 rounded-t-3xl shadow-2xl"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full translate-x-1/3 translate-y-1/3 filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Elevate Your Digital Experience
          </h2>
          <p className="text-lg text-white/90">
            Discover our premium products and services designed to enhance
            engagement, streamline workflows, and drive growth for your
            business.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#7B3EF8] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/90 transition-all duration-300 text-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
