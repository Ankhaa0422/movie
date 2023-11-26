import { Data } from '@/utility/interfaceAndTypes';
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: any[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((rowData, i) => {
        return <>
          {
            i !== 0 &&  <SliderCard key={i} data={rowData} />
          }
        </>
      })}
    </div>
  );
}

export default Slides;