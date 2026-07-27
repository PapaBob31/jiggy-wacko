import { Search, X } from "lucide-react";

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


export default function Page() {
	const productsData = [
		{
			name: "Jersey 1",
			imgUrl: "/assets/jersey-1.jpg",
			for: ["MEN", "WOMEN"],
			price: 20000
		}, 
		{
			name: "Jersey 2",
			imgUrl: "/assets/jersey-2.jpg",
			for: ["MEN", "WOMEN"],
			price: 20000
		}, 
		{
			name: "Jersey 3",
			imgUrl: "/assets/jersey-3.jpg",
			for: ["MEN", "WOMEN"],
			price: 20000
		}, 
		{
			name: "Jersey 4",
			imgUrl: "/assets/jersey-3.jpg",
			for: ["MEN", "WOMEN"],
			price: 20000
		}
	]

	return (<>
		<div className="w-[80vw] mx-auto flex gap-10 items-center border-b border-b-gray-200 py-1">
			<a href=""><img src="/assets/logo.png" className="w-12"/></a>
			<div className="grow focus-within:outline-2 focus-within:outline-gray-500 p-1 outline-1 outline-gray-400 rounded-2xl flex gap-2 items-center">
				<Search size={20}/>
				<input type="text" placeholder="search Jerseys..." className="outline-none w-full"/>
			</div>
			<nav className="text-gray-600 font-medium flex gap-4 text-sm">
				<a href="Home">HOME</a>
	      <a href="Jerseys">JERSEYS</a>
	      <a href="Tees">TEES</a>
	      <a href="Joggers">JOGGERS</a>
	      <a href="Jeans">JEANS</a>
	      <a href="Caps">CAPS</a>
			</nav>
		</div>
		<section className="w-[80vw] mx-auto py-2">
			<div className="w-full rounded-lg overflow-hidden relative px-4 pt-8 pb-40 rounded-lg my-8">
				<img src="/assets/jersey-hero-img.jpg" className="absolute z-10 block inset-0 h-full w-full"/>
				{<div className="bg-linear-to-r from-[#5e1b0a] to-transparent inset-0 absolute z-10"></div>}
				<div className="relative z-20">
					<h1 className="text-white mb-4 font-semibold text-3xl">JIGGY WACKO X REJICORE</h1>
					<p className="w-100 text-gray-200">Tired of Seeing Strangers rock your look at every game? Stand Out. Be JIGGY</p>
					<button className="text-black bg-white p-2 font-semibold mt-4 rounded-sm">Explore Below</button>
				</div>
			</div>
			<ul className="flex font-semibold gap-2 mb-6">
				<li><button className="bg-neutral-200 px-2 py-1 rounded-sm font-semibold">Men</button></li>
				<li><button className="bg-neutral-200 px-2 py-1 rounded-sm font-semibold">Women</button></li>
				<li><button className="bg-neutral-200 px-2 py-1 rounded-sm font-semibold">Blue</button></li>
				<li><button className="bg-neutral-200 px-2 py-1 rounded-sm font-semibold">Black</button></li>
				<li><button className="bg-neutral-200 px-2 py-1 rounded-sm font-semibold">Red</button></li>
			</ul>
			<ul className="grid lg:grid-cols-5 sm:gird-cols-3 grid-cols-2 gap-4 mb-8">
				{productsData.map((product, productIndex) => (
					<li key={productIndex}>
						<img className="rounded-lg h-60 w-full block" src={product.imgUrl}/>
						<h3 className="font-semibold">{product.name}</h3>
						<span className="text-neutral-500">₦{product.price.toLocaleString()}</span>
					</li>
				))}
			</ul>
		</section>
		<section className="bg-neutral-800 py-8">
			<div className="w-[80vw] mx-auto flex justify-between text-white items-start">
	      <div>
	        <h2 className="text-lg font-bold mb-2">GENERAL</h2>
	        <ul>
	          <li><a href="">About Us</a></li>
	          <li><a href="">Contact Us</a></li>
	        </ul>
	      </div>
	      <div>
	        <h2 className="text-lg font-bold mb-2">CUSTOMER SERVICE</h2>
	        <ul>
	          <li><a href="">Privacy Policy</a></li>
	          <li><a href="">Terms of Service</a></li>
	        </ul>
	      </div>
	      <div>
	        <h2 className="text-lg font-bold mb-2">SOCIAL MEDIA</h2>
	        <ul>
	          <li><a href="">Instagram</a></li>
	          <li><a href="">X</a></li>
	          <li><a href="">Tiktok</a></li>
	          <li><a href="">Snapchat</a></li>
	        </ul>
	      </div>
	      <div>
	        <h2 className="text-lg font-bold mb-2">PRODUCTS</h2>
	        <ul>
	          <li><a href="">Jerseys</a></li>
	          <li><a href="">Tees</a></li>
	          <li><a href="">Joggers</a></li>
	          <li><a href="">Jeans</a></li>
	          <li><a href="">Caps</a></li>
	        </ul>
	      </div>
	    </div>
	    {/*<FullProductView/>*/}
    </section>
	</>)
}