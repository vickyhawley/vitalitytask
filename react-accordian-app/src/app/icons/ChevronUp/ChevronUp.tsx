



interface iChevronUp{
    stroke?: string;
    fill?: string;
    size?: number;
}
export function ChevronUp({stroke, fill, size}: iChevronUp){
    return(
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11.0001" r="10" transform="rotate(-179.562 11 11.0001)" fill="#F3F6F9"/>
<path d="M14.5 13.0001L11 9.15853L7.5 13.0001" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}