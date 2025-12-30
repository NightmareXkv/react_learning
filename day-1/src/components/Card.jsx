function Card(props) {
    return (
        <div className='max-w-sm bg-white border border-gray-200 rounded-2xl mt-8 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group'>
  {/* Image Container */}
  <div className="overflow-hidden">
    <img 
      className='w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500' 
      src={props.imageurl}
      alt="Lewis Hamilton"
    />
  </div>

  {/* Content Container */}
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">
      {props.title}
    </h2>
    <p className="text-gray-600 text-sm leading-relaxed mb-6">
      A middle class boy who defied the odds to become a 7-time World Champion.
    </p>
    
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-md active:scale-95">
      Idolise him
    </button>
  </div>
        </div>

    )
}

export default Card;