            var key = mapToken;

            var styleJson = 'https://tiles-staging.locationiq.com/v3/streets/vector.json?key=' + key;

            const map = new ol.Map({
                target: 'map',
                view: new ol.View({
                    center: ol.proj.fromLonLat(listing.geometry.coordinates),
                    zoom: 9
                })
            });

            olms.apply(map, styleJson);

const marker = new mapboxgl.Marker({color: "red"})
.setLngLat(coordinates)  //listing.geometry.coordinates
.setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
       `<h4>${listing.title}</h4><p>Exact Location will be provided after booking </p>`
    )
)
.adddTo(map);            

