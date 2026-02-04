"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Upload, FileText, X, Sparkles, Star, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useDropzone } from "react-dropzone"
import { SkillMap } from "../workspace/analyze/_components/SkillMap"
import { SkillTable } from "../workspace/analyze/_components/SkillTable"
import { JobSelector } from "../workspace/analyze/_components/JobSelector"

export default function CreateRoadmapPage() {
  const [step, setStep] = useState(1)
  const [hasResume, setHasResume] = useState<boolean | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const totalSteps = 7

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileError(null)
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size must be less than 5MB")
        return
      }
      
      setUploadedFiles([file])
      setIsUploading(true)
      setUploadProgress(0)
      
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 5
        })
      }, 50)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 5 * 1024 * 1024,
    multiple: false
  })

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    setUploadedFiles([])
  }

  return (
    <div className="flex justify-center items-center h-full w-full bg-white">
      <div className="bg-white border border-white/50 p-10 w-full min-h-[600px] max-h-[90vh] flex flex-col backdrop-blur-sm relative overflow-hidden">
        

        <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100">
           <motion.div 
             className="h-full bg-[#7ed957]" 
             initial={{ width: "0%" }}
             animate={{ width: `${(step / totalSteps) * 100}%` }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
           />
        </div>

        <div key={step} className="flex-1 flex flex-col justify-center items-center p-6 text-center animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-500 ease-out overflow-y-auto min-h-0">
          {step === 1 && (
            <div className="flex flex-col items-center gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-zinc-700">Do you have a resume?</h2>
                <p className="text-zinc-500 text-sm">Using a resume will speed up the process significantly.</p>
              </div>
              
              <div className="flex gap-6 w-full justify-center items-start pt-4">
                {/* Yes Button */}
                <div className="relative">
                  <Button 
                    variant="outline" 
                    onClick={() => setHasResume(true)}
                    className={cn(
                      "w-32 h-16 text-lg border-2 hover:border-[#241c15] hover:bg-zinc-50 transition-all relative overflow-hidden",
                      hasResume === true ? "border-[#241c15] bg-[#241c15]/5 ring-1 ring-[#241c15]" : "border-zinc-200"
                    )}
                  >
                    Yes
                  </Button>
                </div>

                {/* No Button */}
                <div className="flex flex-col items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setHasResume(false)}
                    className={cn(
                      "w-32 h-16 text-lg border-2 hover:border-zinc-300 hover:bg-zinc-50 transition-all",
                      hasResume === false && "border-zinc-300 bg-zinc-100 text-zinc-500 ring-1 ring-zinc-300"
                    )}
                  >
                    No
                  </Button>
                  
                </div>
              </div>
              

            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center gap-8 w-full max-w-xl">
              <div className="space-y-2">
                 <h2 className="text-3xl font-bold text-zinc-700">Upload your resume</h2>
                 <p className="text-zinc-500 text-sm">Please upload a PDF file under 5MB</p>
              </div>
              
              <div className="w-full">
                <div 
                  {...getRootProps()} 
                  className={cn(
                    "relative group cursor-pointer w-full h-64 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-300 gap-4",
                    isDragActive 
                      ? "border-zinc-400 bg-zinc-50 shadow-inner" 
                      : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50"
                  )}
                >
                  <input {...getInputProps()} />
                  
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-4 w-full px-8 animate-in fade-in zoom-in-95">
                      <div className="w-full flex items-center justify-between text-xs text-zinc-500 mb-1">
                        <span>Uploading {uploadedFiles[0]?.name}...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-zinc-800 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      </div>
                    </div>
                  ) : uploadedFiles.length > 0 ? (
                    <div className="relative z-10 flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-200 max-w-sm w-full animate-in fade-in zoom-in-95">
                      <div className="h-12 w-12 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6 text-zinc-500" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-medium text-zinc-700 truncate">{uploadedFiles[0].name}</p>
                        <p className="text-xs text-zinc-500">{(uploadedFiles[0].size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                      <button 
                        onClick={removeFile}
                        className="p-1 hover:bg-red-50 rounded-full text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="h-16 w-16 rounded-full bg-zinc-50 flex items-center justify-center shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform duration-300">
                        <Upload className="h-8 w-8 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                      </div>
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium text-zinc-700">Click or drag PDF here</p>
                        <p className="text-xs text-zinc-400">Max 5MB</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {fileError && (
                <p className="text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">{fileError}</p>
              )}
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />
                <Star className="relative h-24 w-24 text-yellow-400 fill-yellow-400" strokeWidth={0} />
              </div>
              <div className="space-y-2 text-center max-w-md">
                <h2 className="text-3xl font-bold text-zinc-700">Ready to create your roadmap?</h2>
                <p className="text-zinc-500">We will analyze your resume to build a personalized skill map tailored to your experience.</p>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col items-center gap-4 w-full animate-in fade-in zoom-in-95 h-full">
              <div className="flex items-center justify-between w-full max-w-2xl px-4 shrink-0">
                 <h2 className="text-xl font-bold text-zinc-700">Your Personal Skill Map</h2>
                 <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
                   <Download className="size-3" />
                   Download Report
                 </Button>
              </div>
              <div className="w-full flex-1 min-h-0 overflow-y-auto">
                <SkillMap />
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col items-center gap-4 w-full animate-in fade-in zoom-in-95 h-full">
              <div className="flex items-center justify-between w-full max-w-4xl px-4 shrink-0">
                 <h2 className="text-xl font-bold text-zinc-700">Recommended Career Paths</h2>
                 <p className="text-xs text-zinc-500">Based on your skill analysis</p>
              </div>
              <div className="w-full max-w-4xl flex-1 min-h-0 overflow-y-auto px-4">
                <SkillTable />
              </div>
            </div>
          )}
          {step === 6 && (
            <div className="flex flex-col items-center gap-4 w-full animate-in fade-in zoom-in-95 h-full">
              <div className="flex items-center justify-between w-full max-w-4xl px-4 shrink-0">
                 <h2 className="text-xl font-bold text-zinc-700">Choose Your Path</h2>
                 <p className="text-xs text-zinc-500">Select the role that interests you most</p>
              </div>
              <div className="w-full max-w-4xl flex-1 min-h-0 overflow-y-auto px-4">
                <JobSelector />
              </div>
            </div>
          )}
          {step === 7 && (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-xl text-zinc-800 font-medium">congratulations: we will be helping you to be a good (job option)</h2>
            </div>
          )}
        </div>

        <div className="shrink-0 flex flex-col justify-center items-end mt-8 pt-6 border-t border-zinc-50 gap-2">
          {step === 1 && hasResume === false && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[12px] text-zinc-400 font-medium"
            >
              * This feature will be available in future updates
            </motion.span>
          )}
          {step < 7 && (
             <Button 
                onClick={handleNext}
                disabled={
                  (step === 1 && hasResume !== true) ||
                  (step === 2 && (uploadedFiles.length === 0 || isUploading))
                }
                className="bg-[#241c15] hover:bg-[#241c15]/90 text-white rounded-full px-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 3 ? (
                  <>
                    Generate
                    <Star className="ml-2 size-4 fill-white text-white" />
                  </>
                ) : step === 6 ? (
                  "Finish"
                ) : (
                  <>
                    Next
                    <ChevronRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
          )}
        </div>

      </div>
    </div>
  )
}