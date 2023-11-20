function TeamCardTwo({data}:{data:any}) {
    return <div className="card">
        <div className="rounded-full w-[150px] h-[150px] overflow-hidden">
            <img src={data.Image} alt="Alexandra Smith"/>
        </div>
        <h2>{data.Name}</h2>
        <p>{data.Position}</p>
    </div>
}

export default TeamCardTwo