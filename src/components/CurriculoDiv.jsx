export default function CurriculoDiv({ titulo, children }) {
  return(
    <div className="mx-32 py-2">
      <h3 className="text-lg font-bold uppercase border-b-2 border-slate-800 mb-3">{titulo}</h3>
      <div className="text-black text-lg">
        {children}
      </div>
    </div>
  )
}