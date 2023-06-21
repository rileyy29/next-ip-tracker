import getLocationByIp from "@/actions/getLocationByIp";
import { Fragment, useEffect, useState } from "react";
import AddressMap from "./AddressMap";
import MomentClock from "./MomentClock";
import Spinner from "./Spinner";
import moment from "moment";

type LocationResponse = {
    country: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
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
                                <div>Country: {location.country}</div>
                                <div>Region: {location.regionName}</div>
                                <div>City: {location.city}</div>
                                <div>ZIP: {location.zip}</div>
                                <div>Lon / Lat: {location.lon} / {location.lat}</div>
                                <div>Timezone: {location.timezone}</div>
                                <div><MomentClock timezone={location.timezone} /></div>
                            </div>
                            <div className={"w-70 h-60 min-w-0 bg-red-50 md:w-80"}>
                                <AddressMap coordinates={[location.lon!, location.lat!]} />
                            </div>
                        </div>
                        {!location?.isp ? null :
                            <div>
                                <div>ISP: {location.isp} {location?.org ? `(${location?.org})` : null}</div>
                                <span>[{location?.as}]</span>
                            </div>}
                    </div>
                    <div className={"text-xs text-end"}>Queried {location.query} on {moment(new Date()).format("DD/MM HH:mm")}</div>
                </div>}
        </div>
    )
}