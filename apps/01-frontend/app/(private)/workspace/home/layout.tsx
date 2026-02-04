export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-14 min-h-14 border-b border-zinc-200 bg-white flex items-center px-4">
        <h1 className="text-xl font-semibold text-[#241c15]"><span className="text-zinc-300 mr-1">#</span>Home</h1>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
