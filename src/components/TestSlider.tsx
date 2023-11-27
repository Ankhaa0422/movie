/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import gsap from 'gsap'
import SliderCard from './home-slider/comps/SliderCard'
import { defaultZurgiinKhemjeegeerHeightBodyo } from '@/utility'
// import * as ReactDom from 'react-dom/server'
export default function TestSlider({data}:{data:any}) {
    // const [order, setOrder] = React.useState<any[]>(Array.from(Array(data.length).keys()))

    React.useEffect(() => {
        const _ = (id:string) => document.getElementById(id)!

        const cards = data.map((i:any, index:number)=>`<div class="card z-20" id="Poster${index}" style="background-image:url(${i.Poster})"  ></div>`).join('')
        const tests = data.map((i:any, index:number)=>`<div class="card z-10" id="card${index}" style="background-image:url(${i.Images[0]})"  ></div>`).join('')
        const cardContents = data.map((i:any, index:number)=>
            `<div class="card-content" id="card-content-${index}">
                <div class="content-start"></div>
                <div class="content-place">${i.Type}</div>
                <div class="content-title-1">${i.Title}</div>
            </div>`
        ).join('')

        const sildeNumbers = data.map((_:any, index:number)=>`<div class="item" id="slide-item-${index}" >${index+1}</div>`).join('')
        _('demo').innerHTML =  tests + cards

        const range = (n:any) => Array(n).fill(0).map((i, j) => i + j);
        const set = gsap.set;

        function getCard(index:number) {
            return `#card${index}`;
        }

        function getPoster(index:number) {
            return `#card${index}`;
        }

        function getCardContent(index:number) {
            return `#card-content-${index}`;
        }

        function getSliderItem(index:number) {
            return `#slide-item-${index}`;
        }

        function animate(target:any, duration:any, properties:any) {
            return new Promise((resolve) => {
                gsap.to(target, {
                ...properties,
                duration: duration,
                onComplete: resolve,
                });
            });
        }
        let detailsEven = true;
        let order:any[] = Array.from(Array(data.length).keys())
        let offsetTop = 200;
        let offsetLeft = 700;
        let cardWidth = 180;
        let cardHeight = defaultZurgiinKhemjeegeerHeightBodyo(180);
        let gap = 40;
        let numberSize = 50;
        const ease = "sine.inOut";
        function init() {
            const [active, ...rest] = order;
            const detailsActive = detailsEven ? "#details-even" : "#details-odd";
            const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
            const { innerHeight: height, innerWidth: width } = window;
            offsetTop = height - 300;
            offsetLeft = width - 500;

            gsap.set(getCard(active), {
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
            gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
            gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
            gsap.set(`${detailsInactive} .text`, { y: 100 });
            gsap.set(`${detailsInactive} .title-1`, { y: 100 });
            gsap.set(`${detailsInactive} .title-2`, { y: 100 });
            gsap.set(`${detailsInactive} .desc`, { y: 50 });
            gsap.set(`${detailsInactive} .cta`, { y: 60 });
            rest.forEach((i, index) => {
                gsap.set(getCard(i), {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                zIndex: 30,
                borderRadius: 10,
                });
                gsap.set(getCardContent(i), {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                zIndex: 40,
                y: offsetTop + cardHeight - 100,
                });
                gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
            });


            const startDelay = 0.6;

            gsap.to(".cover", {
                x: width + 400,
                delay: 0.5,
                ease,
                onComplete: () => {
                    setTimeout(() => {
                        loop();
                    }, 500);
                },
            });
            rest.forEach((i, index) => {
                gsap.to(getCard(i), {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 30,
                delay: 0.05 * index,
                ease,
                // delay: startDelay,
                });
                gsap.to(getCardContent(i), {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 40,
                delay: 0.05 * index,
                ease,
                // delay: startDelay,
                });
            });
            gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
            gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
        }

        let clicks = 0;

        function step() {
            return new Promise((resolve) => {
                    order.push(order.shift());
                    detailsEven = !detailsEven;

                    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
                    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

                    document.querySelector(`${detailsActive} .place-box .text`)!.textContent = data[order[0]].Type;
                    document.querySelector(`${detailsActive} .title-1`)!.textContent = data[order[0]].Title;
                    document.querySelector(`${detailsActive} .desc`)!.textContent = data[order[0]].Plot;

                    gsap.set(detailsActive, { zIndex: 22 });
                    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
                    gsap.to(`${detailsActive} .text`, {
                        y: 0,
                        delay: 0.1,
                        duration: 0.7,
                        ease,
                    });
                    gsap.to(`${detailsActive} .title-1`, {
                        y: 0,
                        delay: 0.15,
                        duration: 0.7,
                        ease,
                    });
                    gsap.to(`${detailsActive} .desc`, {
                        y: 0,
                        delay: 0.3,
                        duration: 0.4,
                        ease,
                    });
                    gsap.to(`${detailsActive} .cta`, {
                        y: 0,
                        delay: 0.35,
                        duration: 0.4,
                        onComplete: resolve,
                        ease,
                    });
                    gsap.set(detailsInactive, { zIndex: 12 });

                    const [active, ...rest] = order;
                    const prv = rest[rest.length - 1];

                    gsap.set(getCard(prv), { zIndex: 10 });
                    gsap.set(getCard(active), { zIndex: 20 });
                    gsap.to(getCard(prv), { scale: 1.5, ease });

                    gsap.to(getCardContent(active), {
                        y: offsetTop + cardHeight - 10,
                        opacity: 0,
                        duration: 0.3,
                        ease,
                    });
                    gsap.to(getSliderItem(active), { x: 0, ease });
                    gsap.to(getSliderItem(prv), { x: -numberSize, ease })

                    gsap.to(getCard(active), {
                        x: 0,
                        y: 0,
                        ease,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        borderRadius: 0,
                        onComplete: () => {
                            const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                            gsap.set(getCard(prv), {
                                x: xNew,
                                y: offsetTop,
                                width: cardWidth,
                                height: cardHeight,
                                zIndex: 30,
                                borderRadius: 10,
                                scale: 1,
                            });

                            gsap.set(getCardContent(prv), {
                                x: xNew,
                                y: offsetTop + cardHeight - 100,
                                opacity: 1,
                                zIndex: 40,
                            });
                            gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

                            gsap.set(detailsInactive, { opacity: 0 });
                            gsap.set(`${detailsInactive} .text`, { y: 100 });
                            gsap.set(`${detailsInactive} .title-1`, { y: 100 });
                            gsap.set(`${detailsInactive} .title-2`, { y: 100 });
                            gsap.set(`${detailsInactive} .desc`, { y: 50 });
                            gsap.set(`${detailsInactive} .cta`, { y: 60 });
                            clicks -= 1;
                            if (clicks > 0) {
                                step();
                            }
                        },
                    });

                    rest.forEach((i, index) => {
                    if (i !== prv) {
                        const xNew = offsetLeft + index * (cardWidth + gap);
                        gsap.set(getCard(i), { zIndex: 30 });
                        gsap.to(getCard(i), {
                            x: xNew,
                            y: offsetTop,
                            width: cardWidth,
                            height: cardHeight,
                            ease,
                            delay: 0.1 * (index + 1),
                        });

                        gsap.to(getCardContent(i), {
                            x: xNew,
                            y: offsetTop + cardHeight - 100,
                            opacity: 1,
                            zIndex: 40,
                            ease,
                            delay: 0.1 * (index + 1),
                        });
                        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
                    }
                });
            });
        }

        async function loop() {
            await animate(".indicator", 2, { x: 0 });
            await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
            set(".indicator", { x: -window.innerWidth });
            await step();
            loop();
        }

        async function loadImage(src:string) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
        }

        async function loadImages() {
        const promises = data.map((x:any) => loadImage(x.Images[0]));
        return Promise.all(promises);
        }

        async function start() {
        try {
            await loadImages();
            init();
        } catch (error) {
            console.error("One or more images failed to load", error);
        }
        }

        start()
    }, [data])

    return (
        <div className="w-screen h-screen overflow-hidden relative flex flex-row">
            <div className='absolute w-full h-full bg-black bg-opacity-50 z-[99]'></div>
            <div id="demo" className='relative flex flex-row'></div>
            <div className="details z-[100]" id="details-even">
                <div className="place-box">
                    <div className="text"></div>
                </div>
                <div className="title-box-1"><div className="title-1">{data[0].Title}</div></div>
                <div className="desc">
                    {data[0].Plot}
                </div>
                <div className="cta">
                    <button className="bookmark">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                    <button className="discover">Discover Location</button>
                </div>
            </div>

            <div className="details z-[100]" id="details-odd">
                <div className="place-box">
                    <div className="text"></div>
                </div>
                <div className="title-box-1"><div className="title-1"></div></div>
                <div className="desc">
                    {data[0].Plot}
                </div>
                <div className="cta">
                    <button className="bookmark">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                    <button className="discover">Discover Location</button>
                </div>
            </div>

            <div className="cover"></div>
        </div>
    )
}
