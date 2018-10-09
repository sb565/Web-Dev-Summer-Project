var map;
var infoWindow = new google.maps.InfoWindow();

function initialise() {

    var mapProp = {
        center: new google.maps.LatLng(30.760618, 76.765388), 
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    var json1 = {
            "features": [
            { "Name": "FRESH BITE UILS", "description": null, "coordinates": [ 76.766722000000101, 30.766163, 0.0 ]  },
            { "Name": "Boys Hostel No 7 Mess\n", "description": null, "coordinates": [ 76.7661577, 30.7653331, 0.0 ]  },
            { "Name": "Night Food Street", "description": null, "coordinates": [ 76.773092599999899, 30.7621888, 0.0 ]  },
            { "Name": "Raj Eatery", "description": null, "coordinates": [ 76.7696754, 30.7620741, 0.0 ] },
            { "Name": "South Indian PU", "description": null, "coordinates": [ 76.7692905, 30.7622032, 0.0 ] } ,
            { "Name": "Staff Parking Stu- C, PU", "description": null, "coordinates": [ 76.7704013, 30.7630767, 0.0 ] } ,
            { "Name": "Boys Hostel No 6 Mess\n", "description": null, "coordinates": [ 76.7646021, 30.7640424, 0.0 ] } ,
            { "Name": "FRESH BITE STU-C", "description": null, "coordinates": [ 76.769985, 30.762261, 0.0 ] } ,
            { "Name": "Nescafe", "description": null, "coordinates": [ 76.7694099, 30.7622732, 0.0 ] } ,
            { "Name": "Student Centre (Stu C)", "description": null, "coordinates": [ 76.7699028, 30.7622781, 0.0 ] } ,
            { "Name": "Nescafe, PU library", "description": null, "coordinates": [ 76.7703963, 30.7616019, 0.0 ] } ,
            { "Name": "Geography & Geology Department Canteen", "description": null, "coordinates": [ 76.766925200000102, 30.7605628, 0.0 ] } ,
            { "Name": "Canteen Physics Department", "description": null, "coordinates": [ 76.7675203, 30.7599053, 0.0 ] } ,
            { "Name": "Chemistry Canteen", "description": null, "coordinates": [ 76.7681771, 30.7591455, 0.0 ] } ,
            { "Name": "Krishna Tea Stall", "description": null, "coordinates": [ 76.7680648, 30.7574944, 0.0 ] } ,
            { "Name": "Kailash Tea Stall", "description": null, "coordinates": [ 76.7676379, 30.7572388, 0.0 ] } ,
            { "Name": "Kt's Veg Food Plaza", "description": null, "coordinates": [ 76.7675866, 30.7557676, 0.0 ] } ,
            { "Name": "nicky ekta chat bhandar", "description": null, "coordinates": [ 76.768739, 30.756269, 0.0 ] } ,
            { "Name": "Punjab Sweets", "description": null, "coordinates": [ 76.7672668, 30.7562194, 0.0 ] } ,
            { "Name": "Kwality Chandigarh", "description": null, "coordinates": [ 76.7679935, 30.7556489, 0.0 ] } ,
            { "Name": "Sehgal Confectioners", "description": null, "coordinates": [ 76.7678954, 30.7552156, 0.0 ] } ,
            { "Name": "Boys Hostel No 1 Mess\n", "description": "Meher Chand Mahajan", "coordinates": [ 76.7733595, 30.7599145, 0.0 ] } ,
            { "Name": "Boys Hostel No 2 Mess\n", "description": "GC Chaterjee Hall", "coordinates": [ 76.7729343, 30.7580444, 0.0 ] } ,
            { "Name": "Boys Hostel No 3 Mess\n", "description": null, "coordinates": [ 76.7709374, 30.7585754, 0.0 ] } ,
            { "Name": "Girls Hostel No 1 Mess\n", "description": null, "coordinates": [ 76.7690438, 30.7558417, 0.0 ] } ,
            { "Name": "Girls Hostel No 2 Mess\n", "description": null, "coordinates": [ 76.7698002, 30.7565355, 0.0 ] } ,
            { "Name": "Girls Hostel No 8 Mess\n", "description": "Florence Nightingale Hostel", "coordinates": [ 76.7570838, 30.7521122, 0.0 ] } ,
            { "Name": "Girls Hostel No 9 Mess\n", "description": "Amrita Pritam Hostel", "coordinates": [ 76.7567432, 30.7519923, 0.0 ] } ,
            { "Name": "International Students Hostel Mess\n", "description": null, "coordinates": [ 76.7582694, 30.7530619, 0.0 ] } ,
            { "Name": "UIET Canteen", "description": null, "coordinates": [ 76.7567145, 30.7491585, 0.0 ] } ,
            { "Name": "Baba Tandoor Wala", "description": null, "coordinates": [ 76.7659163000001, 30.7536871, 0.0 ] } ,
            { "Name": "FRESH BITE CAFE UIAMS", "description": null, "coordinates": [ 76.7628945, 30.7533644, 0.0 ] } ,
            { "Name": "Boys Hostel No 8 Mess\n", "description": null, "coordinates": [ 76.7590338, 30.7492908, 0.0 ] } ,
            { "Name": "Boys Hostel No 5 Mess\n", "description": null, "coordinates": [ 76.7659459, 30.7627345, 0.0 ] } ,
            { "Name": "Boys Hostel No 4 Mess\n", "description": "Patel Hall", "coordinates": [ 76.7674774, 30.7633695, 0.0 ] } ,
            { "Name": "Law Canteen", "description": null, "coordinates": [ 76.7711889, 30.7641554, 0.0 ] } ,
            { "Name": "Verka Milk Bar", "description": null, "coordinates": [ 76.767634600000093, 30.7558247, 0.0 ] } ,
            { "Name": "University Sweets", "description": null, "coordinates": [ 76.767254099999903, 30.7562609, 0.0 ] } 
            ]
    };
    
    $.each(json1.features, function (key, data) {

        var latLng = new google.maps.LatLng(data.coordinates[1], data.coordinates[0]);

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.Name
        });

        var details = data.Name;

        bindInfoWindow(marker, map, infoWindow, details);
    });

}

function bindInfoWindow(marker, map, infoWindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
        
    });
}

google.maps.event.addDomListener(window, 'load', initialise);
