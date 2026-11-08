
import { useState } from "react"
import Footer from "./components/Footer"
import ProductCard from "./components/ProductCard";
import FullProductView from "./components/FullProductView";
import { type ProductData } from "./types";


export default function Page() {
	const [selectedProduct, setSelectedProduct] =  useState<null|ProductData>(null)

	const productsData = [
		{
			id: "aT0N4",
			name: "FOAM TRUCKER CAP",
      imgData: [
        { url: "/assets/brown-cap-sv.webp", width: "902", heigth: "902" },
        { url: "/assets/brown-cap-fv.webp", width: "894", heigth: "902" },
        { url: "/assets/brown-cap-bv.webp", width: "868", heigth: "900" }],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "One-size-fits-all adjustable plastic snapback closure ensures a snug, custom fit for practically anyone",
			price: 7000
		},
		{
			id: "cN32q",
			name: "FOAM CAMO CAP",
      imgData: [
        { url: "/assets/camo-cap-sv.webp", width: "904", heigth: "906" },
        { url: "/assets/camo-cap-fv.webp", width: "900", heigth: "900" },
        { url: "/assets/camo-cap-bv.webp", width: "868", heigth: "900" }
      ],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			description: "One-size-fits-all adjustable plastic snapback closure ensures a snug, custom fit for practically anyone",
			price: 7000
		}
	]

	return (<>
		<section className="sm:px-10 px-5 py-2 mt-22 sm:ml-10">
			<h1 className="font-bold text-3xl">CAPS</h1>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4 mt-10 mb-8">
				{productsData.map((product) => (
					<ProductCard
						product={product}
						selectProduct={setSelectedProduct}
						key={product.id}
						listStyling="flex flex-nowrap overflow-x-hidden w-full sm:h-60 h-45"
					/>
				))}
			</ul>
		</section>
		{selectedProduct && <FullProductView data={selectedProduct} closeView={() => setSelectedProduct(null)}/>}
		<Footer/>

	</>)
}
