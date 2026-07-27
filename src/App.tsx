import { ArrowUpRight } from "lucide-react"

function NavBar() {
  return (
    <nav className="fixed top-0 w-[80vw] left-[10vw] z-30 text-white pt-4 text-center font-medium flex items-center gap-16">
      <a href="Home">HOME</a>
      <a href="Jerseys">JERSEYS</a>
      <a href="Tees">TEES</a>
      <a href="Joggers">JOGGERS</a>
      <a href="Jeans">JEANS</a>
      <a href="Caps">CAPS</a>
    </nav>
  )
}

function JerseySection() {
  return  (
    <section className="w-[80vw] mx-auto">
      <h2 className="text-lg font-semibold">Stylish Jerseys</h2>
      <div className="flex items-start gap-2">
        <div className="w-[55vw] grow overflow-x-hidden">
          <div className="w-full h-[40vw] flex items-start">
            <img className="w-full h-full object-cover" src="/assets/jersey-4.jpg"/>
            <img className="w-full h-full object-cover" src="/assets/jersey-3-back.jpg"/>
          </div>
        </div>
        <div className="w-[28vw] h-[40vw] overflow-y-hidden flex flex-col gap-2">
          <img className="object-cover h-[50%]" src="/assets/jersey-1.jpg"/>
          <img className="object-cover h-[50%]" src="/assets/jersey-2.jpg"/>
        </div>
      </div>
    </section>
  )
}


function JoggersSection() {
  return (
    <section className="bg-gray-100 mt-10">
      <div className="w-[80vw] mx-auto flex justify-between gap-4 py-4 items-center">
        <img className="w-[40vw] h-[30vw] object-cover" src="/assets/joggers-1.jpg"/>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">JW Joggers</h2>
          <p className="min-w-100 w-[30vw] mb-2">Step out in comfort and style. Joggers that would do this and that.Very long paragraph about how good the joggers are</p>
           <button className="bg-black text-white p-4">Explore Collection</button>
        </div>
      </div>
    </section>
  )
}

function ModelsSection() {
  return (
    <section className="w-[80vw] mx-auto relative mt-10 pt-12">
      <h3 className="w-full text-center z-10 absolute top-0 text-gray-300 font-bold text-9xl tracking-[1rem]">JIGGY WACKO</h3>
      <div className="relative z-20 flex justify-between items-start">
        <img className="w-70 h-auto" src="/assets/model-7.png"/>
        {/*<img className="w-50 h-auto" src="/assets/model-2.webp"/>*/}
        <img className="w-70 h-auto" src="/assets/model-3.png"/>
        <img className="w-70 h-auto" src="/assets/model-4.png"/>
        <img className="w-70 h-auto" src="/assets/model-8.png"/>
        <img className="w-70 h-auto" src="/assets/model-6.png"/>
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
        <h1 className="text-white text-center text-5xl font-bold mb-4">EXPLORE OUR FASHION CATALOG</h1>
        <p className="text-gray-200 text-lg text-center mb-6">
          Browse through our fashion Catalog to find a wide range of stylish clothing options.<br/>
          From classic looks to the latest Trends, There's something for everyone.
        </p>
        <button className="text-center rounded-3xl border border-white flex gap-2 items-center w-fit mx-auto text-white p-2 backdrop-blur-sm font-medium mb-8">
          <span>SEE OUR INSTAGRAM</span> <ArrowUpRight size={20}/>
        </button>
        <div className="bg-white flex justify-between text-neutral-500 bg-white rounded-lg px-8 pt-8 pb-20">
          <div>
            <h2 className="text-lg font-bold mb-2 text-black">GENERAL</h2>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2 text-black">CUSTOMER SERVICE</h2>
            <ul>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2 text-black">SOCIAL MEDIA</h2>
            <ul>
              <li><a href="">Instagram</a></li>
              <li><a href="">X</a></li>
              <li><a href="">Tiktok</a></li>
              <li><a href="">Snapchat</a></li>
            </ul>
          </div>
          <div>
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
    {name: `JW SLICK 💋 WEARS`, price: "--", imgUrl: "/assets/vest-1.jpg"},
    {name: `JW Smiley head Tees`, price: "--", imgUrl: "/assets/smiley-tee.jpg"},
    {name: `JW Don't Care tees`, price: "--", imgUrl: "/assets/vest-1.jpg"},
    {name: `JW BLAC SLIM Joggers`, price: "--", imgUrl: "/assets/vest-1.jpg"},
    {name: `JW x RJ BLAC JERSEY`, price: "--", imgUrl: "/assets/joggers-1.jpg"},
    {name: `JW REAL SHI TEES`, price: "--", imgUrl: "/assets/vest-1.jpg"}
  ]

  return (<>
    <NavBar/>
    <div>
      <section className="bg-black h-screen relative mb-60">
        <div className="flex w-[80vw] h-full mx-auto items-center">
          <div className="w-[40%]">
            <h1 className="text-white text-4xl mb-2 font-semibold">StreetWear Clothing Brand</h1>
            <p className="text-neutral-300 text-lg">Bold, Edgy, rebellious, playful and urban. A mix of graffiti, 90s hip-hop and underground street culture.</p>
          </div>
          <img src="/assets/hero.jpg" className="w-[35%]"/>
        </div>
      </section>
      <div className="absolute -bottom-50 w-full">
        <h2 className="text-neutral-300 text-lg font-semibold w-[80vw] mx-auto mb-1">New Arrivals</h2>
        <ul className="grid grid-cols-6 w-[80vw] mx-auto gap-4">
          {newArrivals.map(cloth => (
            <li className="bg-neutral-400 p-2 rounded-lg h-80">
              <img src={cloth.imgUrl} className="rounded-lg w-full h-60 object-cover"/>
              <h3>{cloth.name}</h3>
              <p>{(typeof cloth) === "string" ? cloth.price : cloth.price.toLocaleString()}₦</p>
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

