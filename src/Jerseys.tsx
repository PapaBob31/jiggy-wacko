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
		<section className="py-2">
			<div className="sm:mt-14 mt-10 bg-black w-full overflow-hidden relative lg:h-[85vh] sm:h-[60vh] h-[50vh] max-sm:max-h-100 sm:mb-8 mb-4">
				<img src="/assets/jersey-page-hero-img.png" className="object-cover lg:object-top object-top-right absolute z-10 block inset-0 w-full h-full"/>
				{<div className="bg-linear-to-r sm:from-black from-black/50 from-10% lg:to-60% to-50% to-transparent inset-0 absolute z-10"></div>}
				<div className="sm:px-10 px-5 absolute sm:bottom-20 bottom-0 z-20 text-white mb-4 xl:w-[40vw] sm:w-[60vw] w-[80vw]">
					<div className="font-black-ops xl:text-3xl lg:text-2xl sm:text-lg text-base font-semibold sm:mb-4 mb-2">INTRODUCING</div>
					<div className="font-black-ops tracking-wide xl:text-3xl lg:text-2xl sm:text-lg text-base font-semibold text-neutral-200 leading-none"><i>Jiggy Wacko</i> X REJICORE</div>
					<div className="font-black-ops xl:text-7xl text-5xl tracking-widest font-semibold leading-none">JERSEYS</div>
					<p className="text-neutral-300 xl:mt-3 sm:mt-2 mt-1 sm:text-base text-sm">
						Tired of Seeing Strangers rock your look at every game?
						<span className="lg:inline hidden">It is time to upgrade your wardrobe with pieces that actually turn heads, spark conversations, and scream individuality.</span> Stand Out. Be JIGGY
					</p>
					<button className="text-black bg-white p-2 font-semibold xl:mt-4 mt-2 rounded-sm sm:text-base text-sm">Explore Below</button>
				</div>
			</div>
			<ul className="sm:px-10 px-5 flex gap-2 mb-6 flex-wrap">
				{availableFilters.map((filterAvailable, index) => (
					<li key={index}><FilterButton value={filterAvailable} currentPageFilter={filter} setFilter={setFilter}/></li>
				))}
			</ul>
			<ul className="sm:px-10 px-5 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-4 sm:gap-y-5 gap-x-2 gap-y-4 mb-8">
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