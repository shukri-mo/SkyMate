import React from 'react'

function TempretureToggle({unit,ontoggle}) {
  return (
    <div className='bg-white/10 backdrop-blur-xl
     border-white/20 rounded-2xl p-1 shadow-lg '>
 <div className="flex items-center">
    <button className={`px-4 py-2 rounded-xl text-sm
     font-semibold transition-all duration-300
     ${unit==='C'?"bg-white text-blue-600 shadow-lg transform scale-105":"text-white/70 hover:text-white hover:bg-white/10"}`} onClick={ontoggle}>°C</button>
    <button className={`px-4 py-2 rounded-xl text-sm
     font-semibold transition-all duration-300
      ${unit==='F'?"bg-white text-blue-600 shadow-lg transform scale-105":"text-white/70 hover:text-white hover:bg-white/10"}
     
     `} onClick={ontoggle}>°F</button>
 </div>
    </div>
  )
}

export default TempretureToggle
