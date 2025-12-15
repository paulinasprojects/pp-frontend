import { FaChevronDown } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { FaBedPulse } from "react-icons/fa6";

export const overviewData = [
  {
    id: 1,
    first: true,
    title: "Total Patients",
    icon: FaBedPulse,
    total: 5.715,
    percenIcon: FaChevronDown,
    percent: "10%",
    description: "Since last week"
  },
  {
    id: 2,
    first: false,
    title: "Total Doctors",
    icon: TbUsersGroup,
    percenIcon:  "",
    total: 1.515,
    percent: 340,
    description: "Available Doctors"
  },
]