function Header() {
  return (
    <div className="flex items-center justify-between px-20 py-14">
      <h3 className="text-lg font-normal">Nombre del sitio</h3>

      <div className="flex items-center gap-12">
        <ul className="flex gap-12 list-none text-lg">
          <li>Página</li>
          <li>Página</li>
          <li>Página</li>
        </ul>

        <button className="bg-black text-white px-6 py-4 rounded-lg text-[15px] cursor-pointer">
          Botón
        </button>
      </div>
    </div>
  )
}

export default Header