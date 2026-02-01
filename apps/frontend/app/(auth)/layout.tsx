function Authlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 ">
        {children}
    </div>
  )
}
export default Authlayout