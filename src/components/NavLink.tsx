"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ el }: { el: { to: string; title: string } }) => {
  const pathname = usePathname();
  const isActive = pathname === el.to;

  return (
    <Link href={el.to}>
      <li
        className={
          "list-none text-xl hover:text-blue-400 " +
          (isActive ? "text-blue-400" : "text-white")
        }
      >
        {el.title}
      </li>
    </Link>
  );
};

export default NavLink;
