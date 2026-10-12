import { type ProductData } from "../types"
import { useState } from "react"

export default function useProductFilters(products: ProductData[]) {
    const [filter, setFilter] = useState<"GREY"|"BLACK"|"RED"|"MEN"|"WOMEN"|"WHITE"|"">("")

    if (filter){
        const filteredProducts = products.filter(product => {
            if (product.color == filter || product.for.includes(filter))
                return product
        })
        return[filteredProducts, filter, setFilter]
    }
    return [products, filter, setFilter]
}