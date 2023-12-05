import Link from "next/link";
import React from "react";
import '@/app/globals.css';

export const Navbar = () => {
	return (
		<header className="w-full background-transparent mb-5">
			<nav className=" flex justify-between p-5">
				<span className="text-xl">LOGO NAME</span>
				<ul>
					<Link href='/' className="px-4">Home</Link>
					<Link href='/shop' className="px-4">Shop</Link>
					<Link href='/contact' className="px-4">Contact</Link>
				</ul>
			</nav>
		</header>
	);
};
