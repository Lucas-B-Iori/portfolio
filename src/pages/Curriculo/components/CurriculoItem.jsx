export default function CurriculoItem({ component: Component, children }) {
  return (
    <li className="flex gap-8 justify-start items-center pb-4">
      <Component className='bg-slate-700 text-white p-2 h-10 w-10 rounded-3xl'/>
      <p className="">{children}</p>
    </li>
  )
}
