import getLocationByIp from "@/actions/getLocationByIp";
import moment from "moment";
import { useEffect, useState } from "react";
import AddressMap from "./AddressMap";
import MomentClock from "./MomentClock";
import Spinner from "./Spinner";

type LocationResponse = {
    country_name: string;
    region: string;
    city: string;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    org: string;
    asn: string;
    ip: string;
    network: string;
}

export default function AddressForm({ address }: { address: string; }) {
    const [location, setLocation] = useState<LocationResponse | null>(null);

    useEffect(() => {
        async function getData() {
            const res = await getLocationByIp(address);
            setLocation(res);
        }
        getData();
    }, [address]);

    return (
        <div className={"w-full p-5 bg-white shadow-sm rounded-xl"}>
            {!location ? <Spinner /> :
                <div className={"flex flex-col gap-5"}>
                    <div className={"flex flex-col min-w-0 gap-5"}>
                        <div className={"flex flex-col justify-between md:flex-row"}>
                            <div>
                                <div>Country: {location.country_name}</div>
                                <div>Region: {location.region}</div>
                                <div>City: {location.city}</div>
                                <div>Postal: {location.postal}</div>
                                <div>Lon, Lat: {location.longitude}, {location.latitude}</div>
                                <div>Timezone: {location.timezone}</div>
                                <div><MomentClock timezone={location.timezone} /></div>
                            </div>
                            <div className={"w-70 h-60 min-w-0 bg-red-50 md:w-80"}>
                                <AddressMap coordinates={[location.longitude!, location.latitude!]} />
                            </div>
                        </div>
                        {!location?.org ? null :
                            <div>
                                <div>ISP: {location?.org} - {location.network}</div>
                                <span>[{location?.asn}]</span>
                            </div>}
                    </div>
                    <div className={"text-xs text-end"}>Queried {location.ip} on {moment(new Date()).format("DD/MM HH:mm")}</div>
                </div>}
        </div>
    )
}