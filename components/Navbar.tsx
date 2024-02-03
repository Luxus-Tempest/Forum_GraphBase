import { NavLinks } from "@/libs/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = {};
  return (
    <nav className=" flexBetween navbar ">
      <div className=" flex-1 flexStart gap-10 ">
        <Link href="/">
          <Image src={"/logo.svg"} alt="Flexible" width={115} height={43} />
        </Link>

        <ul className=" xl:flex hidden text-sm font-medium gap-7 ">
          {NavLinks.map((item) => (
            <Link href={item.href} key={item.key}>
              {item.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className=" flexCenter gap-4 ">
        {session ? (
          <>
            User photo
            <Link href={"/create-project"}> Share work </Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
