import { useState, ReactNode } from 'react'
import Close from '../../svg/close'

interface TooltipProps {
  content: string
  children: ReactNode
}

const RightTooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShowTooltip(true)}>{children}</div>
      {showTooltip && (
        // The tooltip element that is conditionally rendered when showTooltip is true
        <div className="tooltip_shadow absolute left-[84px] top-1/2 z-10 h-[64px] w-[299px] -translate-y-1/2 transform rounded-md bg-white md:h-[80px] md:w-[384px]">
          {/* Triangle arrow at the right of the tooltip */}
          <svg
            className="absolute bottom-0 left-0 top-0 -ml-[11px] h-full "
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="24"
            viewBox="0 0 11 24"
            fill="none"
          >
            <path
              d="M-5.24537e-07 12L11 24L11 4.80825e-07L-5.24537e-07 12Z"
              fill="white"
            />
          </svg>

          {/* Content and close button container */}
          <div className="flex items-start gap-[24px] rounded-md bg-white px-5  pb-5 pt-4 ">
            <p className="text-xs md:text-sm text-[#42484D]">{content}</p>
            <button className="" onClick={() => setShowTooltip(false)}>
              <Close />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RightTooltip
