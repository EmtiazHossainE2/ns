import { useState, ReactNode } from 'react'
import Close from '../../svg/close'

interface TooltipProps {
  content: string 
  children: ReactNode 
}


const LeftTooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShowTooltip(true)}>{children}</div>
      {showTooltip && (
        // The tooltip element that is conditionally rendered when showTooltip is true
        <div className="tooltip_shadow absolute left-[-315px] md:left-[-400px] top-1/2 z-10 h-[64px] w-[299px] -translate-y-1/2 transform rounded-md border bg-white md:h-[80px] md:w-[384px]">
          {/* Triangle arrow at the left of the tooltip */}
          <svg
            className="absolute bottom-0 right-0 top-0 -mr-3 h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="24"
            viewBox="0 0 11 24"
            fill="none"
          >
            <path d="M11 12L1.04907e-06 24L0 4.80825e-07L11 12Z" fill="white" />
          </svg>

          {/* Content and close button container */}
          <div className="flex items-start gap-[24px] rounded-md bg-white px-5 pb-5 pt-4">
            <p className="text-xs text-[#42484D] md:text-sm">{content}</p>
            <button className="" onClick={() => setShowTooltip(false)}>
              <Close />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeftTooltip
