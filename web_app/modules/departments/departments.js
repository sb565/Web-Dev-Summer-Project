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
                { "Name": "Panjab University", "description": null, "coordinates": [ 76.766302799999906, 30.7600747, 0.0 ] } ,
                { "Name": "University Institute of Engineering & Technology", "description": null, "coordinates": [ 76.7567553, 30.7489594, 0.0 ] } ,
                { "Name": "Dr. Harvansh Singh Judge Institute of Dental Sciences & Hospital", "description": null, "coordinates": [ 76.7541679, 30.7470093, 0.0 ] } ,
                { "Name": "Department Of Biochemistry, BMS Block 2, Panjab University South Campus", "description": null, "coordinates": [ 76.7559887, 30.7473522, 0.0 ] } ,
                { "Name": "Department Of Microbiology, Panjab University", "description": null, "coordinates": [ 76.755486900000093, 30.7479901, 0.0 ] } ,
                { "Name": "UIET Block-2", "description": null, "coordinates": [ 76.7569202, 30.7487007, 0.0 ] } ,
                { "Name": "University Institute of Applied Management Sciences (UIAMS)", "description": null, "coordinates": [ 76.762459, 30.7531593, 0.0 ] } ,
                { "Name": "Centre For Nuclear Medicine, Panjab University", "description": null, "coordinates": [ 76.7605234, 30.7508127, 0.0 ] } ,
                { "Name": "Dayanand Chair for Vedic Studies", "description": null, "coordinates": [ 76.766702200000097, 30.7569919, 0.0 ] } ,
                { "Name": "Dr. S.S. Bhatnagar University Institute of Chemical Engineering and Technology", "description": null, "coordinates": [ 76.7700285, 30.760202, 0.0 ] } ,
                { "Name": "Department of Zoology", "description": null, "coordinates": [ 76.767002, 30.7616008, 0.0 ] } ,
                { "Name": "Department of Mathematics", "description": null, "coordinates": [ 76.769022700000093, 30.761207, 0.0 ] } ,
                { "Name": "Department of Computer Science and Applications", "description": null, "coordinates": [ 76.768464, 30.761631, 0.0 ] } ,
                { "Name": "Geography Department", "description": null, "coordinates": [ 76.767056599999904, 30.7608762, 0.0 ] } ,
                { "Name": "Indian Institute of Chemical Engineers IIChE", "description": null, "coordinates": [ 76.767354099999906, 30.7602764, 0.0 ] } ,
                { "Name": "Department of Physics", "description": null, "coordinates": [ 76.7678723, 30.7600819, 0.0 ] } ,
                { "Name": "Forensic Department", "description": null, "coordinates": [ 76.769029699999905, 30.7656114, 0.0 ] } ,
                { "Name": "Department Of Youth Welfare", "description": null, "coordinates": [ 76.7676078, 30.7657866, 0.0 ] } ,
                { "Name": "School of Communication Studies", "description": null, "coordinates": [ 76.7709713, 30.764056, 0.0 ] } ,
                { "Name": "Dr. Bhim Rao Ambedkar Hall Department of Laws", "description": null, "coordinates": [ 76.7705502, 30.7642628, 0.0 ] } ,
                { "Name": "University Business School", "description": null, "coordinates": [ 76.771433, 30.7629182, 0.0 ] } ,
                { "Name": "Department of Defense & National Security Studies", "description": null, "coordinates": [ 76.771879599999906, 30.7630361, 0.0 ] } ,
                { "Name": "Department of German", "description": null, "coordinates": [ 76.773140199999901, 30.7614893, 0.0 ] } ,
                { "Name": "Panjab University : French Department", "description": null, "coordinates": [ 76.7730577, 30.7614763, 0.0 ] } ,
                { "Name": "Department of French and Francophone Studies", "description": null, "coordinates": [ 76.7731133, 30.7615229, 0.0 ] } ,
                { "Name": "Arts Block-2", "description": null, "coordinates": [ 76.772611099999907, 30.761604, 0.0 ] } ,
                { "Name": "UIHTM", "description": null, "coordinates": [ 76.7636281, 30.7606743, 0.0 ] } ,
                { "Name": "Directorate of Sports Jawahar Lal Nehru Complex", "description": null, "coordinates": [ 76.7651908, 30.7620027, 0.0 ] } ,
                { "Name": "University School of Open Learning", "description": null, "coordinates": [ 76.7670389, 30.7572051, 0.0 ] } ,
                { "Name": "Administration Building", "description": null, "coordinates": [ 76.768232500000096, 30.7579588, 0.0 ] } ,
                { "Name": "Department of Chemistry\n", "description": null, "coordinates": [ 76.7682123, 30.7593913, 0.0 ] },
                { "Name": "Department of Economics", "description": null, "coordinates": [ 76.7715248, 30.7630537, 0.0 ] },
                { "Name": "Admin Block", "description": null, "coordinates": [ 76.7681587, 30.7578055, 0.0 ] } ,
                { "Name": "University Institute of Legal Studies\n", "description": null, "coordinates": [ 76.7669731, 30.7664256, 0.0 ] } ,
                { "Name": "The Bharat Scouts And Guides Haryana", "description": null, "coordinates": [ 76.770118, 30.7648566, 0.0 ] } ,
                { "Name": "BGJ Institute Of Health", "description": null, "coordinates": [ 76.7681097, 30.7567075, 0.0 ] } ,
                { "Name": "ISSER", "description": null, "coordinates": [ 76.767210499999905, 30.7570907, 0.0 ] } ,
                { "Name": "A. C. Joshi Library", "description": null, "coordinates": [ 76.7700037, 30.761578, 0.0 ] } ,
                { "Name": "Population Research Centre", "description": null, "coordinates": [ 76.76803, 30.7578402, 0.0 ] } 
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
