import type { IconType } from "react-icons";

interface Props {
  title: string;
  total: number;
  icon: IconType;
  percentIcon: IconType | string;
  isFirst: boolean;
  percent: string | number;
  description: string;
}

const OverviewCard = ({ title, total, icon: Icon, isFirst, percent, description, percentIcon: Icon2 }: Props) => {
  return (
    <div className="bg-white w-full p-5 rounded-sm border-b-2 border-b-primary flex flex-col gap-3  hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-400">{title}</span>
        <span className="bg-[#f1faf6] p-2">
          <Icon className="text-[#59b29f] size-[17px]" />
        </span>
      </div>
      <span className="text-2xl font-medium">{total}</span>
      {isFirst ? (
        <span className="text-[#e9859b] flex gap-2 items-center"><Icon2 className="size-3" />
          {percent}
          <span className="text-sm text-gray-400">{description}</span>
        </span>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-[#59b29f] font-bold">{percent}</span>
          <span className="text-sm text-gray-400">{description}</span>
        </div>
      )}
    </div>
  )
}

export default OverviewCard