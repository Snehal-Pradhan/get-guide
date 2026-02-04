"use client"
import { motion } from 'framer-motion'
import { SkillMap } from './_components/SkillMap'
import { SkillTable } from './_components/SkillTable'
import { JobSelector } from './_components/JobSelector'

function page() {
  return (
    <div className="bg-zinc-200 min-h-full w-full px-60 flex flex-col items-center pb-20 pt-20" >
       <div className="w-fit flex flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full"
        >
           <div className="bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-600 px-6 py-1.5 rounded-full shadow-sm text-sm font-medium flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             This Skill Map is derived from your resume analysis
           </div>
        </motion.div>
        
        <div className='flex gap-5'>
        <div className="w-full border-4 flex justify-start gap-5 items-stretch">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-zinc-800 h-110 aspect-square shadow-[0_1px_3px_hsla(0,0%,0%,0.2)] rounded-lg flex flex-col items-center justify-center gap-1"
            >
                 <SkillMap />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='w-80 flex flex-col justify-between py-2 min-w-[400px]'
          >
            <div>
              <h1 className='text-5xl font-black text-zinc-800 mb-6 '>
                Here is your <span className="text-zinc-500 block">Skill Map</span> derived from your resume
              </h1>
              <p className='text-xl text-zinc-500 font-medium  max-w-md'>
                Job profiles that match your skillmap are listed below.
              </p>
            </div>
          </motion.div>
          
        </div>
        </div>

        {/* Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-1"
        >
          <SkillTable />
        </motion.div>

        {/* JobSelector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <JobSelector />
        </motion.div>
       </div>
    </div>
  )
}
 
export default page