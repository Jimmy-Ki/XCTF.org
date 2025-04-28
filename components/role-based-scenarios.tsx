"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldAlert, Target, BarChart3, UserCheck } from "lucide-react"

export default function RoleBasedScenarios() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const scenarios = [
    {
      title: "安全新手",
      icon: <ShieldAlert className="h-10 w-10 text-[#00F3FF]" />,
      description: "从零复现第一个CVE漏洞",
      color: "from-[#00F3FF]/20 to-[#00F3FF]/5",
    },
    {
      title: "红队专家",
      icon: <Target className="h-10 w-10 text-[#FF4655]" />,
      description: "定制APT级靶场，挑战0day利用",
      color: "from-[#FF4655]/20 to-[#FF4655]/5",
    },
    {
      title: "企业团队",
      icon: <BarChart3 className="h-10 w-10 text-[#00FF87]" />,
      description: "降低90%内训成本，实时追踪员工能力",
      color: "from-[#00FF87]/20 to-[#00FF87]/5",
    },
    {
      title: "招聘方",
      icon: <UserCheck className="h-10 w-10 text-white" />,
      description: "告别简历造假，验证真实渗透能力",
      color: "from-gray-500/20 to-gray-500/5",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          用户分层引导
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${scenario.color} p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-black/50 rounded-lg p-4 mb-4 inline-block">{scenario.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white font-heading">{scenario.title}</h3>
              <p className="text-gray-400">{scenario.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
