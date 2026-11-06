import card1 from '../../assets/sekil1.png'
import card2 from '../../assets/sekil2.png'
import card3 from '../../assets/sekil3.png'


function Cards() {
  return (
    <div className="px-20 pt-10 pb-20">
      <h2 className="text-[44px] font-semibold mb-[60px]">
        Encabezado de sección
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <img className="w-full h-[405px] object-cover rounded-lg" src={card1} alt="card 1" />
          <h4 className="text-[22px] font-medium mt-6 mb-2">Subtítulo</h4>
          <p className="text-xl leading-relaxed text-[#888]">
            Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo.
          </p>
        </div>

        <div>
          <img className="w-full h-[405px] object-cover rounded-lg" src={card2} alt="card 2" />
          <h4 className="text-[22px] font-medium mt-6 mb-2">Subtítulo</h4>
          <p className="text-xl leading-relaxed text-[#888]">
            Cuerpo del texto para lo que desees ampliar sobre el tema principal.
          </p>
        </div>

        <div>
          <img className="w-full h-[405px] object-cover rounded-lg" src={card3} alt="card 3" />
          <h4 className="text-[22px] font-medium mt-6 mb-2">Subtítulo</h4>
          <p className="text-xl leading-relaxed text-[#888]">
            Cuerpo del texto para lo que desees compartir adicionalmente.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards