"use client";

import Link from "next/link";
import { useState } from "react";
import { UserCircle } from "reicon-react";

const Navbar = () => {
    const[ showMenu, setShowMenu] =useState(false);
    
	return (
		<div className="bg-white h-[60px] border-b border-gray-200 flex items-center justify-between pr-5">
			<header className=" flex items-center px-5  gap-2">
				<a href="/">
					<span className="border px-[12px] py-[8px] text-black rounded-full">
						AI
					</span>
				</a>
				<h1 className="text-xl font-semibold text-gray-900">CHATBOT</h1>
			</header>

		
			<div className="relative group text-black/80 flex justify-center items-center gap-2 ">
				{" "}
                <span className="font-normal text-md ">
                Rafi
                {/* {User.name} */}
                </span>
				<button className="cursor-pointer"
                onClick={()=>{
                    setShowMenu(!showMenu)
                }}
                >
					{" "}
					<UserCircle size={25} />

				</button>{" "}
				{/* Logout Dropdown */}{" "}
                    {
                        showMenu && (
				<div className="absolute right-0 top-full mt-2  z-50">
					{" "}
					<Link
						href="/Login"
						className="block rounded-md bg-white px-5 py-2 text-sm text-red-700 shadow-lg border border-gray-200 hover:bg-gray-100"
					>
						Logout 
					</Link>
				</div>
        )}
			</div>
		</div>
	);
};

export default Navbar;
