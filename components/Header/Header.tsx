import { classNames } from "@/utils/classNames";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon } from "react-feather";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="flex justify-between m-auto p-4 w-3/4 border-b border-gray-300">
      <Link href="/">
        <h1 className="text-pink-500 text-3xl cursor-pointer">Dualboot React Seed</h1>
      </Link>

      <button
        className={classNames(
          "rounded-full w-[40px] h-[40px] border-none cursor-pointer text-center flex items-center justify-center",
          isDarkMode ? "bg-white" : "bg-black",
        )}
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      >
        <Moon size={20} color={isDarkMode ? "black" : "white"}></Moon>
      </button>
    </div>
  );
};

export default Header;
