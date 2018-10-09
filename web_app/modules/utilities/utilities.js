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
                { "Name": "UIET photostate, printout and stationary", "description": null, "coordinates": [ 76.7573182, 30.748076, 0.0 ] } ,
                { "Name": "UIET Parking", "description": null, "coordinates": [ 76.7578298, 30.7487399, 0.0 ] } ,
                { "Name": "Dhillon Enterprises", "description": null, "coordinates": [ 76.7544907, 30.7473532, 0.0 ] } ,
                { "Name": "Students Parking, UIET Sector - 25D", "description": null, "coordinates": [ 76.7572659, 30.74971, 0.0 ] } ,
                { "Name": "State Bank ATM", "description": null, "coordinates": [ 76.756196, 30.749366, 0.0 ] } ,
                { "Name": "State Bank of India", "description": null, "coordinates": [ 76.7571591, 30.7486477, 0.0 ] } ,
                { "Name": "Vikram Stationary, Printout Service", "description": null, "coordinates": [ 76.7593872, 30.7494795, 0.0 ] } ,
                { "Name": "Baba Banda Singh Bahadur Hostel No.8 (Parking)", "description": null, "coordinates": [ 76.7599052, 30.7497051, 0.0 ] } ,
                { "Name": "Atma Ram & Sons (Chd )", "description": null, "coordinates": [ 76.768020799999903, 30.7553216, 0.0 ] } ,
                { "Name": "Sector 14 Market", "description": null, "coordinates": [ 76.7677946, 30.7558293, 0.0 ] } ,
                { "Name": "Panjab University Market", "description": null, "coordinates": [ 76.7674661, 30.755984, 0.0 ] } ,
                { "Name": "New Moti Provision Store", "description": null, "coordinates": [ 76.7672823, 30.7560935, 0.0 ] } ,
                { "Name": "Mondeo", "description": null, "coordinates": [ 76.768021, 30.755224, 0.0 ] } ,
                { "Name": "Gupta Traders", "description": null, "coordinates": [ 76.76788, 30.7551879, 0.0 ] } ,
                { "Name": "New Modern Opticians", "description": null, "coordinates": [ 76.7676913, 30.755262, 0.0 ] } ,
                { "Name": "Public Toilet - Sector 14", "description": null, "coordinates": [ 76.7680339, 30.7552893, 0.0 ] } ,
                { "Name": "Rama Traders", "description": null, "coordinates": [ 76.767885, 30.755367, 0.0 ] } ,
                { "Name": "Nain Graphics", "description": null, "coordinates": [ 76.767917, 30.755385, 0.0 ] } ,
                { "Name": "F Bazaarre", "description": null, "coordinates": [ 76.7679307, 30.7555329, 0.0 ] } ,
                { "Name": "janta footwear and communications", "description": null, "coordinates": [ 76.7677305, 30.7556, 0.0 ] } ,
                { "Name": "Janta Footwear, Communication & Documentation", "description": null, "coordinates": [ 76.7677168, 30.7556438, 0.0 ] } ,
                { "Name": "M\/S Bakshi Traders", "description": null, "coordinates": [ 76.7676956, 30.755727, 0.0 ] } ,
                { "Name": "Ravi Store", "description": null, "coordinates": [ 76.7674962, 30.7556939, 0.0 ] } ,
                { "Name": "Standard Shoe Maker", "description": null, "coordinates": [ 76.767425, 30.7557964, 0.0 ] } ,
                { "Name": "Surindra Stationer", "description": null, "coordinates": [ 76.7675239, 30.7559013, 0.0 ] } ,
                { "Name": "Atul Communiation", "description": null, "coordinates": [ 76.7674673, 30.7559373, 0.0 ] } ,
                { "Name": "Shopping Center", "description": null, "coordinates": [ 76.767401399999898, 30.75596, 0.0 ] } ,
                { "Name": "Navyug Medical & General Store", "description": null, "coordinates": [ 76.767301, 30.7561526, 0.0 ] } ,
                { "Name": "9 to 9 Shopee", "description": null, "coordinates": [ 76.7670697, 30.7565102, 0.0 ] } ,
                { "Name": "9 To 9 Shoppers", "description": null, "coordinates": [ 76.7670992, 30.7564629, 0.0 ] } ,
                { "Name": "Best Photostat & Dry Cleaners Dyers", "description": null, "coordinates": [ 76.767133000000101, 30.7564323, 0.0 ] } ,
                { "Name": "Sukhvir Studio", "description": null, "coordinates": [ 76.767159199999895, 30.7564047, 0.0 ] } ,
                { "Name": "Lyall Book Depot", "description": null, "coordinates": [ 76.7672318, 30.7564073, 0.0 ] } ,
                { "Name": "Canara Bank ATM", "description": null, "coordinates": [ 76.767231600000102, 30.7563125, 0.0 ] } ,
                { "Name": "Mittal Medical And General Store", "description": null, "coordinates": [ 76.7680765, 30.7560926, 0.0 ] } ,
                { "Name": "Airtel Banking Point", "description": null, "coordinates": [ 76.7679025, 30.756309, 0.0 ] } ,
                { "Name": "J.D Provision Store", "description": null, "coordinates": [ 76.76796, 30.756256, 0.0 ] } ,
                { "Name": "RAKESH TRADERS", "description": null, "coordinates": [ 76.7680128, 30.7561759, 0.0 ] } ,
                { "Name": "police station 14", "description": null, "coordinates": [ 76.7683015, 30.7565519, 0.0 ] } ,
                { "Name": "PU Dispensary", "description": null, "coordinates": [ 76.768097200000099, 30.7568427, 0.0 ] } ,
                { "Name": "Tuck Shop", "description": null, "coordinates": [ 76.770080499999906, 30.7558878, 0.0 ] } ,
                { "Name": "ESS JEE Provision Store", "description": null, "coordinates": [ 76.7673124, 30.7562004, 0.0 ] } ,
                { "Name": "A Vee Vee Enterprises", "description": null, "coordinates": [ 76.7673185, 30.7561229, 0.0 ] } ,
                { "Name": "Airtel Banking Point", "description": null, "coordinates": [ 76.7676, 30.756, 0.0 ] } ,
                { "Name": "Mod Fashion - Ramlal & Sons", "description": null, "coordinates": [ 76.7676564, 30.755797, 0.0 ] } ,
                { "Name": "Kataria's New Modern Opticians", "description": null, "coordinates": [ 76.7679226, 30.7553456, 0.0 ] } ,
                { "Name": "Prince Studio", "description": null, "coordinates": [ 76.767808300000098, 30.7552228, 0.0 ] } ,
                { "Name": "State Bank of India", "description": null, "coordinates": [ 76.766779, 30.7563284, 0.0 ] } ,
                { "Name": "STATE BANK ATM", "description": null, "coordinates": [ 76.766633, 30.756252, 0.0 ] } ,
                { "Name": "India Post", "description": null, "coordinates": [ 76.767536399999898, 30.7573976, 0.0 ] } ,
                { "Name": "Shiv Shakti Stationers", "description": null, "coordinates": [ 76.767960200000104, 30.7574321, 0.0 ] } ,
                { "Name": "Motorcycle Parking", "description": null, "coordinates": [ 76.771620100000106, 30.7589462, 0.0 ] } ,
                { "Name": "Hostel No. 2 Parking", "description": null, "coordinates": [ 76.7716405, 30.7592239, 0.0 ] } ,
                { "Name": "Mohammed Furkan Tailor", "description": null, "coordinates": [ 76.771148, 30.7585416, 0.0 ] } ,
                { "Name": "Car Parking for Outsiders", "description": null, "coordinates": [ 76.773729, 30.7606089, 0.0 ] } ,
                { "Name": "Car Parking", "description": null, "coordinates": [ 76.7704131, 30.7643792, 0.0 ] } ,
                { "Name": "Apurva Graphics Law Department", "description": null, "coordinates": [ 76.7687997, 30.7652225, 0.0 ] } ,
                { "Name": "Car Parking", "description": null, "coordinates": [ 76.7689536, 30.7651847, 0.0 ] } ,
                { "Name": "State Bank ATM", "description": null, "coordinates": [ 76.769403, 30.762114, 0.0 ] } ,
                { "Name": "Parking Area", "description": null, "coordinates": [ 76.77013, 30.7628799, 0.0 ] } ,
                { "Name": "Museum of Man", "description": null, "coordinates": [ 76.7668628, 30.7611813, 0.0 ] } ,
                { "Name": "motorcycle parking", "description": null, "coordinates": [ 76.7689388, 30.7603062, 0.0 ] } ,
                { "Name": "car parking", "description": null, "coordinates": [ 76.7689643, 30.760191, 0.0 ] } ,
                { "Name": "PU Shooting Range", "description": null, "coordinates": [ 76.7642654, 30.760268, 0.0 ] } ,
                { "Name": "Hockey Field", "description": null, "coordinates": [ 76.7651868, 30.7600228, 0.0 ] } ,
                { "Name": "Kiosk Refreshment", "description": null, "coordinates": [ 76.7638085, 30.7601173, 0.0 ] } ,
                { "Name": "Shinota NLP Training", "description": null, "coordinates": [ 76.763734, 30.759837, 0.0 ] } ,
                { "Name": "Panjab University Sports Ground", "description": null, "coordinates": [ 76.7661208, 30.7587136, 0.0 ] } ,
                { "Name": "HDFC Bank", "description": null, "coordinates": [ 76.758528, 30.759969, 0.0 ] } ,
                { "Name": "Gurudwara mukatsar Sahib Pu", "description": null, "coordinates": [ 76.7583465, 30.760729, 0.0 ] } ,
                { "Name": "Radha Krishna Temple", "description": null, "coordinates": [ 76.7586105, 30.7606794, 0.0 ] } ,
                { "Name": "Pharmacy Ground", "description": null, "coordinates": [ 76.768638199999899, 30.7641282, 0.0 ] } ,
                { "Name": "Scooter and Car Parking", "description": null, "coordinates": [ 76.770742599999906, 30.7612496, 0.0 ] } ,
                { "Name": "Peer Baba Ji", "description": null, "coordinates": [ 76.7732968, 30.7580271, 0.0 ] } ,
                { "Name": "Rakhi Textiles", "description": null, "coordinates": [ 76.769702, 30.7581011, 0.0 ] } 
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
