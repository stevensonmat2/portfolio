var eqDataPoints;
var size = 10;
var magColor;
var zoomValue;
var qSize;
var circSize = 90000;
var feature;
var forMap;
var item;
var popup;
var scaleRatio = 1;
var radius;


window.addEventListener("wheel", zoomer);

function zoomer() {
    zoomValue = map.getView().getZoom();
    // console.log(zoomValue);
}


function colorScale() {
    magColor = Math.round(qSize);
    if (magColor === 1) {
        magColor = [34, 163, 15, 0.6];
        return magColor;
    }
    else if (magColor === 2) {
        magColor = [2, 242, 2, 0.6];
        return magColor;
    }
    else if (magColor === 3) {
        magColor = [242, 242, 2, 0.6];
        return magColor;
    }
    else if (magColor === 4) {
        magColor = [217, 192, 26, 0.6];
        return magColor;
    }
    else if (magColor === 5) {
        magColor = [217, 96, 26, 0.6];
        return magColor;
    }
    else if (magColor === 6) {
        magColor = [202, 40, 32, 0.6];
        return magColor;
    }
    else if (magColor === 7) {
        magColor = [19, 206, 209, 0.6];
        return magColor;
    }
    else if (magColor === 8) {
        magColor = [19, 111, 209, 0.6];
        return magColor;
    }
    else if (magColor === 9) {
        magColor = [22, 19, 209, 0.6];
        return magColor;
    }
    else if (magColor === 10) {
        magColor = [209, 19, 206, 0.6];
        return magColor;
    }

}


function getQuakeData() {
    $.ajax({
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
        type: 'GET',
        success: function (response) {
            console.log(response);
            eqDataPoints = [];
            for (var i = 0; i < response.features.length; i++) {
                qSize = response.features[i].properties.mag;
                colorScale(qSize);
                var t = new Date(response.features[i].properties.time);
                var styles = new ol.style.Style({
                    fill: new ol.style.Fill({color: 'rgba(' + magColor + ')'}),
                    stroke: new ol.style.Stroke({color: '#bada55', width: 1}),
                    setOpacity: .7
                });
                var lon = response.features[i].geometry.coordinates[0];
                var lat = response.features[i].geometry.coordinates[1];
                forMap = ol.proj.fromLonLat([lon, lat]);
                feature = new ol.geom.Circle(
                    forMap,
                    circSize
                    // 20000
                );
                if (response.features[i].properties.mag >= scaleRatio) {
                    item = new ol.Feature(feature);
                    item.setStyle(styles);
                    item.setProperties({
                        magnitude: response.features[i].properties.mag,
                        name: response.features[i].properties.place,
                        coords: ('[' + lon + ', ' + lat + ']'),
                        time: t
                    });
                    eqDataPoints.push(item);
                }
            }
            eqSource.clear()
            eqSource.addFeatures(eqDataPoints);


        }
    });

}


var map = new ol.Map({target: 'map', renderer: 'canvas'});
map.setView(new ol.View({
    center: [0, 0],
    zoom: 3
}));

var osmSource = new ol.source.OSM();
var osmLayer = new ol.layer.Tile({source: osmSource});
map.addLayer(osmLayer);

var eqSource = new ol.source.Vector({
    projection: "EPSG: 4326"
});

var eqLayer = new ol.layer.Vector({
    source: eqSource
});


map.addLayer(eqLayer);
map.getCurrentScale = function () {
    var map = this;
    var view = map.getView();
    var resolution = view.getResolution();
    var units = map.getView().getProjection().getUnits();
    var dpi = 25.4 / 0.28;
    var mpu = ol.proj.METERS_PER_UNIT[units];
    var scale = resolution * mpu * 39.37 * dpi;
    return scale;
};
map.getView().on('change:resolution', function (evt) {
    if (zoomValue >= 5) {
        var divScale = 250;// to adjusting
        radius = map.getCurrentScale() / divScale;

        for (var i = 0; i < eqDataPoints.length; i++) {
            eqDataPoints[i].getGeometry().setRadius(radius)
        }
    }
    else {
        var radius2 = 90000;

        for (var i = 0; i < eqDataPoints.length; i++) {
            eqDataPoints[i].getGeometry().setRadius(radius2)
        }
    }

});

// map.on('pointermove', function (evt) {
//     if (evt.dragging) {
//         return;
//     }
//     var pixel = map.getEventPixel(evt.originalEvent);
//     var hit = map.hasFeatureAtPixel(pixel);
//     if (hit) {
//
//         document.body.style.cursor = "pointer";
//     } else {
//         map.removeOverlay(popup);
//         document.body.style.cursor = "auto";
//     }
// });


var tooltip = document.getElementById('popupBox');
var tp1 = document.getElementById('tp1');
var tp2 = document.getElementById('tp2');
var tp3 = document.getElementById('tp3');
var tp4 = document.getElementById('tp4');
var overlay = new ol.Overlay({
    element: tooltip,
    offset: [15, 0],
    positioning: 'bottom'
});

map.addOverlay(overlay);

function displayTooltip(evt) {
    var pixel = evt.pixel;
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
        // console.log(feature);
        return feature;

    });
    tooltip.style.display = feature ? '' : 'none';
    if (feature) {
        overlay.setPosition(evt.coordinate);
        tp1.innerHTML = feature.get("name");
        tp2.innerHTML = ('Magnitude: ' + feature.get("magnitude"));
        tp3.innerHTML = feature.get("coords");
        tp4.innerHTML = feature.get("time");
        document.body.style.cursor = "pointer";
    } else {
        map.removeOverlay(popup);
        document.body.style.cursor = "auto";
    }
}

map.on('pointermove', displayTooltip);

var distance = document.getElementById('distance');
distance.addEventListener('input', function () {
    var divScale = 250;// to adjusting
    var newRadius = distance.value * 5000;

    for (var i = 0; i < eqDataPoints.length; i++) {
        eqDataPoints[i].getGeometry().setRadius(newRadius)
    }
});

// var distance = document.getElementById('distance');
// distance.addEventListener('input', function () {
//     console.log(radius)
//
//         var newRadius = (distance.value / 10) * radius;
//
//     for (var i = 0; i < eqDataPoints.length; i++) {
//
//         eqDataPoints[i].getGeometry().setRadius(newRadius)
//     }
// });

var intensity = document.getElementById('intensity');
intensity.addEventListener('input', function () {
    scaleRatio = (intensity.value / 44.5) + 1;
    console.log(scaleRatio);
    getQuakeData()
});

getQuakeData();

