
export interface Data {
    img: string;
    title: string;
    description: string;
    location: string;
};
  
export interface CurrentSlideData {
    data: Data;
    index: number;
};

export interface Icon {
    color?:string,
    size?:string,
    className?:string,
    style?:object,
}