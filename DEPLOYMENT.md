# XCTF Landing Page - Cloudflare Pages Deployment Guide

This document provides step-by-step instructions for deploying the XCTF landing page to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Git installed on your local machine (optional)

## Deployment Steps

### Option 1: Direct Upload (Recommended for Quick Deployment)

1. **Prepare the project**
   - Download and extract the project files
   - Run the following commands locally to build the project:
   \`\`\`bash
   npm install
   npm run build
   \`\`\`

2. **Deploy to Cloudflare Pages**
   - Log in to your Cloudflare dashboard
   - Navigate to "Pages"
   - Click "Create a project" > "Direct Upload"
   - Give your project a name (e.g., "xctf-landing")
   - Drag and drop the `out` folder (created after running `npm run build`) into the upload area
   - Click "Deploy site"

### Option 2: Connect to Git Repository

1. **Push the code to a Git repository** (GitHub, GitLab, etc.)

2. **Connect to Cloudflare Pages**
   - Log in to your Cloudflare dashboard
   - Navigate to "Pages"
   - Click "Create a project" > "Connect to Git"
   - Select your repository
   - Configure your build settings:
     - Framework preset: Next.js
     - Build command: `npm run build`
     - Build output directory: `out`
     - Root directory: `/` (or your project subdirectory if in a monorepo)
   - Click "Save and Deploy"

## Environment Variables

No environment variables are required for this static landing page.

## Custom Domain (Optional)

To use a custom domain:
1. Navigate to your Pages project in the Cloudflare dashboard
2. Go to "Custom domains"
3. Click "Set up a custom domain"
4. Follow the instructions to add your domain

## Troubleshooting

- **Issue**: Images not loading
  - **Solution**: Ensure that the `next.config.mjs` file has `images: { unoptimized: true }` set

- **Issue**: Routing problems
  - **Solution**: Check that `trailingSlash: true` is set in `next.config.mjs`

## Updates and Maintenance

To update the site:
- If using Direct Upload: Rebuild locally and upload the new `out` folder
- If using Git integration: Push changes to your repository, and Cloudflare will automatically rebuild and deploy

## Support

If you encounter any issues, please refer to the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
\`\`\`

Now, let's make sure our Image components are compatible with static export:

```typescriptreact file="components/data-wall.tsx"
[v0-no-op-code-block-prefix]"use client"

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
