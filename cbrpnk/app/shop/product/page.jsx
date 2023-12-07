import React from "react";
import Image from "next/image";

const Item = () => {
	let img = "https://res.cloudinary.com/dbg4xoeod/image/upload/v1701789916/cld-sample-5.jpg";
	return (
		<div className='w-full flex'>
			<main className="flex flex-row mx-auto justify-center">
				<Image
					src={img}
					width={500}
					height={500}
					className='rounded-lg '
					placeholder='blur'
					blurDataURL={img}
					objectFit='cover'
					objectPosition='center'
					priority={true}
					loading='eager'
					quality={100}
					sizes='(max-width: 768px) 100vw,
				(max-width: 1200px) 50vw,
				33vw'
					alt='shoe'
				/>
				<section className="flex flex-col justify-self-center self-center pl-12">
					<h1 className="text-2xl mb-4">Some shoes with blue background</h1>
					<h2 className="text-xl mb-10">$80</h2>
					<div>
						<span>Size:</span>
						<div className="mb-12">
							<button className='p-1 px-4 mr-2 rounded-md border-2'>S</button>
							<button className='p-1 px-4 mr-2 rounded-md border-2'>M</button>
							<button className='p-1 px-4 mr-2 rounded-md border-2'>L</button>
							<button className='p-1 px-4 mr-2 rounded-md border-2'>XL</button>
							<button className='p-1 px-4 mr-2 rounded-md border-2'>XXL</button>
						</div>
						<button className='p-1 px-4 mr-2 rounded-md border-2'>Add to Cart</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Item;
