import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import StarIcon from "/src/images/star-icon.png"; // Make sure this image exists

// Static map store pins for demo
const mapStoreLocations = [
  {
    id: "Store001",
    name: "Store 001",
    position: { lat: 37.5483, lng: -77.4490 },
    contact: {
      phone: "(804) 555-1001",
      address: "1234 Main St, Richmond, VA",
    },
  },
  {
    id: "Store002",
    name: "Store 002",
    position: { lat: 37.5403, lng: -77.4730 },
    contact: {
      phone: "(804) 555-2002",
      address: "5678 Music Ln, Richmond, VA",
    },
  },
  {
    id: "Store003",
    name: "Store 003",
    position: { lat: 37.5206, lng: -77.4351 },
    contact: {
      phone: "(804) 555-3003",
      address: "9101 Rhythm Rd, Richmond, VA",
    },
  },
];

// Styling & initial map config
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 37.5407, lng: -77.4360 }; // Richmond, VA

export default function GoogleStoreSelector() {
  const [activeStore, setActiveStore] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
    >
      {mapStoreLocations.map((store) => (
        <Marker
          key={store.id}
          position={store.position}
          onClick={() => setActiveStore(store)}
          icon={{
            url: StarIcon,
            scaledSize: new google.maps.Size(40, 40),
          }}
        />
      ))}

      {activeStore && (
        <InfoWindow
          position={activeStore.position}
          onCloseClick={() => setActiveStore(null)}
        >
          <div style={{ maxWidth: "220px", fontFamily: "Roboto, sans-serif" }}>
            <h3 style={{ marginBottom: "6px" }}>{activeStore.name}</h3>
            <p style={{ margin: 0 }}>
              <strong>Contact:</strong><br />
              {activeStore.contact.phone}<br />
              {activeStore.contact.address}
            </p>
            <a
              href={`/my-schedule?store=${activeStore.id}&date=${new Date().toISOString().slice(0, 10)}`}
              style={{
                display: "inline-block",
                marginTop: "8px",
                color: "#1976d2",
                textDecoration: "underline",
              }}
            >
              View Store Schedule
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
