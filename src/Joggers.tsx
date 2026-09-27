import { Search, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react"
import Footer from "./components/Footer.tsx"


interface ProductData {
	name: string;
	imgUrls: string[];
	for: string[],
	price: number
}

`-translate-x-[100%] -translate-x-[200%] -translate-x-[300%] -translate-x-[400%] 
translate-x-[100%] translate-x-[200%] translate-x-[300%]translate-x-[400%]`

function DisplayedProduct({ productIndex, product } : {productIndex: number, product: ProductData}) {
	const [slidesMoved, setSlidesMoved] = useState(0);

	function moveSlidesRight() {
		setSlidesMoved(slidesMoved => slidesMoved + 1)
	}

	function moveSlidesLeft() {
		setSlidesMoved(slidesMoved => slidesMoved - 1)
	}
	return (
		<li key={productIndex} className="cursor-pointer relative">
			<div className="relative">
				<ul className="flex flex-nowrap overflow-x-hidden w-full h-100">
					{product.imgUrls.map((url, i) => (
						<li key={i} className={`w-full h-full duration-300 shrink-0 ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}%]`}>
							<img className="h-full w-full block" src={url}/>
						</li>
					))}
				</ul>
				<div className="w-full absolute bottom-1 flex justify-center gap-1">
					{product.imgUrls.map((_url, i) => (
						<button key={i} 
							className={`${Math.abs(slidesMoved) === i ? "bg-black" : "bg-white"} border-[1px] border-white h-[8px] w-[8px] rounded-full`}></button>
					))}
				</div>
			</div>
			<h3 className="font-semibold mt-1">{product.name}</h3>
			<span className="text-neutral-800">₦{product.price.toLocaleString()}</span>
			<button onClick={moveSlidesRight} disabled={slidesMoved == 0} className="absolute top-[45%] left-2 p-1 cursor-pointer">
				<ChevronLeft className="text-black" size={18}/>
			</button>
			<button onClick={moveSlidesLeft} disabled={slidesMoved == product.imgUrls.length} 
				className="absolute top-[45%] right-2 p-1 cursor-pointer">
				<ChevronRight className="text-black" size={18}/>
			</button>
		</li>
	)
}


export default function Page() {
	const productsData = [
		{
			name: "GREY JOGGERS",
			imgUrls: ["/assets/grey-joggers.png"],
			for: ["MEN", "WOMEN"],
			color: "GREY",
			price: 20000
		}, 
		{
			name: "BLACK JOGGERS",
			imgUrls: ["/assets/black-joggers.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		}, 
	]

	return (<>
		{/* <div className="w-full px-10 flex gap-20 items-center border-b border-b-gray-500 py-1"> */}
		<h1 className="font-bold text-3xl mt-22 ml-10">JOGGERS</h1>
		<section className="px-10 py-2 mt-10">
			<ul className="flex gap-2 mb-6">
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Men</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm ">Women</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Black</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Grey</button></li>
			</ul>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4  mb-8">
				{productsData.map((product, productIndex) => <DisplayedProduct productIndex={productIndex} product={product}/>)}
			</ul>
		</section>
		<Footer/>
	</>)
}