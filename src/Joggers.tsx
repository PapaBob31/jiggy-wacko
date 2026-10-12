import { useState } from "react"
import Footer from "./components/Footer.tsx"
import ProductCard from "./components/ProductCard.tsx";
import FullProductView from "./components/FullProductView.tsx";
import type { ProductData, FILTER } from "./types"
import FilterButton from "./components/FilterButton.tsx";
import useProductFilters from "./hooks/useProductFilter.ts";


export default function Page() {
	const [selectedProduct, setSelectedProduct] =  useState<null|ProductData>(null)
	const availableFilters: FILTER[] = ["MEN", "WOMEN", "BLACK", "GREY"]
	
	const productsData: ProductData[] = [
		{
			id: "pMTxo",
			name: "GREY JOGGERS",
			imgUrls: ["/assets/grey-joggers.png"],
			for: ["MEN", "WOMEN"],
			color: "GREY",
			price: 20000,
			description: "Comfortable cotton fabric joggers for everyone and any occassion"
		}, 
		{
			id: "8T47S",
			name: "BLACK JOGGERS",
			imgUrls: ["/assets/black-joggers.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000,
			description: "Comfortable cotton fabric joggers for everyone and any occassion"
		}, 
	]
	const [productsToDisplay, filter, setFilter] = useProductFilters(productsData) as [ProductData[], FILTER, (arg: FILTER)=>void]

	return (<>
		{/* <div className="w-full px-10 flex gap-20 items-center border-b border-b-gray-500 py-1"> */}
		<h1 className="font-bold text-3xl mt-22 sm:ml-10 ml-5">JOGGERS</h1>
		<section className="sm:px-10 px-5 py-2 mt-10">
			<ul className="flex flex-nowrap gap-2 mb-6">
				{availableFilters.map((filterAvailable, index) => (
					<li key={index}><FilterButton value={filterAvailable} currentPageFilter={filter} setFilter={setFilter}/></li>
				))}
			</ul>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4  mb-8">
				{productsToDisplay.map((product) => (
					<ProductCard 
						product={product} 
						selectProduct={setSelectedProduct} 
						key={product.id} 
						listStyling="flex flex-nowrap overflow-x-hidden w-full h-100"
					/>
				))}
			</ul>
		</section>
		{selectedProduct && <FullProductView data={selectedProduct} closeView={() => setSelectedProduct(null)}/>}
		<Footer/>
	</>)
}