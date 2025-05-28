

interface iChevronDown{
    stroke: string;
    fill: string;
    size?: number;
}
export function ChevronDown({stroke, fill, size}: iChevronDown){
    return(
        <svg width={size} height={size} viewBox={`0 0 20 20`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill={fill}/>
        <path d="M6.5 8L10 11.8416L13.5 8" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}