"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <footer ref={ref} className="py-20 bg-gradient-to-t from-black to-[#0A0A0A] relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            <span className="bg-gradient-to-r from-[#00F3FF] to-[#00FF87] text-transparent bg-clip-text">
              你的下一个CVE，从这里开始
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#00F3FF] to-[#00FF87] hover:opacity-90 text-black font-bold px-8 py-6 text-lg rounded-md">
              立即注册
            </Button>
            <Button
              variant="outline"
              className="border-[#00F3FF] text-[#00F3FF] hover:bg-[#00F3FF]/10 px-8 py-6 text-lg rounded-md"
            >
              企业解决方案
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-md flex items-center"
            >
              <Discord className="mr-2 h-5 w-5" />
              加入Discord社区
              <span className="ml-2 text-xs bg-[#00FF87] text-black px-2 py-0.5 rounded-full">2.4k+</span>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00F3FF]/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 animate-radar">
            <div
              className="h-full w-full bg-gradient-to-r from-transparent via-[#00F3FF]/10 to-transparent"
              style={{ width: "100%", transform: "translateX(-50%)" }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
