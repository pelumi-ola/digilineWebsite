"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icon001, icon003, icon005, icon007, icon008, icon009 } from "@/assets";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function SolutionsCards() {
  const solutions = [
    {
      icon: icon003,
      title: "SMS & USSD Authentication Solutions (OTP & 2FA)",
      href: "/solutions/sms-ussd",
      bg: "bg-gradient-to-br from-purple-700 to-purple-500",
      description:
        "Secure logins, transactions, and sensitive data using OTP and Two Factor Authentication via SMS and USSD.",
    },
    {
      icon: icon001,
      title: "Content Subscription & Delivery Solutions",
      href: "/solutions/content-subscription",
      bg: "bg-gradient-to-br from-purple-600 to-pink-400",
      description:
        "Distribute news, music, videos, games, and educational content via SMS/USSD with airtime-based payments.",
    },
    {
      icon: icon005,
      title: "Micropayments Solutions",
      href: "/solutions/micro-payments",
      bg: "bg-gradient-to-br from-indigo-900 to-purple-600",
      description:
        "Enable small-value transactions using mobile airtime balance, especially in regions with limited banking access.",
    },
    {
      icon: icon007,
      title: "Product Authenticity & Verification",
      href: "/solutions/product-auth",
      bg: "bg-gradient-to-br from-purple-700 to-purple-500",
      description:
        "Combat counterfeit products with instant verification through SMS, USSD, or QR codes to build trust and transparency.",
    },
    {
      icon: icon008,
      title: "Voice-Based Solutions",
      href: "/solutions/voiced-based",
      bg: "bg-gradient-to-br from-purple-600 to-pink-400",
      description:
        "Interactive Voice Response (IVR), voice broadcasting for promotions, feedback collection, and emergency alerts.",
    },
    {
      icon: icon009,
      title: "Custom API Development",
      href: "/developer",
      bg: "bg-gradient-to-br from-indigo-900 to-purple-600",
      description:
        "Secure and scalable APIs tailored to your business needs, delivering seamless integrations, robust security, and flexible, innovative solutions designed to grow with your operations.",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="py-16 md:py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          variants={staggerContainer}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <div className="text-start mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-white/80 max-w-xl">
              Explore our premium solutions designed to secure, scale, and
              streamline your business operations across multiple channels.
            </p>
          </div>

          {/* Premium Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`flex flex-col items-center text-white py-8 px-6 rounded-3xl 
                  shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)] 
                  transition-all duration-500 transform ${item.bg}`}
              >
                <div className="mb-5 p-4 rounded-full bg-white/10">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </div>

                <h2 className="font-semibold text-lg text-center mb-2">
                  {item.title}
                </h2>
                <div className="w-14 h-px bg-yellow-400 my-2 rounded-full"></div>
                <p className="text-sm text-white/90 text-center flex-1">
                  {item.description}
                </p>

                <Link href={item.href} className="mt-6 w-full">
                  <Button className="w-full bg-white text-purple-700 hover:bg-purple-100 font-semibold p-3 rounded-xl capitalize text-sm tracking-wide">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
