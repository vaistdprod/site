'use client';
import React, { useRef } from 'react';
import Script from 'next/script';

export default function Map() {
  const mapRef = useRef(null);

  function initMap() {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 49.83393862369578, lng: 18.29108796768538 },
        zoom: 16,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 49.83393862369578, lng: 18.29108796768538 },
        map,
        title: 'TD Productions',
      });

      const contentString = `
        <div style="font-family: Plus Jakarta Sans;">
          <h6 class="mb-5 text-black">TD Productions</h6>
          <p class="text-black">28. října 205/45, 702 00 Ostrava</p>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: contentString,
      });

      infoWindow.open(map, marker);
    }
  }

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div style={{ width: '100%', height: '600px' }} ref={mapRef} />
    </>
  );
}