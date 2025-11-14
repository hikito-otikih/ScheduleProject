const map = L.map('map').setView([10.76, 106.66], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

function showRoute(coords) {
    L.polyline(coords, {color: 'blue'}).addTo(map);
}
