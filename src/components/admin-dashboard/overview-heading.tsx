import { LuUpload } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
const OverviewHeading = () => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-8 max-sm:items-start max-sm:justify-start ">
      <div className="flex flex-col xl:gap-2">
        <span className="xl:text-2xl font-semibold max-sm:text-lg md:text-lg">Overview</span>
        <span className="lg:text-sm font-medium text-gray-400 md:text-[12px] max-sm:text-[12px]">This is the latest update for the last 7 days. Check it out now</span>
      </div>
      <div className="flex items-center gap-3.5">
        <button className="flex items-center gap-6 outline-1 outline-gray-100 lg:px-8 md:px-4 py-2.5 max-sm:px-8  rounded-[10px] cursor-pointer bg-white hover:bg-gray-50 transition-colors">
          Week
          <FaChevronDown />
        </button>
        <button className="bg-primary rounded-[10px] font-semibold text-[16px] text-white lg:px-8 md:px-4 py-2.5 max-sm:px-8  cursor-pointer hover:bg-primary/90 flex gap-2 items-center justify-center transition-colors">
          <LuUpload className="size-5" />
          Export
        </button>
      </div>
    </div>
  )
}

export default OverviewHeading