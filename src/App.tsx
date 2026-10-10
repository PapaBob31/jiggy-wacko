import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

function JerseySection() {
  const [slidesMoved, setSlidesMoved] = useState(0);

	function moveSlidesRight() {
		setSlidesMoved(slidesMoved => slidesMoved + 1)
	}

	function moveSlidesLeft() {
		setSlidesMoved(slidesMoved => slidesMoved - 1)
	}
	
  return  (
    <section className="w-[80vw] mx-auto">
      <h2 className="text-lg font-semibold">Stylish Jerseys</h2>
      <div className="flex md:flex-row flex-col items-start gap-2">
        <div className="md:w-[55vw] grow overflow-x-hidden">
          <div className="w-full md:h-[40vw] flex items-start relative">
            <img className={`w-full h-full object-cover shrink-0 bg-neutral-300 ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}`} 
              src="/assets/home-red-jersey-front.png"/>
            <img className={`w-full h-full object-cover shrink-0 bg-neutral-300 ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}`}
              src="/assets/home-red-jersey-back.png"/>
            <button onClick={moveSlidesRight} disabled={slidesMoved == 0} className="absolute top-[45%] left-2 p-1 cursor-pointer">
              <ChevronLeft className="text-black" size={18}/>
            </button>
            <button onClick={moveSlidesLeft} disabled={slidesMoved == -1} className="absolute top-[45%] right-2 p-1 cursor-pointer">
              <ChevronRight className="text-black" size={18}/>
            </button>
          </div>
        </div>
        <div className="md:w-[28vw] md:h-[40vw] w-full overflow-y-hidden flex md:flex-col gap-2">
          <div className="p-4 h-[50%] bg-neutral-300">
            <img className="object-cover h-full w-full" src="/assets/home-black-jersey.png"/>
          </div>
          <div className="p-4 h-[50%] bg-neutral-300">
            <img className="object-cover h-full w-full" src="/assets/home-black-jersey-2.png"/>
          </div>
        </div>
      </div>
    </section>
  )
}


function JoggersSection() {
  return (
    <section className="bg-gray-100 mt-10 p-px">
      <div className="md:w-[80vw] md:mx-auto md:flex justify-between gap-4 py-8 items-center">
        <img className="md:w-[40vw] w-[60vw] md:mx-0 mx-auto md:h-[30vw] object-cover" src="/assets/black-joggers.png"/>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">JW Joggers</h2>
          <p className="md:min-w-100 md:w-[30vw] mb-2 md:px-0 px-6 ">
            Step out in comfort and style. Joggers that would do this and that.Very long paragraph about how good the joggers are
          </p>
          <button className="bg-black text-white p-4">Explore Collection</button>
        </div>
      </div>
    </section>
  )
}

function ModelsSection() {
  return (
    <section className="w-[80vw] mx-auto relative mt-10 pt-12">
      <h3 className="font-stanlinist w-full text-center z-10 absolute top-6 text-gray-400 md:text-8xl sm:text-7xl max-sm:text-5xl">JIGGY WACKO</h3>
      <div className="relative z-20 flex justify-between items-start mt-20">
        <img className="xl:w-60 w-35 h-auto sm:block hidden" src="/assets/model-1.png"/>
        {/*<img className="w-50 h-auto" src="/assets/model-2.webp"/>*/}
        <img className="xl:w-60 w-35 h-auto md:block hidden" src="/assets/model-8.png"/>
        {/* <img className="xl:w-70 w-50 h-auto" src="/assets/model-3.png"/> */}
        <img className="xl:w-60 w-35 h-auto" src="/assets/model-4.png"/>
        <img className="xl:w-60 w-35 h-auto md:block hidden" src="/assets/model-8.png"/>
        <img className="xl:w-60 w-35 h-auto" src="/assets/model-6.png"/>
      </div>
    </section>
  )
}

