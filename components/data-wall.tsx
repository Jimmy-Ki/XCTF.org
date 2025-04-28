"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function DataWall() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // ms
      const interval = 20 // ms

      const steps1 = Math.floor(duration / interval)
      const increment1 = Math.ceil(1203 / steps1)

      const steps2 = Math.floor(duration / interval)
      const increment2 = Math.ceil(892 / steps2)

      const steps3 = Math.floor(duration / interval)
      const increment3 = Math.ceil(57 / steps3)

      let current1 = 0
      let current2 = 0
      let current3 = 0

      const timer1 = setInterval(() => {
        current1 += increment1
        if (current1 >= 1203) {
          current1 = 1203
          clearInterval(timer1)
        }
        setCount1(current1)
      }, interval)

      const timer2 = setInterval(() => {
        current2 += increment2
        if (current2 >= 892) {
          current2 = 892
          clearInterval(timer2)
        }
        setCount2(current2)
      }, interval)

      const timer3 = setInterval(() => {
        current3 += increment3
        if (current3 >= 57) {
          current3 = 57
          clearInterval(timer3)
        }
        setCount3(current3)
      }, interval)

      return () => {
        clearInterval(timer1)
        clearInterval(timer2)
        clearInterval(timer3)
      }
    }
  }, [isInView])

  const partners = [
    { name: "安全厂商1", logo: "/modern-security-team.png" },
    { name: "安全厂商2", logo: "/digital-security-shield.png" },
    { name: "高校1", logo: "/campus-quad.png" },
    { name: "企业1", logo: "/modern-enterprise-skyline.png" },
    { name: "安全厂商3", logo: "/digital-fortress.png" },
    { name: "高校2", logo: "/campus-quad.png" },
  ]

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-[#0A0A0A] to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl md:text-4xl font-bold text-[#00F3FF] font-heading">{count1}</span>
            <span className="text-gray-400 text-sm">今日已部署靶场</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl md:text-4xl font-bold text-[#00FF87] font-heading">{count2}</span>
            <span className="text-gray-400 text-sm">当前在线攻防</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="text-3xl md:text-4xl font-bold text-[#FF4655] font-heading">{count3}</span>
            <span className="text-gray-400 text-sm">企业合作方</span>
          </motion.div>
        </div>

        <motion.h3
          className="text-2xl font-bold text-center mb-8 font-heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          合作伙伴
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
