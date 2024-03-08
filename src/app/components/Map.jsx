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
  maxWidth: "400px",
  height: "330px",
  margin: "10px 0",
  borderRadius: "20px",
};

const init_center = {
  lat: 22.726385,
  lng: 60.421502,
};

setDefaults({
  key: config.GOOGLE_MAP_API_KEY, // Your API key here.
  language: "en", // Default language for responses.
  // region: "es", // Default region for responses.
});
function Map({markers,selectedMarker,setSelectedLocationId,setSelectedMarker}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.GOOGLE_MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState(init_center);
  // const [markers, setMarkers] = useState([
  //   {
  //     id: 58,
  //     location: "Motijheel",
  //     coordinates: {
  //       lat: 23.726385,
  //       lng: 90.421502,
  //     },
  //   },
  //   {
  //     id: 59,
  //     location: "Gulshan",
  //     coordinates: {
  //       lat: 23.794615,
  //       lng: 90.414194,
  //     },
  //   },
  //   {
  //     id: 60,
  //     location: "Malibagh",
  //     coordinates: {
  //       lat: 23.748,
  //       lng: 90.4122,
  //     },
  //   },
  // ]);
  // const [selectedMarker, setSelectedMarker] = useState("");
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
              console.log(city, state, country);
              console.log(address);
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

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

const handleMarkerClick = (marker) =>{
  setSelectedMarker(marker)
  setSelectedLocationId(marker.id)
}
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
        <InfoWindow position={selectedMarker?.coordinates} onCloseClick={() => setSelectedMarker("")} >
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
