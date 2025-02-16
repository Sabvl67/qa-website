import React from 'react'

export const MagicButton = ({
    title, position, handleClick, otherClasses}: 
    {
        title: string;
        position: string;
        handleClick?: () => void;
        otherClasses?: string;
    }
) => {

  return (
        // Button code
        <button className="w-full rounded-lg inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {position === 'left'}
          {title}
          {position === 'right'}

        </button>
      
  )
}
