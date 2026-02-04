"use client"
import { useState, useRef, useCallback, memo } from 'react'
import { Upload, FileText, X, Check, ArrowRight, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import axios from 'axios'

const UploadPage = memo(function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(async (selectedFile: File) => {
    setError(null)
    // Validate PDF
    if (selectedFile.type !== 'application/pdf') {
      setError('Only PDF files are allowed')
      return
    }
    // Validate Size (5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }

    setFile(selectedFile)
    setProgress(0)

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
           if (progressEvent.total) {
             const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
             setProgress(percent)
           }
        },
      })
      setProgress(100)
    } catch (err) {
      console.error(err)
      setFile(null)
      setProgress(0)
    }
  }, [])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [handleFile])

  const removeFile = useCallback(() => {
    setFile(null)
    setProgress(0)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [])

  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center bg-zinc-50/50 p-4">
      <motion.div 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="mb-8"
      >
          <div className="bg-white px-5 py-2 rounded-full border border-zinc-200 shadow-sm text-sm font-medium text-zinc-600 flex items-center gap-2">
             Add resume to continue
          </div>
      </motion.div>

      <motion.div 
         layout
         className="w-full max-w-lg bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-100/50 overflow-hidden relative"
      >
          <div className="p-10">
                {/* Dropzone */}
                {!file && (
                    <div 
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                            group h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 gap-4
                            ${isDragging ? 'border-emerald-500 bg-emerald-50/50 scale-[0.98]' : 'border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50'}
                            ${error ? 'border-rose-200 bg-rose-50/30' : ''}
                        `}
                    >
                        <div className={`p-5 rounded-xl transition-colors duration-300 ${isDragging ? 'bg-emerald-100 text-emerald-600' : 'bg-zinc-50 text-zinc-400 group-hover:bg-white group-hover:shadow-sm'}`}>
                            <Upload className="w-8 h-8" />
                        </div>
                        <div className="text-center space-y-1">
                           <p className="text-zinc-700 font-bold text-lg group-hover:text-zinc-900 transition-colors">Upload Resume</p>
                           <p className="text-zinc-400 text-sm">PDF (max. 5MB)</p>
                        </div>
                    </div>
                )}

                {/* File Item */}
                <AnimatePresence>
                    {file && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -10 }}
                           className="bg-zinc-50 border border-zinc-100 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="text-zinc-400">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-zinc-700 truncate">{file.name}</p>
                                    <p className="text-xs text-zinc-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                {progress === 100 ? (
                                    <button onClick={removeFile} className="p-2 hover:bg-zinc-200 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <span className="text-xs font-bold text-zinc-400">{progress}%</span>
                                )}
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                                <motion.div 
                                   className="h-full bg-emerald-500"
                                   initial={{ width: 0 }}
                                   animate={{ width: `${progress}%` }}
                                   transition={{ ease: "linear" }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           exit={{ opacity: 0, height: 0 }}
                           className="mt-4 flex items-center gap-2 text-rose-500 text-sm font-medium bg-rose-50 p-3 rounded-lg"
                        >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {error}
                        </motion.div>
                    )}
                </AnimatePresence>

                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={(e) => e.target.files && e.target.files.length > 0 && handleFile(e.target.files[0])}
                    accept=".pdf" 
                    className="hidden" 
                />
            </div>
            
            {/* Next Button Footer */}
            <AnimatePresence>
                {progress === 100 && (
                    <motion.div 
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       className="border-t border-zinc-100 bg-zinc-50/50 p-4 flex justify-end"
                    >
                        <Link href="/workspace/analyze">
                            <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95">
                                Next Step <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>

    </div>
  )
})

export default UploadPage