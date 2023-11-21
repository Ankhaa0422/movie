import { Data } from '@/utility/interfaceAndTypes';
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: any[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data, i) => {
        return <SliderCard key={i} data={data} />;
      })}
    </div>
  );
}

export default Slides;