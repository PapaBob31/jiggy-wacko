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
      imgData: [{ url: "/assets/wacko-boy.webp", width: "", heigth: ""}, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "lppdp",
			name: "SWEET MOUTH T-SHRT",
      imgData: [{ url: "/assets/mouth-open-design.webp", width: "", heigth: "" }, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "NwHFs",
			name: "WACKO BOY T-SHIRT",
      imgData: [{ url: "/assets/wacko-boy-black.webp", width: "", heigth: "" }, {url: "/assets/black-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "Wscgq",
			name: "WACKO GRILLS T-SHIRT",
      imgData: [{ url: "/assets/wacko-grills.webp", width: "", heigth: ""}, {url: "/assets/black-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "brrP3",
			name: "WACKO BONES T-SHIRT",
      imgData: [{ url: "/assets/wacko-bones.webp", width: "", heigth: ""}, {url: "/assets/black-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "HS4pY",
			name: "WACKO MONSTER T-SHIRT",
      imgData: [{ url: "/assets/wacko-monster.webp", width: "", heigth: "" }, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "8d6UZ",
			name: "GANGSTA BOY T-SHIRT",
      imgData: [{ url: "/assets/gangsta-boy.webp", width: "", heigth: "" }, {url: "/assets/black-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "MkIvN",
			name: "BORN WACKO T-SHIRT",
      imgData: [{ url: "/assets/born-wacko.webp", width: "", heigth: "" }, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "5BpOK",
			name: "RICH AND WACKO T-SHIRT",
      imgData: [{ url: "/assets/rich-and-wacko-rt.webp", width: "", heigth: "" }, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "vPA8U",
			name: "JIGGY DRAGON T-SHIRT",
			imgData: [{url: "/assets/pink-dragon-jiggy.webp", width: "", heigth: ""}],
			for: ["MEN", "WOMEN"],
			color: "PINK",
			description: "Designed with a relaxed yet structured fit that flatters without feeling restrictive.",
			price: 15000,
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "ByBJW",
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
			name: `JW REAL SHI TEES`,
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
			imgData: [{url: "/assets/real-shi-tee.webp", width: "", heigth: ""}],
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "K1pog",
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
			name: `JW SMILEY T-SHIRT`,
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
			imgData: [{url: "/assets/smiley-tee.webp", width: "", heigth: ""}],
			sizes: ["S", "M", "L", "XL", "2XL"]
		},
		{
			id: "BLanJ",
			description: "This is the peak of clothing right here. Trending casual wear that gets everyone looking",
			name: `WACKO CAT T-SHIRT`,
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000,
      imgData: [{ url: "/assets/wacko-cat.webp", width: "", heigth: "" }, {url: "/assets/white-shirt-back.webp", width: "", heigth: ""}],
			sizes: ["S", "M", "L", "XL", "2XL"]
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
