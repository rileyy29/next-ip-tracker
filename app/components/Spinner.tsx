export default function Spinner() {
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <div className={"animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-slate-600 rounded-full"} role={"status"} aria-label={"loading"} />
        </div>
    )
}