import React from "react"
import { CheckCircle } from "lucide-react"

const items = [
  "Built with modern cloud standards",
  "Security-first by design",
  "Focused on reliability, scalability, and real-world performance",
]

export default function PositioningStrip() {
  return (
    <div className="bg-[#0d0d0d] border-y border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-gray-400">{item}</span>
              </div>
              {i < items.length - 1 && (
                <span className="hidden sm:block w-px h-4 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
