export interface ProductData {
    id: string;
    name: string;
    imgData: {url: string, width: string; heigth: string}[];
    for: string[];
    color: string,
    description: string;
    price: number;
    sizes?: string[];
}
/**
 * TODO
 * 2. Fix Websites automatically changing the theme of my site cause they in dark theme
 * 3. Improve loading speed (Image delivery) or just make sure the page doesn't load until all fonts, images and other assets have been loaded
 * 5. Add Search functionality
 */

export type FILTER = "" | "MEN" | "WOMEN" | "WHITE" | "BLACK" | "GREY" | "RED"


export interface FilterButtonProps {
	value: FILTER;
	setFilter: (arg: FILTER)=>void;
	currentPageFilter: FILTER
}
