import { MapPin, Sunrise, Sunset } from 'lucide-react'
import React from 'react'

function WeatherCard() {
  return (
    <div className='bg-white/10 backdrop-blur-xl
     border border-white/20 rounde-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500'>
      {/* Header */}
      <div className="flex items-center justify-between mb-8" >
        <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-full">
                <MapPin className='w-5 h-5 text-white/80'/>
            </div>
            <div>
                <h2 className='text-white font-semibold text-lg'>Weather Name</h2>
                <p className='text-white/60 text-sm'>Weather Country</p>
            </div>
        </div>

        <div className="text-right">
            <div className="text-white/70 text-sm">
                {/*Display Dynamic data */}
                
            </div>
            <div className="text-white/50 text-xs">
                {/*Display Dynamic data */}

            </div>
        </div>
      </div>
        {/*Main weather Display  */}
    <div className="flex items-center justify-between mb-10"></div>
    <div className='flex-1'>
    <div className="text-7xl font-bold text-white mb-3 tracking-tight">
Main Temp

    </div>
    <div className="text-white/90 text-xl capitalize mb-2 font-medium ">
        Weather Description
    </div>
    <div className="flex items-center space-x-4 text-white/60 text-sm">
        <span>Max Temp</span>
        <span>Min Temp</span>
    </div>
<div className="text-white/90 transform hover:scale:110 transition-transform duration-300">
{/* display dynamic Icon */}

</div>
    </div>
{/* Weather stats Grid */}
<div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
    {/* map method logic */}
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group">
    <div className='flex items-center space-x-3 mb-2'>
        <div className={`p-2 rounded-full bg-white/10 group-hover:bg-white/20
       transition-all `}>

        {/* dynamic Icon */}

       </div>
       <span className='text-white/70 text-sm font-medium'>Stats Labels</span>
    </div>
    <div className='text-white font-semibold text-lg pl-11'>
Sttas Value
    </div>
</div>
</div>

{/*Sum Time*/}
<div className='grid grid-cols-2 gap-4'>
    <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20
    
    backdrop-blur-sm rounded-2xl border border-orange-400/20">
        <div className='flex items-center space-x-3 mb-2'>
            <div className='p-2 bg-orange-400/20 rounded-full'>
                <Sunrise className='w-4 h-4 text-orange-300'/>
            </div>
            <span className="text-white/80 text-sm font-medium">Sunrise</span>
        </div>
        <div className="text-white font-smibold text-lg pl-11">
            {/* Dynamic Data */}
        </div>
    </div>

    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded 2xl p-4 border border-purple-400/20">
        <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-400/20 rounded-full">
                <Sunset className='w-4 h-4 text-purple-300'/>
            </div>
            <span className="text-white/80 text-sm font-medium">Sunset</span>
        </div>
        <div className="text-white font-semibold text-lg pl-11">
            {/* Dynamic Data */}
        </div>
    </div>
</div>

    </div>
  )
}

export default WeatherCard
