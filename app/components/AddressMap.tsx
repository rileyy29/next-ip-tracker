import { Map } from "maplibre-gl";
import { useEffect, useRef } from "react";

export default function AddressMap({ coordinates }: { coordinates: [number, number]; }) {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mapKey = "dbd36d6024a1457ea482ad6b4ad637d3";
        const mapUrl = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

        if (!coordinates || !coordinates[0] || !coordinates[1]) {
            return;
        }

        const map = new Map({
            container: mapContainer.current!,
            style: `${mapUrl}?apiKey=${mapKey}`,
            center: coordinates,
            zoom: 10,
            attributionControl: false,
            interactive: false,
            maplibreLogo: false
        });

        return () => map.remove();
    }, [mapContainer.current, coordinates]);

    return <div className={"w-full h-full"} ref={mapContainer} />;
}