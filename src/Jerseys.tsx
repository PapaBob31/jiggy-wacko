import { useState } from "react"
import Footer from "./components/Footer.tsx"
import FullProductView from "./components/FullProductView.tsx";
import ProductCard from "./components/ProductCard.tsx";
import type { ProductData, FILTER } from "./types.ts";
import FilterButton from "./components/FilterButton.tsx";
import useProductFilters from "./hooks/useProductFilter.ts";

export default function Page() {
	const [selectedProduct, setSelectedProduct] =  useState<null|ProductData>(null)
	const availableFilters: FILTER[] = ["MEN", "WOMEN", "BLACK", "RED"]

	const productsData: ProductData[] = [
		{
			id: "jTPp5",
			name: "JERSEY 1",
			imgUrls: ["/assets/black-jersey-1.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		}, 
		{
			id: "o3gcN",
			name: "JERSEY 2",
			imgUrls: ["/assets/black-jersey-2.png", "/assets//black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		}, 
		{
			id: "l0rL7",
			name: "JERSEY 3",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		}, 
		{
			id: "Dsj1l",
			name: "JERSEY 4",
			imgUrls: ["/assets/black-jersey-3.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "3ZO5m",
			name: "JERSEY 5",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/jersey-3-back.jpg"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "gJzXX",
			name: "JERSEY 6",
			imgUrls: ["/assets/black-jersey-4.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "LNgzt",
			name: "JERSEY 7",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "Qzpz6",
			name: "JERSEY 8",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "iE9mw",
			name: "JERSEY 9",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		},
		{
			id: "gNkVv",
			name: "JERSEY 10",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000,
			description: "Bold, retro-inspired design crafted for classic, eye-catching streetwear style. Vibrant, fade-resistant color technology that stays sharp wash after wash"
		}
	]

	const [productsToDisplay, filter, setFilter] = useProductFilters(productsData) as [ProductData[], FILTER, (arg: FILTER)=>void]

	return (<>
		{/* <div className="w-full px-10 flex gap-20 items-center border-b border-b-gray-500 py-1"> */}
		
		<section className="sm:px-10 px-5 py-2 mt-15">
			<div className="w-full rounded-lg overflow-hidden relative px-4 xl:py-35 lg:py-20 sm:pt-20 pt-15 pb-5 sm:my-8 my-4">
				<img src="/assets/jersey-page-hero-img.png" className="object-cover absolute z-10 block inset-0 w-full h-full"/>
				{<div className="bg-linear-to-r from-black to-transparent inset-0 absolute z-10"></div>}
				<div className="relative z-20 text-white mb-4 xl:w-[32vw] sm:w-[50vw] w-[80vw]">
					<div className="font-rock-salt tracking-wide xl:text-6xl sm:text-4xl text-2xl xl:mb-6 sm:mb-3 mb-0 font-semibold ">Jiggy Wacko</div>
					<div className="font-stanlinist xl:text-4xl sm:text-xl text-lg xl:mb-2 mb-0 text-center xl:w-[70%] w-[50%] font-semibold">X</div> 
					<div className="font-black-ops xl:text-7xl sm:text-5xl text-2xl tracking-widest font-semibold">REJICORE</div>
					<p className="text-neutral-300 xl:mt-4 mt-1">Tired of Seeing Strangers rock your look at every game? Stand Out. Be JIGGY</p>
					{/* <button className="text-black bg-white p-2 font-semibold xl:mt-4 mt-1 rounded-sm">Explore Below</button> */}
				</div>
			</div>
			<ul className="flex gap-2 mb-6 flex-wrap">
				{availableFilters.map((filterAvailable, index) => (
					<li key={index}><FilterButton value={filterAvailable} currentPageFilter={filter} setFilter={setFilter}/></li>
				))}
			</ul>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-4 sm:gap-y-5 gap-x-2 gap-y-4 mb-8">
				{productsToDisplay.map((product) => (
					<ProductCard 
						product={product} 
						selectProduct={setSelectedProduct} 
						key={product.id} 
						listStyling="flex flex-nowrap overflow-x-hidden xl:h-[20vw] md:h-[30vw] sm:h-[35vw] h-[50vw]"
					/>
				))}
			</ul>
		</section>
		{selectedProduct && <FullProductView data={selectedProduct} closeView={() => setSelectedProduct(null)}/>}
		<Footer/>
	</>)
}