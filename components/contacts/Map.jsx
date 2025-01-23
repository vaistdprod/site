"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function Map() {
  const mapRef = useRef(null);

  async function loadMap() {
    if (window.google && mapRef.current) {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      const map = new Map(mapRef.current, {
        center: { lat: 49.83393862369578, lng: 18.29108796768538 },
        zoom: 16,
        mapId: "890139605fbb60ef",
      });

      const marker = new AdvancedMarkerElement({
        position: { lat: 49.83393862369578, lng: 18.29108796768538 },
        map,
        title: "TD Productions",
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-family: Plus Jakarta Sans;">
            <h6 class="mb-5 text-black">TD Productions</h6>
            <p class="text-black">28. října 205/45, 702 00 Ostrava</p>
          </div>
        `,
      });
      infoWindow.open({ anchor: marker, map });
    }
  }

  useEffect(() => {
    loadMap();
  }, []);

  return (
    <>
      <Script
        id="google-maps-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(g){
              var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",
                  m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),
                  r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{
                await(a=m.createElement("script"));
                e.set("libraries",[...r]+"");
                for(k in g)
                  e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);
                e.set("callback",c+".maps."+q);
                a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;
                d[q]=f;
                a.onerror=()=>h=n(Error(p+" could not load."));
                a.nonce=m.querySelector("script[nonce]")?.nonce||"";
                m.head.append(a);
              }));
              d[l]?console.warn(p+" only loads once. Ignoring:",g):
              d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))
            })({
              key: "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}",
              v: "weekly",
              language: "cs",
              region: "CZ"
            });
          `,
        }}
      />

      <div ref={mapRef} style={{ width: "100%", height: "600px" }} />
    </>
  );
}