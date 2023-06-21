"use client";

import { isValidAddress } from "@/shared/utils";
import { useState } from "react";
import AddressForm from "./AddressForm";
import AddressInput from "./AddressInput";

export default function AddressUI() {
    const [selectedAddress, setSelectedAddress] = useState<string>("");

    return (
        <div className={"w-full h-full max-w-2xl flex flex-col items-center gap-2"}>
            <AddressInput onSubmit={(address) => setSelectedAddress(address.trim())} />
            {isValidAddress(selectedAddress) ? <AddressForm address={selectedAddress} /> : null}
        </div>
    )
}