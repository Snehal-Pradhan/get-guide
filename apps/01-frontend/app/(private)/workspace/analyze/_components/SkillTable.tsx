import { memo } from 'react'
import { motion } from 'framer-motion'

export const SkillTable = memo(function SkillTable() {
  const jobs = [
    { rank: 1, role: "Senior Full Stack Dev", current: 9.2, future: 9.8, aiImpact: "Low (15%)", growing: true },
    { rank: 2, role: "Backend Systems Arch", current: 8.9, future: 9.4, aiImpact: "Low (10%)", growing: true },
    { rank: 3, role: "Frontend UI Specialist", current: 8.5, future: 8.9, aiImpact: "Medium (35%)", growing: true },
    { rank: 4, role: "Legacy Code Maintainer", current: 6.5, future: 4.2, aiImpact: "High (85%)", growing: false },
    { rank: 5, role: "Manual QA Tester", current: 5.8, future: 2.5, aiImpact: "Critical (95%)", growing: false },
  ]

  return (
    <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow-sm border border-zinc-200">
      <table className="w-full text-left border-collapse">
        <thead className="bg-zinc-50 border-b border-zinc-200">
          <tr>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">#</th>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">Job Profile</th>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">Current Popularity</th>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">Future Popularity</th>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">AI Automation</th>
            <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">Score</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {jobs.map((job, index) => {
             const getAiBadge = (impact: string) => {
               if (impact.includes("Low")) return "bg-emerald-100 text-emerald-700 border-emerald-200"
               if (impact.includes("Medium")) return "bg-amber-100 text-amber-700 border-amber-200"
               return "bg-rose-100 text-rose-700 border-rose-200"
             }
             const score = Number(((job.current + job.future) / 2).toFixed(1));
             
             return (
            <motion.tr 
              key={job.rank} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="hover:bg-zinc-50/80 transition-colors cursor-default"
            >
              <td className="py-4 px-6 text-zinc-400 font-medium italic">#{job.rank}</td>
              <td className="py-4 px-6 font-bold text-zinc-700">{job.role}</td>
              <td className="py-4 px-6 text-center">
                 <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700">
                    {job.current.toFixed(1)}
                 </span>
              </td>
              <td className="py-4 px-6 text-center">
                 <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 text-zinc-700">
                    {job.future.toFixed(1)}
                 </span>
              </td>
              <td className="py-4 px-6 text-center">
                 <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getAiBadge(job.aiImpact)}`}>
                    {job.aiImpact.split(' ')[0]}
                 </span>
              </td>
              <td className="py-4 px-6">
                 <div className="flex flex-col items-center gap-1">
                    <span className="font-bold text-zinc-700 text-sm">{score}</span>
                    <div className="w-20 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: `${Math.min(score * 10, 100)}%` }}
                         transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                         className={`h-full rounded-full ${score > 8 ? 'bg-emerald-500' : score > 6 ? 'bg-amber-500' : 'bg-rose-500'}`} 
                       />
                    </div>
                 </div>
              </td>
            </motion.tr>
          )})}
        </tbody>
      </table>
    </div>
  )
})
