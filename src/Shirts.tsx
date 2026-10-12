import { useState } from "react"
import Footer from "./components/Footer.tsx"
import FullProductView from "./components/FullProductView.tsx";
import type { ProductData, FILTER } from "./types"
import ProductCard from "./components/ProductCard.tsx";
import useProductFilters from "./hooks/useProductFilter.ts"
import FilterButton from "./components/FilterButton.tsx";


export default function Page() {
	const [selectedProduct, setSelectedProduct] =  useState<null|ProductData>(null)
	const availableFilters: FILTER[] = ["MEN", "WOMEN", "WHITE", "BLACK", "RED"]

	const productsData: ProductData[] = [
		{
			id: "eR1Ju",
			name: "WACKO BOYS T-SHIRT",
			imgUrls: ["/assets/wacko-boy.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		}, 
		{
			id: "lppdp",
			name: "SWEET MOUTH T-SHRT",
			imgUrls: ["/assets/mouth-open-design.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		}, 
		{
			id: "NwHFs",
			name: "WACKO BOY T-SHIRT",
			imgUrls: ["/assets/wacko-boy-black.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		}, 
		{
			id: "Wscgq",
			name: "WACKO GRILLS T-SHIRT",
			imgUrls: ["/assets/wacko-grills.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "brrP3",
			name: "WACKO BONES T-SHIRT",
			imgUrls: ["/assets/wacko-bones.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "HS4pY",
			name: "WACKO MONSTER T-SHIRT",
			imgUrls: ["/assets/wacko-monster.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "8d6UZ",
			name: "GANGSTA BOY T-SHIRT",
			imgUrls: ["/assets/gangsta-boy.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "MkIvN",
			name: "BORN WACKO T-SHIRT",
			imgUrls: ["/assets/born-wacko.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		}, 
		{
			id: "5BpOK",
			name: "RICH AND WACKO T-SHIRT",
			imgUrls: ["/assets/rich-and-wacko-rt.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "vPA8U",
			name: "JIGGY DRAGON T-SHIRT",
			imgUrls: ["/assets/pink-dragon-jiggy.png"],
			for: ["MEN", "WOMEN"],
			color: "PINK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000
		},
		{
			id: "ByBJW", 
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
			name: `JW REAL SHI TEES`, 
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
			imgUrls: ["/assets/real-shi-tee.png"],
		},
		{
			id: "K1pog",
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
			name: `JW SMILEY T-SHIRT`, 
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
			imgUrls: ["/assets/smiley-tee.png"],
		},
		{
			id: "BLanJ", 
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking", 
			name: `WACKO CAT T-SHIRT`, 
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
			imgUrls: ["/assets/wacko-cat.png", "/assets/white-shirt-back.png"],
		}
	]

	const [productsToDisplay, filter, setFilter] = useProductFilters(productsData) as [ProductData[], FILTER, (arg: FILTER)=>void]

	return (<>
		<h1 className="font-bold text-3xl mt-22 sm:ml-10 ml-5">SHIRTS</h1>
		<section className="sm:px-10 px-5 py-2 mt-10">
			<ul className="flex flex-wrap gap-2 mb-6">
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