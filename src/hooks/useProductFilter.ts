import type { ProductData, FILTER } from "../types"
import { useState } from "react"

export default function useProductFilters(products: ProductData[]) {
    const [filter, setFilter] = useState<FILTER>("")

    function updateFilter(selectedFilter: FILTER) {
        if (selectedFilter === filter) {
            setFilter("")
        }else setFilter(selectedFilter)
    }

    if (filter){
        const filteredProducts = products.filter(product => {
            if (product.color == filter || product.for.includes(filter))
                return product
        })
        return[filteredProducts, filter, updateFilter]
    }

    return [products, filter, updateFilter]
}