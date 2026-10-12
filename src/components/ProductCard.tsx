import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react"
import { type ProductData } from "../types"

`-translate-x-[100%] -translate-x-[200%] -translate-x-[300%] -translate-x-[400%] 
translate-x-[100%] translate-x-[200%] translate-x-[300%]translate-x-[400%]`

export default function ProductCard({ product, selectProduct, listStyling } : {product: ProductData, selectProduct: (arg: ProductData|null)=>void, listStyling: string}) {
    const [slidesMoved, setSlidesMoved] = useState(0);

    function moveSlidesRight() {
        setSlidesMoved(slidesMoved => slidesMoved + 1)
    }

    function moveSlidesLeft() {
        setSlidesMoved(slidesMoved => slidesMoved - 1)
    }
    return (
        <li className="cursor-pointer relative">
            <div className="relative cursor-pointer" role="button" tabIndex={0} aria-label="Open shirt details" onClick={()=>selectProduct(product)}>
                <ul className={listStyling}>
                    {product.imgUrls.map((url, i) => (
                        <li key={i} className={`bg-neutral-50 w-full h-full duration-300 shrink-0 ${slidesMoved < 0 ? "-" : ""}translate-x-[${100 * Math.abs(slidesMoved)}%]`}>
                            <img className="h-[90%] w-auto mx-auto block" src={url}/>
                        </li>
                    ))}
                </ul>
                <div className="w-full absolute bottom-1 flex justify-center gap-1">
                    {product.imgUrls.map((_url, i) => (
                        <button key={i} 
                            className={`${Math.abs(slidesMoved) === i ? "bg-black" : "bg-white"} border-[1px] border-white h-[8px] w-[8px] rounded-full`}>
                        </button>
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
