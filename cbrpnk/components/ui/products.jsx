import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Products = () => {
	return (
		<>
			<main className='flex justify-between p-6'>
				<aside className='w-64'>
					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Clothing</AccordionTrigger>
							<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>Misc</AccordionTrigger>
							<AccordionContent>
								Yes. It comes with default styles that matches the other components&apos; aesthetic.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>Others</AccordionTrigger>
							<AccordionContent>
								Yes. It&apos;s animated by default, but you can disable it if you prefer.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</aside>
				<section className=' w-full grid lg:grid-cols-4 md:grid-cols-2 gap-6 flex-1 pl-7'>
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
				</section>
			</main>
		</>
	);
};

export default Products;
