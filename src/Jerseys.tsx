import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react"
import Footer from "./components/Footer.tsx"
import FullProductView from "./components/FullProductView.tsx";

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
				<ul className="flex flex-nowrap overflow-x-hidden w-full">
					{product.imgUrls.map((url, i) => (
						<li key={i} className={`bg-neutral-100 w-full h-full duration-300 shrink-0 ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}%]`}>
							<img className="h-auto w-full block" src={url}/>
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
			<h3 className="font-semibold mt-1 sm:text-base text-[14px]">{product.name}</h3>
			<span className="text-neutral-800 sm:text-base text-[14px]">₦{product.price.toLocaleString()}</span>
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
			name: "JERSEY 1",
			imgUrls: ["/assets/black-jersey-1.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		}, 
		{
			name: "JERSEY 2",
			imgUrls: ["/assets/black-jersey-2.png", "/assets//black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		}, 
		{
			name: "JERSEY 3",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000
		}, 
		{
			name: "JERSEY 4",
			imgUrls: ["/assets/black-jersey-3.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		},
		{
			name: "JERSEY 5",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/jersey-3-back.jpg"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		},
		{
			name: "JERSEY 6",
			imgUrls: ["/assets/black-jersey-4.png", "/assets/black-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000
		},
		{
			name: "JERSEY 7",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "BLACK",
			price: 20000
		},
		{
			name: "JERSEY 8",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000
		}, 
		{
			name: "JERSEY 9",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000
		},
		{
			name: "JERSEY 10",
			imgUrls: ["/assets/red-jersey-1.png", "/assets/red-jersey-1-back.png"],
			for: ["MEN", "WOMEN"],
			color: "RED",
			price: 20000
		}
	]

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
				<li><button className="border-2 border-neutral-400 text-neutral-600 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer rounded-sm">Men</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer rounded-sm ">Women</button></li>
				<li><button className="border-2 border-black lg:px-4 lg:py-2 cursor-pointer px-2 py-1 rounded-sm font-semibold">Blue</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer rounded-sm">Black</button></li>
				<li><button className="border-2 border-neutral-400 text-neutral-600 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer rounded-sm">Red</button></li>
			</ul>
			<ul className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-4  mb-8">
				{productsData.map((product, productIndex) => <DisplayedProduct productIndex={productIndex} product={product}/>)}
			</ul>
			{/* <FullProductView/> */}
		</section>
		<Footer/>
	{/* <FullProductView/> */}
	</>)
}