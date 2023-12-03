import Image from "next/image"
function TeamCardTwo({data}:{data:any}) {
    return <div className="teamCard">
        <div className="rounded-full w-[120px] h-[120px] overflow-hidden relative">
            <Image src={data.Image} fill style={{objectFit: 'cover'}} alt="Alexandra Smith"/>
        </div>
        <h2>{data.Name}</h2>
        <p>{data.Position}</p>
    </div>
}

export default TeamCardTwo