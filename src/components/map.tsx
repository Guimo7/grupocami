import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";

// Fix marker icons for Leaflet (especially if they don’t show in React)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// This fixes missing marker icons in many setups
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

export const Map = () => {
	const center: L.LatLngExpression = [13.685896, -89.229255];
	return (
		<MapContainer
			id="map"
			center={center}
			zoom={17}
			scrollWheelZoom={true}
			className="rounded-md"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={center}>
				<Popup>
					Colonia y avenida Las Mercedes, calle Los Duraznos #1, San Salvador
				</Popup>
			</Marker>
		</MapContainer>
	);
};
