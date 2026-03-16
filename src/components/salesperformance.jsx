"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Globe, Clock, ShieldCheck, Activity, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function SalesPerformance() {
  const proven = [
    {
      icon: TrendingUp,
      title: "Performance that Speaks",
      desc: "Proven scalability and reliability across global deployments.",
    },
    {
      icon: Globe,
      title: "Customer Centric",
      desc: "Tailored solutions built around real business needs.",
    },
    {
      icon: Activity,
      title: "Digital Leadership",
      desc: "Driving innovation in a fast-evolving telecom landscape.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Partnership",
      desc: "Long-term relationships built on transparency and results.",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="py-15 px-3"
    >
      <motion.div
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 lg:px-20"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 px-20">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="md:text-3xl text-xl font-bold tracking-tight">
              Why Digiline
            </span>

            <div className="flex-1 h-px bg-purple-200"></div>
          </div>

          <p className="text-sm text-primary mt-2">
            Performance, Scale & Trust You Can Rely On
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built on proven infrastructure, deep expertise, and customer first
            execution
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4 mb-16">
          {proven.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col items-center text-center py-10 px-6 rounded-2xl bg-gradient-to-b from-white to-purple-50 border border-purple-100 shadow-sm hover:shadow-xl hover:ring-1 hover:ring-purple-200 transition-all duration-300"
            >
              <div
                className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-purple-700" />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-semibold text-md mb-3">
                {item.title}
              </h3>

              {/* Accent line */}
              <div className="w-10 h-[2px] bg-purple-400 rounded-full mb-4"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Proven at Scale */}

        <div className="flex items-center justify-center gap-4 px-4 lg:px-20 mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-3xl font-semibold text-[#000000]">
            Proven at Scale
          </span>

          <div className="flex-1 h-px bg-purple-200"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { number: "50+", label: "Countries Served" },
            { number: "10+", label: "Years Experience" },
            { number: "99.9%", label: "Service Reliability" },
            { number: "1B+", label: "Monthly Transactions" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group text-center py-8 px-6 rounded-2xl 
  bg-white border border-purple-100 shadow-sm 
  hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <h4
                className="text-4xl md:text-5xl font-bold 
  bg-gradient-to-r from-purple-700 to-purple-500 
  bg-clip-text text-transparent"
              >
                {stat.number}
              </h4>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-purple-300 rounded-full mx-auto my-4"></div>

              {/* Label */}
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm py-8">
          Join us on our journey of growth and innovation as we shape the future
          of telecommunications.
        </p>

        <Link href="/contact" className="flex items-center justify-center">
          <Button className="bg-primary text-white hover:text-ring hover:bg-purple-200 font-semibold px-8 py-8 w-65 rounded-xl capitalize text-sm tracking-wide">
            Partner With Digiline
            <ArrowRight className="w-6 h-6" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
