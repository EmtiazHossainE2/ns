import { useState, ReactNode } from 'react'
import Close from '../../svg/close'

interface TooltipProps {
  content: string
  children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShowTooltip(true)}>{children}</div>
      {showTooltip && (
        // The tooltip element that is conditionally rendered when showTooltip is true
        <div className="absolute -top-12 left-1/2 z-10 h-[64px] w-[299px] -translate-x-1/2 -translate-y-1/2 transform  md:h-[80px] md:w-[384px]">
          {/* Content and close button container */}
          <div className="shadow-[0px 6px 20px 0px rgba(60, 65, 115, 0.25)] flex items-start gap-[24px] rounded-md border border-gray-300 bg-white px-5 pb-5 pt-4 shadow-md">
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

export default Tooltip
