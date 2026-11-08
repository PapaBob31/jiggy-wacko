import { X } from "lucide-react";
import { useState } from "react"
import { type ProductData } from "../types"
import { Info } from "lucide-react"

export default function FullProductView({data, closeView} : {data: ProductData; closeView: ()=>void}) {
  const [mainDisplayUrl, setMainDisplayUrl] = useState(data.imgData[0].url)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [sizeError, setSizeError] = useState<boolean>(false)

  function messageVendorOnWhatsapp() {
    if (data.sizes && !selectedSize) {
      setSizeError(true)
      return;
    }

    const message = `Hello Jiggy, I would like to purchase a ${data.name}\n\nSize: ${selectedSize}\n\nQuantity: 1\n\nPrice: ₦${data.price.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${import.meta.env.VITE_VENDOR_PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  function chooseProductSize(size: string) {
    setSizeError(false)
    setSelectedSize(selectedSize === size ? "" : size)
  }

  return (
    <section className="fixed bg-black/50 inset-0 w-full z-50">
      <div
        className={`flex flex-col items-start justify-between sm:w-[35vw] sm:min-w-120 w-full sm:h-[95vh] h-full
        sm:mt-4 relative mx-auto sm:rounded-3xl overflow-y-auto bg-neutral-300`
      }>
        <button className="absolute top-4 left-4 bg-neutral-900/50 items-center flex justify-center p-2 rounded-full cursor-pointer"
          onClick={closeView}>
          <X size={20} className="text-white"/>
        </button>
        <img src={mainDisplayUrl} className="flex-1 min-h-50 self-center"/>
        <div className="flex items-center justify-center gap-2 pb-2 px-4 self-center flex-none">
          {data.imgData.map((data, i) => (
            <button key={i} className={`rounded-lg border-2 ${mainDisplayUrl === data.url ? "border-neutral-600" : "border-gray-200"} cursor-pointer bg-neutral-200`}
              onClick={()=>setMainDisplayUrl(data.url)}>
              <img src={data.url} className="w-30 rounded-lg"/>
            </button>
          ))}
        </div>
        <div className="bg-white w-full rounded-t-3xl flex-none p-4 min-h-[220px] flex justify-between flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{data.name}</h2>
            <b className="text-gray-700 font-medium">₦{data.price.toLocaleString()}</b>
          </div>
          <p className="sm:w-[80%] w-[90%] text-gray-800 my-2">
            {data.description}
          </p>
          {data.sizes && (<>
            <h3 className="font-semibold mb-2">Select Size</h3>
            <ul className="flex justify-start gap-2 mb-4">
              {data.sizes.map(size => (
                <li>
                  <button
                    onClick={() => chooseProductSize(size)}
                    className={`p-1 min-w-8 rounded-sm cursor-pointer border
                    ${ size === selectedSize ? "border-black font-semibold text-black" : "border-gray-400 text-gray-700"} shrink-0`}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </>)}
          {sizeError && <div className="text-red-600 mb-2 flex items-center gap-2"><Info size={18}/><span>You have to select a size first</span></div>}
          <button className="bg-black text-white rounded-3xl block w-full p-2" onClick={messageVendorOnWhatsapp}>Buy</button>
        </div>
      </div>
    </section>
  )
}