function Catalog() {
  return (
    <section className="relative">
      <img className="w-full h-full object-cover absolute inset-0 z-10" src="/assets/clothes.jpg"/>
      <div className="bg-neutral-700/50 absolute inset-0 z-10"/>
      <div className="w-[80vw] mx-auto relative z-20 py-8">
        <h1 className="text-white text-center sm:text-5xl text-3xl font-bold mb-4">EXPLORE OUR FASHION CATALOG</h1>
        <p className="text-gray-300 sm:text-lg text-center mb-6">
          Browse through our fashion Catalog to find a wide range of stylish clothing options.<br/>
          From classic looks to the latest Trends, There's something for everyone.
        </p>
        <button className="text-center rounded-3xl border border-white flex gap-2 items-center w-fit mx-auto text-white p-2 backdrop-blur-sm font-medium mb-8">
          <span>SEE OUR INSTAGRAM</span> <ArrowUpRight size={20}/>
        </button>
        <div className="bg-white flex sm:flex-nowrap flex-wrap sm:justify-between gap-4 text-neutral-500 bg-white rounded-lg px-8 pt-8 pb-20">
          <div className="max-sm:w-[40%] shrink-0">
            <h2 className="md:text-lg font-bold mb-2 text-black">GENERAL</h2>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="max-sm:w-[40%] shrink-0">
            <h2 className="md:text-lg font-bold mb-2 text-black">CUSTOMER SERVICE</h2>
            <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
          <div className="max-sm:w-[40%] shrink-0">
            <h2 className="md:text-lg font-bold mb-2 text-black">SOCIAL MEDIA</h2>
            <ul>
              <li><a href="">Instagram</a></li>
              <li><a href="">X</a></li>
              <li><a href="">Tiktok</a></li>
              <li><a href="">Snapchat</a></li>
            </ul>
          </div>
          <div className="max-sm:w-[40%] shrink-0">
            <h2 className="text-lg font-bold mb-2 text-black">PRODUCTS</h2>
            <ul>
              <li><a href="">Jerseys</a></li>
              <li><a href="">Tees</a></li>
              <li><a href="">Joggers</a></li>
              <li><a href="">Jeans</a></li>
              <li><a href="">Caps</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  const newArrivals = [
    {name: `JW SLICK 💋 WEARS`, price: 20000, imgUrl: "/assets/vest-1.jpg"},
    {name: `JW Smiley head Tees`, price: 20000, imgUrl: "/assets/smiley-tee.jpg"},
    {name: `JW Don't Care tees`, price: 20000, imgUrl: "/assets/jw-dc-tees.jpg"},
    {name: `JW BLAC SLIM Joggers`, price: 20000, imgUrl: "/assets/black-joggers.jpg"},
    {name: `JW x RJ BLAC JERSEY`, price: 20000, imgUrl: "/assets/jersey-8.jpg"},
    {name: `JW REAL SHI TEES`, price: 20000, imgUrl: "/assets/real-shi-tee.jpg"}
  ]

  return (<>
    <div>
      <section className="bg-black h-screen relative mb-60 p-px">
        <div className="flex xl:flex-row flex-col w-[80vw] h-full mx-auto items-center mt-30 gap-4">
          <div className="xl:w-[40%] xl:order-1 order-2 xl:text-left text-center sm:w-150">
            <h1 className="text-white text-4xl mb-2 font-semibold">StreetWear Clothing Brand</h1>
            <p className="text-neutral-300 text-lg">Bold, Edgy, rebellious, playful and urban. A mix of graffiti, 90s hip-hop and underground street culture.</p>
          </div>
          <img src="/assets/hero.jpg" className="xl:w-[35%] w-[50%] xl:order-2 order-1"/>
        </div>
      </section>
      <div className="absolute -bottom-50 w-full">
        <h2 className="text-neutral-300 text-lg font-semibold w-[80vw] mx-auto mb-1">New Arrivals</h2>
        {/* <ul className="grid grid-cols-6 w-[80vw] mx-auto gap-4 overflow-x-auto"> */}
        <ul className="flex items-start w-[80vw] mx-auto gap-4 overflow-x-auto h-fit">
        {newArrivals.map(cloth => (
            <li className="bg-linear-to-b w-50 shrink-0 from-neutral-400 to-neutral-100 p-2 rounded-lg h-70 hover:shadow-gray-400 hover:shadow-sm cursor-pointer">
              <div className="overflow-hidden w-full rounded-lg">
                <img src={cloth.imgUrl} className="block hover:scale-125 duration-300 w-full h-50 object-cover"/>
              </div>
              <h3 className="uppercase font-caveat font-bold mt-2">{cloth.name}</h3>
              <p className="text-gray-500 font-medium">₦{(typeof cloth) === "string" ? cloth.price : cloth.price.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <JerseySection/>
    <JoggersSection/>
    <ModelsSection/>
    <Catalog/>
  </>)
}

