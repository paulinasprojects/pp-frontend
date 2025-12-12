import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { FaBedPulse } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { Menu, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/contexts/sidebar-context";
import { useIsMobile } from "@/hooks/use-mobile";


const items = [
  { title: "Overview", href: "/admin-dashboard", icon: CiGrid41 },
  { title: "Doctors", href: "/admin-dashboard/doctors", icon: TbUsersGroup },
  { title: "Patients", href: "/admin-dashboard/patients", icon: FaBedPulse },
  { title: "Appointments", href: "/admin-dashboard/appointments", icon: GrNotes },
];

const sidebarVariants: Variants = {
  expanded: { width: 256, transition: { type: "spring", damping: 30, stiffness: 300 } },
  collapsed: { width: 64, transition: { type: "spring", damping: 30, stiffness: 300 } },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.18 } },
  closed: { opacity: 0, x: -8, transition: { duration: 0.15 } },
};

export default function Sidebar() {
  const isMobile = useIsMobile();
  const { collapsed, toggleCollapse } = useSidebar();
  const cannotExpand = isMobile;
  const isCollapsed = cannotExpand ? true : collapsed;
  const { pathname } = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      className="flex flex-col h-screen border-r border-r-gray-200 bg-white select-none"
    >
      <div className="flex flex-col h-full p-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.a
                  key="title"
                  className="ml-5 mt-2"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                >
                  <img src="/logo-svg.svg" alt="logo" className="h-[46px]" />
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => {
              if (!cannotExpand) toggleCollapse();
            }}
            disabled={cannotExpand}
            className={cn(
              "p-2  hover:bg-gray-50 cursor-pointer",
              cannotExpand && "opacity-50"
            )}
          >
            <Menu className="w-5 h-5 " />
          </button>
        </div>

        <nav className="flex-1">
          <motion.ul
            initial={false}
            animate={isCollapsed ? "closed" : "open"}
            variants={listVariants}
            className="flex flex-col gap-2"
          >
            {items.map((item) => {
              return (
                <motion.li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center text-sm px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 transition-all",
                      pathname === item.href &&
                      "bg-[#f1f6ef] text-primary border-r-2 border-primary",
                      isCollapsed ? "justify-center px-0" : "gap-3 justify-start"
                    )}
                  >
                    <item.icon className="w-5 h-5 " />
                    {!isCollapsed && <span className="text-sm">{item.title}</span>}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        <div className="mt-auto">
          <div className="h-px bg-gray-200 my-3" />
          <motion.div variants={itemVariants}>
            <a
              href="/admin/dashboard/settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition",
                isCollapsed ? "justify-center" : "justify-start"
              )}
            >
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Settings</span>}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
}
