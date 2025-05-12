export default async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new Map(document.querySelector(".contacts-info__map"), {
    center: { lat:  50.39627054219036, lng: 30.423752059048834 },
    zoom: 18,
    mapId: "c8ecfc9d72493c8ca13947b7",
    disableDefaultUI: true
  });

  const markerImgEl = document.createElement("img");
  
  markerImgEl.classList.add("contacts-info__map-marker");
  markerImgEl.src = "../images/contacts-page/location-marker.svg";

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 50.396011496569876, lng: 30.423789567537636 },
    content: markerImgEl,
  });
}