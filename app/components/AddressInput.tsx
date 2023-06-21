import { useState } from "react";

export default function AddressInput({ onSubmit }: { onSubmit: (address: string) => void; }) {
    const [address, setAddress] = useState<string>("");

    return (
        <div className={"w-full p-5 flex items-center justify-center gap-2 bg-white shadow-sm rounded-xl"}>
            <input
                value={address}
                className={"bg-slate-50 border-slate-300 border-[1px] outline-none text-center rounded-md"}
                onChange={(val) => setAddress(val.currentTarget.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        onSubmit(address);
                    }
                }} />
            <button onClick={() => onSubmit(address)}>Track</button>
        </div>
    )
}