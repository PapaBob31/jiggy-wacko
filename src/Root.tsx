import { Outlet } from "react-router"
import { Search, Menu, X } from "lucide-react";
import { useState } from "react"

function Header() {
    const [smScreenMenuVisible, setSmScreenMenuVisible] = useState(false)
    
    return (
        <header className="w-screen sm:px-10 px-5 flex sm:gap-20 gap-5 items-center bg-black fixed top-0 py-2 text-white z-30">
            <a href=""><img src="/assets/logo.png" className="w-12"/></a>
            <div className="grow focus-within:bg-neutral-800 p-1 outline-1 outline-gray-500 rounded-2xl flex gap-2 items-center">
                <Search size={20}/>
                <input type="text" placeholder="search wears..." className="outline-none w-full"/>
            </div>
            <div className={`top-0 right-0 ${ smScreenMenuVisible ? "translate-x-0 backdrop-blur-sm" : "max-xl:translate-x-full" }
                    duration-300 fixed xl:static xl:flex gap-8 font-semibold xl:w-fit w-screen bg-transparent xl:h-fit h-screen`}>
                <nav className={`top-0 right-0 x:py-0 py-4 absolute xl:static xl:flex gap-8 font-semibold xl:w-full w-[70vw] bg-black h-full`}>
                    <div className="flex justify-end items-start xl:hidden block">
                        <button className="block cursor-pointer p-2 hover:bg-neutral-800" onClick={() => setSmScreenMenuVisible(false)}>
                            <X color="white" size={20} strokeWidth="4"/>
                        </button>
                    </div>
                    <a href="/" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">HOME</a>
                    <a href="/jerseys" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">JERSEYS</a>
                    <a href="/shirts" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">SHIRTS</a>
                    <a href="/joggers" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">JOGGERS</a>
                    <a href="/jeans" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">JEANS</a>
                    <a href="/caps" className="block xl:p-0 p-2 mb-2 hover:bg-neutral-800">CAPS</a>
                </nav>
            </div>
            <button className="xl:hidden block cursor-pointer" onClick={() => setSmScreenMenuVisible(true)}>
                <Menu color="white" size={20}/>
            </button>
        </header>
  )
}
export default function Root() {
    return (<>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>)
}