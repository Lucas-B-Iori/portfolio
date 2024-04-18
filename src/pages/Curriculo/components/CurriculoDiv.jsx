export default function CurriculoDiv({ titulo, children }) {
  return(
    <div className="mx-32 py-2 max-lg:mx-16 max-sm:mx-4">
      <h3 className="text-lg font-bold uppercase border-b-2 border-slate-800 mb-3 max-sm:text-base">{titulo}</h3>
      <div className="text-black text-lg max-sm:text-base">
        {children}
      </div>
    </div>
  )
}