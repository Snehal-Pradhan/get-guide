import { FlickeringGrid } from "@/components/ui/flickering-grid"
import Image from "next/image"

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-[#f0f0f0] h-screen w-full relative flex justify-center items-center overflow-hidden">
      <div className="absolute top-6 left-6 z-20">
        <Image src="/getguide.svg" alt="logo" width={40} height={40} />
      </div>
      <FlickeringGrid
        className="absolute inset-0 z-0 h-full w-full"
        squareSize={4}
        gridGap={6}
        color="#7ed957"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
        <div className="flex justify-center relative z-10 h-full w-5/4  rounded-lg">
        <div className="w-5/6 h-full mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"> {children}</div>
        </div>
    </div>
  )
}
export default layout