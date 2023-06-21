import { isValidAddress } from "@/shared/utils";
import axios from "axios";

export default async function getLocationByIp(ipAddress: string) {
    if (!isValidAddress(ipAddress)) {
        console.error("Invalid ip address provided.");
        return null;
    }

    try {
        const res = await axios.get(`https://ipapi.co/${ipAddress}/json`);
        return res.data;
    } catch (error) {
        console.error("Error occurred while fetching data.", error);
        throw error;
    }

    return null;
}