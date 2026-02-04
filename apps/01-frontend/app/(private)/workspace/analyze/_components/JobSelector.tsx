import { useState, memo } from 'react'
import { ArrowRight } from 'lucide-react'

export const JobSelector = memo(function JobSelector() {
  const [selected, setSelected] = useState<string | null>(null)


  const jobs = [
    "Senior Full Stack Dev",
    "Backend Systems Arch",
    "Frontend UI Specialist", 
    "Legacy Code Maintainer",
    "Manual QA Tester"
  ]

  return (
    <div className="w-full h-full bg-white p-8 rounded-xl shadow-sm border border-zinc-200 overflow-y-auto">
      <h3 className="text-xl font-bold text-zinc-800 mb-4 text-center">Select Job Profile</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {jobs.map((job) => (
           <div 
             key={job} 
             onClick={() => setSelected(job)}
             className={`
               relative group cursor-pointer rounded-lg px-4 py-3 flex items-center justify-between text-left border transition-all duration-200 ease-in-out
               ${selected === job 
                 ? 'border-zinc-400 bg-zinc-100 text-zinc-900 shadow-sm transform scale-[1.02] z-10' 
                 : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300'
               }
             `}
           >
              <span className="font-semibold text-sm">
                {job}
              </span>
           </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-center">
        <button 
           disabled={!selected}
           className="disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
        >
           Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
})
