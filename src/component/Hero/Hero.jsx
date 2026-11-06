import heroImg from '../../assets/sekil1.png'

function Hero() {
  return (
    <div className="px-20 pt-[60px]">
      <h1 className="text-[64px] font-extrabold mb-6">
        Título de la página de inicio
      </h1>

      <p className="text-[22px] leading-relaxed text-[#444] max-w-[820px] mb-10">
        Subtítulo que establece el contexto, comparte más información sobre el
        sitio web o, en general, motiva a la gente a seguir navegando.
      </p>

      <button className="bg-black text-white px-8 py-6 rounded-lg text-xl cursor-pointer">
        Botón
      </button>

      <img
        className="w-full h-[650px] object-cover rounded-lg mt-10"
        src={heroImg}
        alt="hero"
      />
    </div>
  )
}

export default Hero