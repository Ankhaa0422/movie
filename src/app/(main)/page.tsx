'use client'
import zurag1 from '../../../public/images/zurag1.jpg'
import zurag2 from '../../../public/images/zurag2.png'
import zurag3 from '../../../public/images/zurag3.jpg'
import zurag4 from '../../../public/images/zurag4.jpg'
import { HomeSlider } from '@/components'
import { omdbApiCall } from '@/server-actions'

export default function Home() {

    const test = omdbApiCall('tt6587046')

    return (
        <main className={`relative h-fit select-none overflow-hidden text-white antialiased`}>
            <div className='max-h-screen min-h-screen h-screen relative'>
                <HomeSlider sliderData={sliderData} initData={initData} />
            </div>
            <div className='h-[300vh]'>

            </div>
        </main>
    );
}

const sliderData = [
  {
    img: zurag1.src,
    location: "Switzrerland Apls",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: zurag2.src,
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: zurag3.src,
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: zurag4.src,
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
];

const initData = sliderData[0];