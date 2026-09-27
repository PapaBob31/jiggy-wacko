import { Outlet } from "react-router"
import { Search } from "lucide-react";

function NavBar() {
  return (
    <div className="w-full px-10 flex gap-20 items-center bg-black fixed top-0 py-2 text-white z-30">
        <a href=""><img src="/assets/logo.png" className="w-12"/></a>
        <div className="grow focus-within:bg-neutral-800 p-1 outline-1 outline-gray-500 rounded-2xl flex gap-2 items-center">
            <Search size={20}/>
            <input type="text" placeholder="search Jerseys..." className="outline-none w-full"/>
        </div>
        <nav className="flex gap-8 font-semibold">
            <a href="/">HOME</a>
            <a href="/jerseys">JERSEYS</a>
            <a href="/shirts">SHIRTS</a>
            <a href="/joggers">JOGGERS</a>
            <a href="/jeans">JEANS</a>
            <a href="/caps">CAPS</a>
        </nav>
    </div>
  )
}
export default function Root() {
    return (<>
        <NavBar/>
        <Outlet/>
    </>)
}