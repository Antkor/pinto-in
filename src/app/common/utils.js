import { Geolocation } from '@capacitor/geolocation';

/**
 * The methods below are used to caclulate distance between user and a certain location
 * as well as for geosorting locations
 */

export function getUserLocation() {
  const defaultLocation = {
    lat: 40.626545,
    long: 22.948604
  };

  return Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 6000,
    maximumAge: 3600000
  })
    .then(location => location.coords.latitude
        ? { lat: location.coords.latitude, long: location.coords.longitude }
        : defaultLocation
    ).catch(e => defaultLocation);
}

export function applyHaversine(locations, userLat, userLong) {
  let usersLocation = {
    lat: userLat,
    lng: userLong
  };

  locations.map(location => {
    let placeLocation = {
      lat: location.coordinates.lat,
      lng: location.coordinates.long
    };

    location.distance = getDistanceBetweenPoints(
      usersLocation,
      placeLocation,
      "km"
    ).toFixed(2);
  });

  return locations;
}

function getDistanceBetweenPoints(start, end, units) {
  let earthRadius = {
    miles: 3958.8,
    km: 6371
  };

  let R = earthRadius[units || "km"];
  let lat1 = start.lat;
  let lon1 = start.lng;
  let lat2 = end.lat;
  let lon2 = end.lng;

  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return d;
}

function toRad(x) {
  return (x * Math.PI) / 180;
}
