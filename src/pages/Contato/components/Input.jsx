export default function Input({ label, type, value, atualizaDados, name }) {
  let elemento = 
    <input 
      className="text-start bg-transparent border-slate-50 border-2 p-2 rounded-md w-full h-12" type={type} placeholder={label} 
      value={value}
      onChange={(e) => atualizaDados(name, e.target.value)}
    />
  if (type === 'textarea') {
    elemento = 
      <textarea 
        className="text-start bg-transparent border-slate-50 border-2 p-2 rounded-md w-full h-40" placeholder={label}
        value={value}
        onChange={(e) => atualizaDados(name, e.target.value)}
      />
  }
  return (
    <div className={`mx-8 ${type === 'textarea' && 'row-start-2 row-end-4 col-start-1 col-end-3 '} max-sm:mx-0`} >
      {elemento}
    </div>
  )
}
