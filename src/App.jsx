import React from 'react'
import SearchBar from './Components/SearchBar'
import TempretureToggle from './Components/TempretureToggle'

export default function App() {
  return (
    <div className='relative  min-h-screen overflow-hidden'>

{/* Background Image with overlay */}

<div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{backgroundImage:"url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div>
<div className="absolute inset-0 bg-black-20"></div>

</div>
<div className='relative z-10 container mx-auto px-4 py-8 min-h-screen'>

<div className="max-w-7xl mx-auto">
</div>
  // Header
  <div className="text-center mb-12">
  <div className="mb-8">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
  weatherApp <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Pro</span></h1>
<p className='text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed'>
Experience weather like never before with real-time data, beatiful visuals, and precise forecasts for any location worldwide - your ultimate weather companion!

</p>
  </div>
  <div className="flex flex-col lg:flex-row items-center 
  justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12 ">
    <SearchBar/>
    <TempretureToggle/>
  </div>
</div>
    </div>
    </div>
  )
}
