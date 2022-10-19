import { MapPinIcon } from "@heroicons/react/24/solid";
import { getCenterOfBounds } from "geolib";
import { Fragment, useEffect, useRef, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";

export default function CustomeMap({ coors }) {
  const map = useRef();
  const [selectedPoint, setSelectedPoint] = useState(null);
  useEffect(() => {
    if (coors.length > 0) {
      console.log(coors);
      const center = getCenterOfBounds(
        coors.map((item) => ({
          latitude: item.latitude,
          longitude: item.longitude,
        }))
      );
      console.log(center);
      map.current.flyTo({
        center: [center.longitude, center.latitude],
      });
    }
  }, [coors]);

  return (
    <Fragment>
      <Map
        style={{
          width: "40vw",
          height: "80vh",
          position: "sticky",
          top: "10vh",
        }}
        mapStyle="mapbox://styles/dinhphuc2009/cl9e5ef6c000n14qr2h50c018"
        mapboxAccessToken="pk.eyJ1IjoiZGluaHBodWMyMDA5IiwiYSI6ImNsNXhwMXQ1MzB2dGczZGx0d2hpOWlwbXIifQ.PXUZNDGz0dY3qMIAtbfMgA"
        initialViewState={{
          zoom: 8,
        }}
        ref={map}
      >
        {coors?.map((item) => (
          <Marker {...item} color="red" anchor="bottom" key={Math.random()}>
            <MapPinIcon
              className="h-8 text-red-800 animate-bounce cursor-pointer "
              onClick={(e) => {
                console.log(item);
                e.stopPropagation();
                setSelectedPoint({
                  latitude: item.latitude,
                  longitude: item.longitude,
                  description: item.description,
                });
              }}
            />
          </Marker>
        ))}

        {selectedPoint && (
          <Popup
            anchor="bottom"
            latitude={selectedPoint.latitude}
            longitude={selectedPoint.longitude}
            className="z-50 p-5"
            onClose={() => {
              console.log("close");
              setSelectedPoint(null);
            }}
          >
            {selectedPoint.description}
          </Popup>
        )}

        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </Map>
    </Fragment>
  );
}
