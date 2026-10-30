export interface ProductData {
    id: string;
    name: string;
    imgUrls: string[];
    for: string[];
    color: string,
    description: string;
    price: number;
    sizes?: string[]
}


export type FILTER = "" | "MEN" | "WOMEN" | "WHITE" | "BLACK" | "GREY" | "RED"


export interface FilterButtonProps {
	value: FILTER;
	setFilter: (arg: FILTER)=>void;
	currentPageFilter: FILTER
}