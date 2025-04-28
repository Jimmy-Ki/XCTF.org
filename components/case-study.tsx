"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Code2 } from "lucide-react"

export default function CaseStudy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-[#0A0A0A]">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          解剖一个CVE：从理论到实战
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-black p-6 rounded-xl border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <Code2 className="h-6 w-6 text-[#00F3FF] mr-2" />
              <h3 className="text-xl font-bold font-heading">CVE-2023-1234 漏洞分析</h3>
            </div>

            <div className="mb-6 bg-gray-900 p-4 rounded-md font-mono text-sm text-gray-300 overflow-x-auto">
              <pre>{`
def vulnerable_function(user_input):
    # Insecure deserialization
    import pickle
    return pickle.loads(user_input)  # Vulnerability!

# Exploitation
malicious_payload = pickle.dumps(
    eval('__import__("os").system("id")')
)
              `}</pre>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF4655] mr-2"></div>
                <p className="text-gray-400">影响范围：Python 应用，所有版本</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#00FF87] mr-2"></div>
                <p className="text-gray-400">CVSS 评分：9.8（严重）</p>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#00F3FF] mr-2"></div>
                <p className="text-gray-400">修复方案：使用 HMAC 验证或替代序列化方法</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-xl overflow-hidden border border-gray-800"
          >
            <Image src="/digital-security-lesson.png" alt="CVE 实战演示" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#00F3FF]/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-[#00F3FF]/30 transition-all duration-300">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="w-full bg-gray-800/50 h-1 rounded-full overflow-hidden">
                <div className="bg-[#00F3FF] w-1/3 h-full"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>00:42</span>
                <span>02:18</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
