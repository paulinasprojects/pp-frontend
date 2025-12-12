import { FaRegBell, FaChevronDown } from "react-icons/fa";

const adminName = "Alehandro";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sticky top-0 bg-white border-b border-gray-200 z-30 px-4 md:px-6 py-3.5">
      <input
        type="text"
        placeholder="Search anything here"
        className="w-full max-w-[900px] py-2 px-4 rounded-sm border border-gray-200 focus-visible:outline-2 focus-visible:outline-primary"
      />

      <div className="flex items-center gap-4 ml-4">
        <FaRegBell className="size-6" />
        <div className="flex items-center gap-2.5">
          <img
            src="/avatar.jpg"
            alt=""
            className="w-8 rounded-full object-cover"
          />
          <span className="font-medium max-sm:hidden">{adminName}</span>
          <FaChevronDown className="max-sm:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

