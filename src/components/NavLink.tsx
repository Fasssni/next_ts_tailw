"use client";

import Link from "next/link";
import { useEffect } from "react";

const NavLink = ({ el }: { el: { to: string; title: string } }) => {
  useEffect(() => {
    console.log("1" < "2");
  }, []);
  return (
    <Link href={el.to}>
      <li className="text-black list-none text-xl hover:text-blue-400">
        {el.title}
      </li>
    </Link>
  );
};

export default NavLink;
