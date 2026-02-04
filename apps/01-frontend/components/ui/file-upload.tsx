import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { IconUpload, IconFileFilled, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

export const FileUpload = ({
  onChange,
}: {
  onChange?: (files: File[]) => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    // Replace existing files with new ones (single file mostly for resume)
    setFiles(newFiles);
    onChange && onChange(newFiles);
  };

  const handleRemoveFile = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange && onChange(updatedFiles);
  }

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    onDrop: handleFileChange,
    onDropRejected: (fileRejections) => {
      // Create a warning or handle rejection visually if needed
      // For now, we rely on the visual cue that file wasn't accepted
      console.log("Rejected:", fileRejections);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <div
        onClick={handleClick}
        className={cn(
          "group/file relative w-full cursor-pointer rounded-xl h-[300px] flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300",
          isDragActive 
            ? "border-zinc-400 bg-zinc-100 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" 
            : "border-zinc-200 bg-zinc-50/50 shadow-[inset_0_0_80px_-20px_rgba(0,0,0,0.05)] hover:bg-zinc-100 hover:border-zinc-300"
        )}
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept=".pdf"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        
        {files.length > 0 ? (
           <div className="flex flex-col items-center gap-4 w-full px-4 animate-in fade-in zoom-in-95 duration-300">
             {files.map((file, idx) => (
                <div key={idx} className="relative z-20 flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 max-w-sm w-full">
                  <div className="h-10 w-10 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0">
                    <IconFileFilled className="h-5 w-5 text-zinc-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">{file.name}</p>
                    <p className="text-xs text-zinc-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                  <button 
                    onClick={(e) => handleRemoveFile(e, idx)} 
                    className="p-1 hover:bg-zinc-100 rounded-full text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <IconX className="h-4 w-4" />
                  </button>
                </div>
             ))}
             <p className="text-xs text-zinc-400 font-medium">Click or drop to replace</p>
           </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <div className="h-16 w-16 rounded-full bg-zinc-100 flex items-center justify-center shadow-inner group-hover/file:scale-110 transition-transform duration-300">
               <IconUpload className="h-8 w-8 text-zinc-400" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-zinc-700">Drop your resume here</p>
              <p className="text-sm text-zinc-400">PDF, Max 5MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
