import { overviewData } from "@/lib/data";
import OverviewCard from "@/components/admin-dashboard/overview-card";
import OverviewHeading from "@/components/admin-dashboard/overview-heading";

function AdminDashboard() {
  return (
    <div className="xl:px-8 md:px-3 max-sm:px-0 pt-2">
      <OverviewHeading />
      <div className="mt-5 flex items-center justify-between gap-5 max-sm:flex-col">
        {overviewData.map((data) => (
          <OverviewCard
            key={data.id}
            description={data.description}
            icon={data.icon}
            isFirst={data.first}
            percent={data.percent}
            percentIcon={data.percenIcon}
            title={data.title}
            total={data.total}
          />
        ))}
      </div>
    </div>
  )
}

export default AdminDashboard