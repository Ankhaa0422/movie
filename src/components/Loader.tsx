import { isNullOrUndefined } from "@/utility"
import * as ReactDOMServer from 'react-dom/server';

function loaderBody () {
    return `<div id='film-loader' class="fixed w-screen h-screen left-0 top-0 z-[999999] flex items-center justify-center bg-[#1c1a27] backdrop-blur-md">
        <div class="camera__wrap">
            <div class="camera__body">
            <div class="camera__body-k7">
                <div class="tape">
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="center"></div>
                </div>
                <div class="tape">
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="roll"></div>
                <div class="center"></div>
                </div>
            </div>
            <div class="camera__body__stuff">
                <div class="camera__body__stuff-bat"></div>
                <div class="camera__body__stuff-pointer first"></div>
                <div class="camera__body__stuff-pointer"></div>
            </div>
            </div>
            <div class="camera__body-optic"></div>
            <div class="camera__body-light"></div>
        </div>
    </div>`
}

export const showLoader = (show:Boolean) => {
    const loader:any = document.getElementById('film-loader')
    if(show) {
        if(isNullOrUndefined(loader)) {
            document.body.insertAdjacentHTML('beforeend', loaderBody())
        }
    } else {
        if(!isNullOrUndefined(loader)) {
            document.body.removeChild(loader)
        }
    }
}