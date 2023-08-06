import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { LocationType, OfferType } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../conts';
import 'leaflet/dist/leaflet.css';
import { MapSection } from './map.styled';

type MapProps = {
  city: LocationType;
  points: OfferType[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, points }: MapProps) {
  let selectedPoint: OfferType | undefined;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.flyTo({ lat: city.lat, lng: city.lng }, 12);
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.name === selectedPoint.name
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <MapSection>
      <div style={{ height: '100%', minHeight: '400px' }} ref={mapRef} />
    </MapSection>
  );
}

export default Map;
