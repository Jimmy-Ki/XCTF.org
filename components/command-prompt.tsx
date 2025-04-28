"use client"

import { useState, useEffect } from "react"

export default function CommandPrompt() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 font-mono text-sm text-[#00F3FF] z-50">
      /xctf&gt;{visible && <span className="inline-block w-2 h-4 bg-[#00F3FF] ml-0.5"></span>}
    </div>
  )
}
