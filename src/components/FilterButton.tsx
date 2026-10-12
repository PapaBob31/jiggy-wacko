import type { FilterButtonProps  } from "../types"

export default function FilterButton({value, setFilter, currentPageFilter} : FilterButtonProps) {
	return (
		<button 
			className={`border-2 ${currentPageFilter === value ? "border-black font-semibold" : "border-neutral-400 text-neutral-600"} 
				lg:px-4 lg:py-2 px-2 py-1 cursor-pointer rounded-sm lowercase`}
			onClick={()=>setFilter(value)}
		>
			{value}
		</button>
	)
}