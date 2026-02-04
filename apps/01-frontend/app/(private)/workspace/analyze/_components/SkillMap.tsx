"use client"
import { memo } from 'react'
import { motion } from 'framer-motion'

export const SkillMap = memo(function SkillMap() {
  const data = [
    { topic: "React", score: 9.8 },
    { topic: "Next.js", score: 9.2 },
    { topic: "TypeScript", score: 8.9 },
    { topic: "JavaScript", score: 8.6 },
    { topic: "CSS", score: 7.5 },
    { topic: "Tailwind", score: 7.2 },
    { topic: "HTML", score: 6.8 },
    { topic: "Node.js", score: 6.2 },
    { topic: "Express", score: 5.5 },
    { topic: "NestJS", score: 5.1 },
    { topic: "GraphQL", score: 4.8 },
    { topic: "PostgreSQL", score: 4.2 },
    { topic: "MongoDB", score: 3.5 },
    { topic: "Redis", score: 9.9 },
    { topic: "Docker", score: 8.0 },
    { topic: "Git", score: 7.8 },
    { topic: "AWS", score: 6.5 },
    { topic: "Azure", score: 5.8 },
    { topic: "CI/CD", score: 4.5 },
    { topic: "Testing", score: 2.0 },
    { topic: "Python", score: 3.2 },
    { topic: "Go", score: 8.8 },
    { topic: "Rust", score: 9.1 },
    { topic: "Java", score: 7.3 },
    { topic: "C++", score: 5.4 },
  ]
  
  const rows = []
  for (let i = 0; i < data.length; i += 5) {
    rows.push(data.slice(i, i + 5))
  }

  const getColor = (s: number) => {
    if (s >= 9.5) return 'bg-emerald-500 hover:bg-emerald-600'
    if (s >= 8.5) return 'bg-green-400 hover:bg-green-500'
    if (s >= 7.0) return 'bg-green-300 hover:bg-green-400'
    if (s >= 6.0) return 'bg-yellow-300 hover:bg-yellow-400'
    if (s >= 5.0) return 'bg-orange-300 hover:bg-orange-400'
    return 'bg-red-400 hover:bg-red-500'
  }

  return (
    <div className="flex flex-col items-center justify-center gap-1">
             {rows.map((row, rIndex) => (
               <div className="flex gap-1" key={rIndex}>
                 {row.map((item, cIndex) => {
                   const bg = getColor(item.score)
                   return (
                     <motion.div 
                       key={cIndex}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.4, delay: 0.5 + (rIndex * 5 + cIndex) * 0.05 }}
                       className={`${bg} w-20 h-20 rounded p-2 flex flex-col gap-1 transition-colors duration-200 cursor-pointer select-none shadow-[0_1px_3px_hsla(0,0%,0%,0.2)]`}
                     >
                       <div className="flex-1 flex items-start justify-start">
                          <span className="text-2xl font-bold">{item.score.toFixed(1)}</span>
                       </div>
                       <div className="text-[10px] font-bold text-right leading-none truncate opacity-90">
                          {item.topic}
                       </div>
                     </motion.div>
                   )
                 })}
               </div>
             ))}
    </div>
  )
})
