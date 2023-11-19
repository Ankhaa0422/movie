import Link from "next/link"
import { Icon } from "."
function Divider({text = '', href, hrefText}:{text:string, href?:string, hrefText?:string}) {
    return <div className="w-full h-fit flex items-center">
        <svg width="5%" height="5" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="wave-1" x="0" y="0" width="14" height="5" patternUnits="userSpaceOnUse">
                <path d="M0 1C3.80745 1 3.80745 3 7.6149 3C11.4223 3 11.4223 1 15.2298 1C19.0372 1 19.0372 3 22.8447" className="stroke-neutral-400" strokeWidth="1" fill="none"></path>
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="5" fill="url(#wave-1)"></rect>
        </svg>
        <span className="text-2xl whitespace-nowrap mx-4 font-bold">
            {text}
        </span>
        <svg width="100%" height="5" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="wave-1" x="0" y="0" width="14" height="5" patternUnits="userSpaceOnUse">
                <path d="M0 1C3.80745 1 3.80745 3 7.6149 3C11.4223 3 11.4223 1 15.2298 1C19.0372 1 19.0372 3 22.8447" className="stroke-neutral-400" strokeWidth="1" fill="none"></path>
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="5" fill="url(#wave-1)"></rect>
        </svg>
        {
            href && <Link href={href}>
                    <span className="text-[1.4rem] flex items-center mx-3">
                        {hrefText}
                        <Icon icon="bx:chevrons-right" size="1.4rem"/>
                    </span>
                </Link>
        }
    </div>
}
export default Divider