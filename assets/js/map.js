var map = L.map('mapId', {
    center: [40.75, -74.2],
    zoom: 13
});

var svgURL = '/assets/images/test_map.svg',
    svgBounds = [
        [40.712216, -74.22655],
        [40.773941, -74.12544]
    ];

L.imageOverlay(svgURL, svgBounds).addTo(map);
