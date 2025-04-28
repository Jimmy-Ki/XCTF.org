"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Server, Shield } from "lucide-react"

export default function FeatureCards() {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    {
      title: "CVE智库",
      icon: <Database className="h-12 w-12 text-[#00F3FF]" />,
      description: "深度解析10,000+漏洞\n复现环境 | PoC代码 | 影响图谱",
    },
    {
      title: "智能靶场",
      icon: <Server className="h-12 w-12 text-[#00FF87]" />,
      description: "AI生成漏洞场景\n从永恒之蓝到零日漏洞",
    },
    {
      title: "认证体系",
      icon: <Shield className="h-12 w-12 text-[#FF4655]" />,
      description: "企业认可的实战证书\n一键同步至LinkedIn",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-[#0A0A0A]/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          核心功能展示
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 243, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 135, 0.04)",
              }}
              className={`relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-[#00F3FF]/50 transition-all duration-300 cursor-pointer h-[300px] flex flex-col`}
              onClick={() => setActiveCard(index)}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white font-heading">{card.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{card.description}</p>

              {activeCard === index && (
                <motion.div
                  className="absolute bottom-4 right-4 text-xs text-[#00FF87]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  点击解锁更多
                </motion.div>
              )}

              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#00F3FF]/20 to-[#00FF87]/20 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
