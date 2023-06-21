import "moment-timezone";
import { useEffect, useState } from "react";
import Moment from "react-moment";

export default function MomentClock({ timezone }: { timezone?: string; }) {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());

    useEffect(() => {
        const tick = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(tick);
    }, []);

    return <Moment date={""} format={"HH:mm:ss"} tz={timezone}>{currentTime}</Moment>;
}