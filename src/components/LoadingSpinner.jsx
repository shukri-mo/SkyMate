import React from 'react'

function LoadingSpinner() {
  return (
    <div className='flex items-center justify-center p-12'>
      <div className='relative'>
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin border-t-white/80 shadow-lg"></div>
       
        {/* Inner Ring */}
        <div className="absolute inset-2 w-12 h-12 border-4 border-blue-200/30 rounded-full animate-spin border-t-blue-200/80" style={{ animationDelay: "150ms" }}></div>
       
        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
