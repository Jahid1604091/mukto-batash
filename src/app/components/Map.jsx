import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { RequestType, geocode, setDefaults } from "react-geocode";
import { config } from "@/app.config";

const containerStyle = {
  minWidth: "300px",
  height: "330px",
  margin: "10px 0",
  borderRadius: "20px",
};

setDefaults({
  key: config.GOOGLE_MAP_API_KEY, // Your API key here.
  language: "en", // Default language for responses.
});
function Map({
  markers,
  selectedMarker,
  setSelectedLocationId,
  setSelectedMarker,

}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState({
    lat: 23.77817600,
    lng: 90.37498300,
  });

  let infoWindow;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow?.setPosition(pos);
          infoWindow?.setContent("Location found.");
          infoWindow?.open(map);
          map?.setCenter(pos);
          setCenter(pos);

          // Get formatted address, city, state, country from latitude & longitude.
          geocode(RequestType.LATLNG, `${pos.lat},${pos.lng}`, {
            location_type: "ROOFTOP", // Override location type filter for this request.
            enable_address_descriptor: true, // Include address descriptor in response.
          })
            .then(({ results }) => {
              const address = results[0].formatted_address;
              const { city, state, country } =
                results[0].address_components.reduce((acc, component) => {
                  if (component.types.includes("locality"))
                    acc.city = component.long_name;
                  else if (
                    component.types.includes("administrative_area_level_1")
                  )
                    acc.state = component.long_name;
                  else if (component.types.includes("country"))
                    acc.country = component.long_name;
                  return acc;
                }, {});
            })
            .catch(console.error);
        },
        () => {
          handleLocationError(true, infoWindow, map?.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map?.getCenter());
    }
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setSelectedLocationId(marker.id);
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {markers?.map((marker) => {
        return (
          <div key={marker.id}>
            <Marker
              position={marker.coordinates}
              onClick={() => handleMarkerClick(marker)}
            />
          </div>
        );
      })}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker?.coordinates}
          onCloseClick={() => setSelectedMarker(selectedMarker)}
        >
          <>
            <p className="text-dark">{selectedMarker?.location}</p>
          </>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
