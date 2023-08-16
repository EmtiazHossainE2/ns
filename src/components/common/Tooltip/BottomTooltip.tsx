import { useState, ReactNode } from 'react'
import Close from '../../svg/close'

interface TooltipProps {
  content: string
  children: ReactNode
}

const BottomTooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setShowTooltip(true)}>{children}</div>
      {showTooltip && (
        // The tooltip element that is conditionally rendered when showTooltip is true
        <div className="tooltip_shadow absolute left-1/2 top-[47px] z-10 h-[64px] w-[299px] -translate-x-1/2 transform rounded-md bg-white md:h-[80px] md:w-[384px]">
          {/* Triangle arrow at the bottom of the tooltip */}
          <svg
            className="absolute bottom-0 left-1/2 top-[-36.5px] -ml-[11px] h-full md:top-[-44.5px] "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="11"
            viewBox="0 0 24 11"
            fill="none"
          >
            <path d="M12 0L24 11L0 11L12 0Z" fill="#fff" />
          </svg>

          {/* Content and close button container */}
          <div className="flex items-start gap-[24px] rounded-md bg-white px-5  pb-5 pt-4 ">
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

export default BottomTooltip
