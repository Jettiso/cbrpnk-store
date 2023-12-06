import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Products from "@/components/ui/products";

const page = () => {
	return (
		<div>
			<div className='w-full flex justify-between p-5'>
				<span className='text-lg'>SHOP / CATEGORY</span>
				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='$ Price Filter' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='light'>Low to High</SelectItem>
						<SelectItem value='dark'>High to Low</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<Products />
		</div>
	);
};

export default page;
