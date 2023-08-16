import BottomTooltip from '../common/Tooltip/BottomTooltip'
import LeftTooltip from '../common/Tooltip/LeftTooltip'
import RightTooltip from '../common/Tooltip/RightTooltip'
import Tooltip from '../common/Tooltip/Tooltip'
import TopTooltip from '../common/Tooltip/TopTooltip'

const TooltipButtons = () => {
  return (
    <div className="flex flex-col justify-around gap-y-5 bg-black px-[24px] py-40 lg:flex-row lg:px-[76px] xl:px-[120px] ">
      {/* Button with a tooltip displayed at the default position */}
      <Tooltip content="The phone number may be printed on label to assist delivery">
        <button className="rounded-md bg-blue-500 px-4 py-1 text-white">
          Plain
        </button>
      </Tooltip>

      <div className="flex justify-end">
        {/* Button with a tooltip displayed to the left */}
        <LeftTooltip content="The phone number may be printed on label to assist delivery left">
          <button className="rounded-md bg-blue-500 px-4 py-1 text-white">
            Left
          </button>
        </LeftTooltip>
      </div>

      <div className="flex justify-center">
        {/* Button with a tooltip displayed at the top */}
        <TopTooltip content="The phone number may be printed on label to assist delivery top">
          <button className="rounded-md bg-blue-500 px-4 py-1 text-white">
            Top
          </button>
        </TopTooltip>
      </div>

      {/* Button with a tooltip displayed to the right */}
      <RightTooltip content="The phone number may be printed on label to assist delivery right">
        <button className="rounded-md bg-blue-500 px-4 py-1 text-white">
          Right
        </button>
      </RightTooltip>

      <div className="flex justify-center">
        {/* Button with a tooltip displayed at the bottom */}
        <BottomTooltip content="The phone number may be printed on label to assist delivery bottom">
          <button className="rounded-md bg-blue-500 px-4 py-1 text-white">
            Bottom
          </button>
        </BottomTooltip>
      </div>
    </div>
  )
}

export default TooltipButtons
