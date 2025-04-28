"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import CveBackground from "./cve-background"

export default function Hero() {
  const [tagline, setTagline] = useState("From CVE to Exploit")

  useEffect(() => {
    const timer = setTimeout(() => {
      setTagline("Learn. Attack. Defend.")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <CveBackground />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#00F3FF] to-[#00FF87] text-transparent bg-clip-text">
              {tagline}
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            全球首个CVE靶场实战认证平台
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-[#00F3FF] to-[#00FF87] hover:opacity-90 text-black font-bold px-8 py-6 text-lg rounded-md">
              免费体验靶场
            </Button>
            <Button
              variant="outline"
              className="border-[#00F3FF] text-[#00F3FF] hover:bg-[#00F3FF]/10 px-8 py-6 text-lg rounded-md"
            >
              <Play className="mr-2 h-5 w-5" />
              观看演示视频
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
