"use client";

import Link from "next/link";
import Image from "next/image";
import { digilogoFooter } from "@/assets";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-[#9D66F1] text-white pt-24 pb-12 rounded-tl-[10rem]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src={digilogoFooter}
                alt="Digiline Logo"
                width={150}
                height={150}
                className="mb-2"
              />
            </Link>
            <p className="text-purple-200 text-sm max-w-xs">
              Digiline Solution Limited – Ideas to value-added Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <Link href="/career" className="hover:text-white transition">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/developer" className="hover:text-white transition">
                  Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 text-white">Contact</h3>
            <div className="space-y-3 text-sm text-purple-200">
              <div>
                <span className="font-medium text-white">Address: </span>
                9th Floor, Ibukun House, Ademola Adetokunbo Victoria Island
              </div>
              <div>
                <span className="font-medium text-white">Email: </span>
                business@digilinest.com
              </div>
              <div>
                <span className="font-medium text-white">Phone: </span>
                +234 (0) 9012345678
              </div>
              <div>
                <span className="font-medium text-white">Opening Hours: </span>
                9:00 AM - 5:00 PM (WAT)
              </div>
              <div>
                <span className="font-medium text-white">Support Hours: </span>
                24hrs Support
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="font-semibold mb-5 text-white">Newsletter</h3>
            <p className="text-sm text-purple-200 mb-4">
              Stay updated with our latest news, products, and insights.
            </p>

            <form onSubmit={handleSubmit} className="relative w-full">
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none"
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-800 placeholder:text-gray-500 border-none rounded-full pl-10 pr-28 py-3 text-sm focus:ring-2 focus:ring-purple-300 w-full transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-0 top-0 bg-primary hover:bg-purple-950 text-white font-semibold px-4 py-2 rounded-full text-sm capitalize tracking-wide"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-3 text-sm text-white flex items-center gap-2"
              >
                <Mail size={16} />
                <span>
                  Thank you! Check your email to confirm subscription.
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-300/40 my-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-purple-200">
          Copyright © {currentYear} Digiline Solution Limited. All Rights
          Reserved.
        </div>
      </motion.div>
    </footer>
  );
}
