interface genProps {
    title: string,
    img: string
}

function Gen(props: genProps) {
    return (
        <>
            <div className="bg-slate-600 rounded-2xl pb-6 p-10 items-start flex flex-col justify-between h-70">
                <div className="w-70 rounded-2xl bg-white overflow-hidden">
                    <img src={props.img} className="w-full h-full object-cover" alt="" />
                </div>
                <h2>{props.title}</h2>
            </div>
        </>
    )
}

export default Gen