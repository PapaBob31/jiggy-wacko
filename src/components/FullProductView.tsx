import { X } from "lucide-react";
import { useState } from "react"
import { type ProductData } from "../types"

export default function FullProductView({data, closeView} : {data: ProductData; closeView: ()=>void}) {
    const [mainDisplayUrl, setMainDisplayUrl] = useState(data.imgUrls[0])

    return (
        <section className="fixed bg-black/50 inset-0 w-full z-50">
            <div 
                className={`flex flex-col items-start justify-between sm:w-[35vw] sm:min-w-120 w-full sm:h-[95vh] h-screen 
                sm:mt-4 relative mx-auto sm:rounded-3xl overflow-y-auto bg-neutral-300`
            }>
                <button className="absolute top-4 left-4 bg-neutral-900/50 items-center flex justify-center p-2 rounded-full cursor-pointer"
                    onClick={closeView}>
                    <X size={20} className="text-white"/>
                </button>
                <img src={mainDisplayUrl} className="flex-1 min-h-50 self-center"/>
                <div className="flex items-center justify-center gap-2 pb-2 self-center flex-none">
                    {data.imgUrls.map((url, i) => (
                        <button key={i} className={`rounded-lg border-2 ${mainDisplayUrl === url ? "border-neutral-600" : "border-gray-200"} cursor-pointer bg-neutral-200`} 
                            onClick={()=>setMainDisplayUrl(url)}>
                            <img src={url} className="w-30 rounded-lg"/>
                        </button>
                    ))}
                </div>
                <div className="bg-white w-full rounded-t-3xl flex-none p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Jersey 1</h2>
                        <b className="text-gray-700 font-medium">₦20,000</b>
                    </div>
                    <p className="sm:w-[80%] w-[90%] text-gray-800 my-2">
                        {data.description}
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
        </section>
    )
}