import { Search, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react"
import Footer from "./components/Footer.tsx"

function FullProductView() {
	return (
		<section className="fixed bg-black/50 inset-0 w-full z-50">
			<div className="w-150 h-180 mt-4 relative mx-auto rounded-xl overflow-hidden">
				<button className="absolute top-4 left-4 bg-neutral-900/50 items-center flex justify-center p-2 rounded-full cursor-pointer">
					<X size={20} className="text-white"/>
				</button>
				<img src="/assets/jersey-7.jpg" className="w-full h-180"/>
				<div className="absolute bottom-0 w-full">
					<div className="flex items-center justify-center gap-2 pb-2">
						<button className="rounded-lg border-2 border-gray-200 cursor-pointer">
							<img src="/assets/jersey-1.jpg" className="w-30 rounded-lg"/>
						</button>
						<button className="rounded-lg border-2 border-gray-200 cursor-pointer">
							<img src="/assets/jersey-2.jpg" className="w-30 rounded-lg"/>
						</button>
					</div>
					<div className="bg-white w-full rounded-t-2xl h-60 py-2 px-4">
						<div className="flex justify-between items-center">
							<h2 className="text-lg font-semibold">Jersey 1</h2>
							<b className="text-gray-700 font-medium">₦20,000</b>
						</div>
						<p className="w-[80%] text-gray-800 my-2">
							lorem ipsum dut solaar amen blah blah. Really good exposition on the black jersey. We hope you buy it though
						</p>
						<h3 className="font-semibold mb-2">Select Size</h3>
						<ul className="grid grid-cols-5 w-50 gap-2 mb-4">
							<li><button className="p-1 rounded-sm cursor-pointer border border-gray-400 w-full text-gray-700">S</button></li>
							<li><button className="p-1 rounded-sm cursor-pointer border border-gray-400 w-full text-gray-700">M</button></li>
							<li><button className="p-1 rounded-sm cursor-pointer border border-gray-400 w-full text-gray-700">L</button></li>
							<li><button className="p-1 rounded-sm cursor-pointer border border-gray-400 w-full text-gray-700">XL</button></li>
							<li><button className="p-1 rounded-sm cursor-pointer border border-gray-400 w-full text-gray-700">2XL</button></li>
						</ul>
						<button className="bg-black text-white rounded-3xl block w-full p-2">Buy</button>
					</div>
				</div>
			</div>
		</section>
	)
}


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
				<ul className="flex flex-nowrap overflow-x-hidden w-full h-70">
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
			name: "WACKO BOYS T-SHIRT",
			imgUrls: ["/assets/wacko-boy.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			price: 15000
		}, 
		{
			name: "SWEET MOUTH T-SHRT",
			imgUrls: ["/assets/mouth-open-design.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			price: 15000
		}, 
		{
			name: "WACKO BOY T-SHIRT",
			imgUrls: ["/assets/wacko-boy-black.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000
		}, 
		{
			name: "WACKO GRILLS T-SHIRT",
			imgUrls: ["/assets/wacko-grills.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000
		},
		{
			name: "WACKO BONES T-SHIRT",
			imgUrls: ["/assets/wacko-bones.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000
		},
		{
			name: "WACKO MONSTER T-SHIRT",
			imgUrls: ["/assets/wacko-monster.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			price: 15000
		},
		{
			name: "GANGSTA BOY T-SHIRT",
			imgUrls: ["/assets/gangsta-boy.png", "/assets/black-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 15000
		},
		{
			name: "BORN WACKO T-SHIRT",
			imgUrls: ["/assets/born-wacko.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			price: 15000
		}, 
		{
			name: "RICH AND WACKO T-SHIRT",
			imgUrls: ["/assets/rich-and-wacko-rt.png", "/assets/white-shirt-back.png"],
			for: ["MEN", "WOMEN"],
			color: "WHITE",
			price: 15000
		},
		{
			name: "JIGGY DRAGON T-SHIRT",
			imgUrls: ["/assets/pink-dragon-jiggy.png"],
			for: ["MEN", "WOMEN"],
			color: "PINK",
			price: 15000
		}
	]

	return (<>
		{/* <div className="w-full px-10 flex gap-20 items-center border-b border-b-gray-500 py-1"> */}
		<h1 className="font-bold text-3xl mt-22 ml-10">SHIRTS</h1>
		<section className="px-10 py-2 mt-10">
			<ul className="flex gap-2 mb-6">
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Men</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm ">Women</button></li>
				<li><button className="border-2 border-black px-4 py-2 cursor-pointer rounded-sm font-semibold">Blue</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Black</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 px-4 py-2 cursor-pointer rounded-sm">Red</button></li>
			</ul>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4  mb-8">
				{productsData.map((product, productIndex) => <DisplayedProduct productIndex={productIndex} product={product}/>)}
			</ul>
		</section>
		<Footer/>
	</>)
}